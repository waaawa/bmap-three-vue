import { GeoJSONDataSource, FatLine } from "mapv-three";

import { arrify } from "@/utils/arrify";

/** 线管理函数
 *
 * ```js
 *  this.$lineManager = await useLineManager({
 *      engine: this.$engine,
 *    });
 *
 *    const lineData = [
 *      {
 *        color: "#ffff00",
 *        position: [12956455.078979049, 4825523.581885624, 10],
 *      },
 *      {
 *        color: "#ff00ff",
 *        position: [12957016.507879993, 4825299.425105057, 10],
 *      },
 *      {
 *        color: "#ff0000",
 *        position: [12957009.35490845, 4824864.15881215, 10],
 *      },
 *      {
 *        color: "#00ff00",
 *        position: [12956340.919167032, 4824939.263945814, 10],
 *      },
 *      {
 *        color: "#00ffff",
 *        position: [12956456.58108184, 4825449.97885466, 10],
 *      },
 *    ];
 *
 *    this.$lineManager.addAggregationLine({
 *      name: "aaa",
 *      flyConfig: {
 *        vertexColors: false,
 *        lineWidth: 8,
 *      },
 *      basicConfig: {
 *        vertexColors: true,
 *      },
 *      basicData: lineData,
 *      flyData: lineData,
 *    });
 *
 *    this.$engine.event.bind("click", (e) => {
 *      const data = {
 *        position: [...e.point, randomRange(10, 40)],
 *        color: randomHexColorStr(),
 *      };
 *
 *      this.$lineManager.setAggregationLine({
 *        name: "aaa",
 *        basicData: data,
 *        flyData: data,
 *      });
 *    });
 * ```
 * @param {Object} params - 配置参数对象
 * @param {import('mapv-three').Engine} params.engine - 地图引擎实例
 */
export async function useLineManager({ engine }) {
  const record = {};

  async function addLine({ name, config, data }) {
    if (record[name]) return record[name];

    const line = new FatLine(config);

    engine.add(line);

    let dataSource;

    if (data.length > 0) {
      dataSource = await GeoJSONDataSource.fromGeoJSON(makeData(data));

      dataSource.setAttribute("color");

      line.dataSource = dataSource;
    }

    record[name] = { line, name, data, dataSource };
  }

  function addBasicLine({ name, config, data }) {
    addLine({
      name,
      data,
      config: {
        lineWidth: 5,
        color: "#ff0000",
        lineCap: "round",
        lineJoin: "round",
        opacity: 1.0,
        ...config,
      },
    });
  }

  function addFlyLine({ name, config, data }) {
    addLine({
      name,
      data,
      config: {
        color: "green",
        lineWidth: 5,
        lineCap: "round",
        lineJoin: "round",
        enableAnimation: true, // 是否开启线动画
        enableAnimationChaos: true, // 是否开启不规则动画
        animationTailType: 2, // 动画类型，1按线长度比例，需设置`animationTailRatio`属性，2按固定长度，需设置`animationTailLength`属性
        // animationTailRatio: 0.5, // 拖尾动画长度比例
        animationTailLength: 100, // 拖尾动画固定长度
        animationIdle: 1000, // 拖尾动画间隔时间
        animationSpeed: 1,
        ...config,
      },
    });
  }

  function makeData(data) {
    if (data.length === 0) return [];

    const __data = [data[0]].concat(data);

    const color = __data.map((e) => e.color);
    const position = __data.map((e) => e.position);

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            color: color,
          },
          geometry: {
            type: "LineString",
            coordinates: position,
          },
        },
      ],
    };
  }

  async function setLine(name, newData, reset) {
    if (record[name]) {
      const { line, data } = record[name];

      if (reset) {
        data.splice(0, Infinity, ...newData);
      } else {
        data.push(...arrify(newData));
      }

      if (!record[name].dataSource) {
        line.dataSource = await GeoJSONDataSource.fromGeoJSON(makeData(data));
        line.dataSource.setAttribute("color");
      } else {
        line.dataSource.setData(makeData(data));
      }
    } else {
      console.log("没有这条线", name);
    }
  }

  function addAggregationLine({
    name,
    basicConfig,
    flyConfig,
    flyData,
    basicData,
  }) {
    addFlyLine({
      name: `${name}_fly`,
      config: flyConfig,
      data: flyData,
    });

    addBasicLine({
      name: `${name}_basic`,
      config: basicConfig,
      data: basicData,
    });
  }

  async function setAggregationLine({
    name,
    flyData,
    basicData,
    flyReset,
    basicReset,
  }) {
    const task = [];

    flyData && task.push(setLine(`${name}_fly`, flyData, flyReset));
    basicData && task.push(setLine(`${name}_basic`, basicData, basicReset));

    await Promise.all(task);
  }

  return {
    record,
    addLine,
    addBasicLine,
    addFlyLine,
    addAggregationLine,
    setAggregationLine,
    setLine,
    dispose() {
      Object.values(record).forEach((item) => {
        engine.remove(item.line);
        item.line.dispose();
      });
    },
  };
}
