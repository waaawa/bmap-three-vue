import * as THREE from "bmap-three";
import { loadGLTF } from "./loader";
import { useDomLabelManager } from "./label-manager";

/**
 * 无人机管理函数
 * @param {Object} params - 配置参数对象
 * @param {Function} params.onProgress - 加载进度回调函数
 * @param {import('mapv-three').Engine} Params.engine - 地图引擎实例
 */
export async function useUAVManager({ onProgress, engine }) {
  try {
    const gltf = await loadGLTF({
      url: "assets/uav.glb",
      onProgress,
    });

    const model = gltf.scene;

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
      instance.position.set(pos[0] - 28, pos[1], pos[2]);

      engine.add(instance);
      engine.event.markEventProxy(instance);

      onClick && engine.event.bind(instance, "click", onClick);
    };

    const delUAV = (engine, name) => {
      const { instance, config } = record[name];
      const { onClick } = config;

      labelManager.removeLabel(name);

      engine.remove(instance);
      onClick && engine.event.unbind(instance, "click", onClick);
    };

    const update = (t, name) => {
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
