import { EmptySky } from "mapv-three";

/**
 * 天空管理函数
 * @param {Engine} engine - 地图引擎实例
 * @returns {Promise<{sky: EmptySky, dispose: Function}>} 返回天空管理对象
 */
export function useSkyManager(engine) {
  const sky = new EmptySky();

  engine.add(sky);

  return {
    sky,
    dispose() {
      engine.remove(sky);
      sky.dispose();
    },
  };
}
