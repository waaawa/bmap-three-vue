import { GeoJSONDataSource, DataItem, Spark } from "mapv-three";

/**
 * 烟花管理函数
 * ```js
 *  this.$sparkManager = await useSparkManager(
 *     {
 *       color: 0xff0cc0,
 *       height: 200,
 *       speed: 0.1,
 *       idle: 500,
 *       tailLength: 80,
 *       emissive: 0x0000ff,
 *     },
 *     this.$engine
 *   );
 *
 *   this.$engine.event.bind("click", (e) => {
 *     this.$sparkManager.addSpark(e.point);
 *   });
 * ```
 * @param {Object} config
 * @param {Object} config.color - 烟花颜色，十六进制颜色值
 * @param {number} config.height - 烟花上升高度
 * @param {number} config.speed - 烟花上升速度
 * @param {number} config.idle - 烟花停留时间(ms)
 * @param {number} config.tailLength - 烟花尾迹长度
 * @param {number} config.emissive - 烟花发光颜色，十六进制颜色值
 * @param {import('mapv-three').Engine} engine - 地图引擎实例
 * @returns {Promise<{spark: Spark, addSpark: Function, dispose: Function}>} 返回烟花管理对象
 */
export async function useSparkManager(config, engine) {
  const _config = Object.assign(
    {
      color: 0xff0cc0,
      height: 200,
      speed: 0.1,
      idle: 500,
      tailLength: 80,
      emissive: 0x0000ff,
    },
    config
  );

  const spark = new Spark(_config);

  engine.add(spark);

  let data = null;

  /**
   * 添加一个烟花
   * @param {[number,number]} point
   */
  async function addSpark(point) {
    if (!data) {
      data = await GeoJSONDataSource.fromGeoJSON({
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [0, 0],
        },
      });

      spark.dataSource = data;
    }

    data.add(new DataItem(point));
  }

  return {
    spark,
    addSpark,
    dispose() {
      engine.remove(spark);
      spark.dispose();
    },
  };
}
