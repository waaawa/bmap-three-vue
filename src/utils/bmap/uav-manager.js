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
}) {
  try {
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

      instance.rotation.x = Math.PI * 0.5;

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
     * @typedef {{ t:number, step: number, points: THREE.Vector3[], max: number, path: THREE.CatmullRomCurve3 }} IMoveConfig
     * @type {Record<string, IMoveConfig>}
     */
    const moveConfig = {};

    const moveTo = ({ name, position, step = 0.2 }) => {
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
        const path = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0);
        const max = path.getLength();

        moveConfig[name] = {
          t: 0,
          step,
          max,
          name,
          points,
          path,
        };
      } else {
        moveConfig[name].points.push(...posArr);

        moveConfig[name].path = new THREE.CatmullRomCurve3(
          moveConfig[name].points,
          false,
          "catmullrom",
          0
        );

        moveConfig[name].max = moveConfig[name].path.getLength();
      }
    };

    const update = (t, name) => {
      Object.values(moveConfig).forEach((item) => {
        if (item.path && item.t < item.max) {
          item.t = Math.min(item.max, item.t + item.step);

          setPosition(item.name, item.path.getPointAt(item.t / item.max));
        }
      });

      if (name) {
        record[name] && record[name]?.mixer?.update(t);
      } else {
        Object.values(record).forEach((item) => {
          item.mixer?.update?.(t);
        });
      }
    };

    return {
      model,
      record,
      addUAV,
      delUAV,
      update,
      moveTo,
      dispose() {
        labelManager.dispose();

        Object.values(record).forEach((item) => {
          engine.remove(item.instance);
          item.instance.dispose();
        });

        model.dispose();
      },
    };
  } catch (error) {
    return Promise.reject(error);
  }
}
