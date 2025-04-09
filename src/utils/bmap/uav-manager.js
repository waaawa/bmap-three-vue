import * as THREE from "bmap-three";
import { loadGLTF } from "./loader";
import { useDomLabelManager } from "./label-manager";
import { isArray } from "../is";

/**
 * 无人机管理函数
 * @param {Object} params - 配置参数对象
 * @param {Function} params.onProgress - 加载进度回调函数
 * @param {[number,number, number]} params.offset - 偏移量
 * @param {import('mapv-three').Engine} Params.engine - 地图引擎实例
 */
export async function useUAVManager({
  onProgress,
  engine,
  offset = [0, 0, 0],
  rotation = [Math.PI * 0.5, 0, 0],
}) {
  const gltf = await loadGLTF({
    url: "assets/uav.glb",
    onProgress,
  });

  const model = gltf.scene;

  /**
   * @type {Record<string, { instance: THREE.Object3D, mixer: THREE.AnimationMixer, config: { name: string, position: [number, number, number], onClick: Function } }>}
   */
  const record = {};

  const labelManager = await useDomLabelManager({
    engine: engine,
    data: [],
    config: {
      minUpdateInterval: 1000,
      zooms: [13, 21],
      offset: [0, -60],
    },
  });

  /**
   * 添加UAV
   */
  const addUAV = ({ name, position, onClick }) => {
    if (record[name]) {
      return;
    }

    /** @type {THREE.Object3D} */
    const instance = model.clone();

    instance.name = name;

    labelManager.addLabel({
      id: name,
      position,
      text: name,
    });

    const mixer = new THREE.AnimationMixer(instance);
    mixer.clipAction(gltf.animations[0]).setDuration(1).play();

    record[name] = { instance, mixer, config: { name, position, onClick } };

    const pos = engine.map.projectPointArr(position);

    instance.rotation.x = rotation[0];
    instance.rotation.y = rotation[1];
    instance.rotation.z = rotation[2];

    instance.position.set(...getFixPos(pos));

    engine.add(instance);
    engine.event.markEventProxy(instance);

    onClick && engine.event.bind(instance, "click", onClick);
  };

  function getFixPos(pos, type) {
    if (pos.isVector3) {
      if (type === "vec3") {
        return new THREE.Vector3(
          pos.x + offset[0],
          pos.y + offset[1],
          pos.z + offset[2]
        );
      }

      return [pos.x + offset[0], pos.y + offset[1], pos.z + offset[2]];
    }

    if (type === "vec3") {
      return new THREE.Vector3(
        pos[0] + offset[0],
        pos[1] + offset[1],
        pos[2] + offset[2]
      );
    }

    return [pos[0] + offset[0], pos[1] + offset[1], pos[2] + offset[2]];
  }

  const delUAV = (engine, name) => {
    const { instance, config } = record[name];
    const { onClick } = config;

    labelManager.removeLabel(name);

    engine.remove(instance);
    onClick && engine.event.unbind(instance, "click", onClick);
  };

  const setPosition = (name, position) => {
    if (!record[name]) return;

    // 设置模型朝向
    const instance = record[name].instance;
    instance.position.copy(getFixPos(position, "vec3"));

    labelManager.upadteLabel({
      id: name,
      position: [position.x, position.y, position.z],
      text: name,
    });
  };

  /**
   * @typedef {{ t:number, step: number, points: THREE.Vector3[], max: number, ind: number, len: number, a: THREE.Vector3, b: THREE.Vector3, data: any }} IMoveConfig
   * @type {Record<string, IMoveConfig>}
   */
  const moveConfig = {};
  const moveSubs = [];

  function onMove(cb) {
    moveSubs.push(cb);
  }

  const moveTo = ({ name, position, data, step = 0.02 }) => {
    if (!record[name]) return;

    const posArr = [];

    if (isArray(position[0])) {
      position.forEach((pos) => {
        const item = engine.map.projectPointArr(pos);
        posArr.push(new THREE.Vector3(...item));
      });
    } else {
      const item = engine.map.projectPointArr(position);
      posArr.push(new THREE.Vector3(...item));
    }

    if (!moveConfig[name]) {
      const points = [record[name].instance.position.clone(), ...posArr];
      const max = points.length;

      moveConfig[name] = {
        t: Infinity,
        step,
        ind: -1,
        max,
        name,
        data: [data],
        len: 0,
        points,
      };
    } else {
      moveConfig[name].points.push(...posArr);
      moveConfig[name].data.push(data);
      moveConfig[name].max = moveConfig[name].points.length;
    }
  };

  const update = (t, name) => {
    try {
      Object.values(moveConfig).forEach((item) => {
        // 跳转到下一段路径
        if (item.t >= item.len && item.max - 2 > item.ind) {
          item.ind += 1;
          item.t = 0;

          item.a = item.points[item.ind].clone();
          item.b = item.points[item.ind + 1].clone();

          // 计算模型朝向
          const dir = item.b.clone().sub(item.a).normalize();
          const angle = Math.atan2(dir.y, dir.x);

          record[item.name].instance.rotation.y = angle + Math.PI / 2;

          item.len = item.a.distanceTo(item.b);

          moveSubs.forEach((cb) => cb(item));
        }

        // 当前路段移动
        if (item.max - 1 > item.ind && item.t < item.len) {
          item.t += item.step;

          const r = item.t / item.len;

          const p = item.a.clone().lerp(item.b, Math.min(1, r));

          setPosition(item.name, p);
        }
      });

      if (name) {
        record[name] && record[name]?.mixer?.update(t);
      } else {
        Object.values(record).forEach((item) => {
          item.mixer?.update?.(t);
        });
      }
    } catch (error) {
      console.log("更新无人机动画失败", error);
    }
  };

  return {
    model,
    record,
    addUAV,
    delUAV,
    update,
    moveTo,
    onMove,
    dispose() {
      labelManager.dispose();

      Object.values(record).forEach((item) => {
        engine.remove(item.instance);
        item.instance.dispose();
      });

      model.dispose();
    },
  };
}
