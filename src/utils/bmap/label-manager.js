import { GeoJSONDataSource, ClusterPoint, DomPoints } from "mapv-three";

import { arrify } from "@/utils/arrify";
import { isEmpty } from "@/utils/is";

/**
 * 标签管理函数
 * ```js
 * const labelManager = await useLabelManager({
 *   config: {
 *     minUpdateInterval: 1000,
 *     zooms: [13, 19],
 *     label: {
 *       background: "assets/images/speed-panel.png",
 *       fontSize: 14,
 *       width: 180,
 *       height: 60,
 *       padding: [20, 0, 0, 60],
 *       offset: [0, -40],
 *       depthTest: false,
 *       fillStyle: "red"
 *     },
 *     cluster: {
 *       radius: 10
 *     }
 *   },
 *   engine: mapEngine,
 *   data: [{
 *     position: [116.404, 39.915],
 *     text: "示例标签"
 *   }]
 * });
 * ```
 * @param {Object} params - 配置参数对象
 * @param {Object} params.config - 标签配置
 * @param {number} params.config.minUpdateInterval - 最小更新间隔(ms)
 * @param {number[]} params.config.zooms - 标签显示的缩放级别范围[min, max]
 * @param {Object} params.config.label - 标签样式配置
 * @param {string} params.config.label.background - 标签背景图片URL
 * @param {number} params.config.label.fontSize - 标签字体大小
 * @param {number} params.config.label.width - 标签宽度
 * @param {number} params.config.label.height - 标签高度
 * @param {number[]} params.config.label.padding - 标签内边距[top, right, bottom, left]
 * @param {number[]} params.config.label.offset - 标签偏移量[x, y]
 * @param {boolean} params.config.label.depthTest - 是否开启深度测试
 * @param {string} params.config.label.fillStyle - 标签文字颜色
 * @param {Object} params.config.cluster - 聚合配置
 * @param {number} params.config.cluster.radius - 聚合半径
 * @param {import('mapv-three').Engine} params.engine - 地图引擎实例
 * @param {Array<{position: number[], text: string}>} params.data - 标签数据
 * @returns {Promise<{addLabel: Function, removeLabel: Function, resetLabel: Function, dispose: Function}>} 返回标签管理对象
 */
export async function useLabelManager({ config, engine, data }) {
  let {
    minUpdateInterval,
    zooms,
    label,
    cluster: _cluster,
  } = Object.assign(
    {
      minUpdateInterval: 1000,
      zooms: [16, 21],
      label: {
        background: "assets/images/label-common-bg.png",
        fontSize: 14,
        width: 120,
        height: 40,
        padding: [20, 0, 0, 70],
        offset: [0, -60],
        textAlign: "left",
        depthTest: false,
        fillStyle: "white",
      },
      cluster: {
        radius: 10,
      },
    },
    config
  );

  const _data = arrify(data);

  const cluster = new ClusterPoint({
    cluster: _cluster,
    label,
  });

  cluster.minUpdateInterval = minUpdateInterval;
  cluster.zooms = zooms;

  engine.add(cluster);

  let dataSource;

  function makeData(data) {
    return arrify(data).map(({ position, text }) => {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: position,
        },
        properties: {
          text: text,
        },
      };
    });
  }

  async function setDataSource(data) {
    if (dataSource) {
      dataSource.setData(makeData(data));
      return;
    }

    dataSource = await GeoJSONDataSource.fromGeoJSON(makeData(data));

    cluster.dataSource = dataSource;
    cluster.getChildDataSource().setAttribute("text", (p) => p.text);
  }

  if (_data.length > 0) {
    setDataSource(_data);
  }

  async function addLabel({ id, text, position }) {
    if (_data.some((e) => e.id === id)) return;

    _data.push({ id, position, text });

    await setDataSource(_data);
  }

  async function resetLabel(data) {
    _data.splice(0, Infinity, data);

    dataSource.setData(makeData(_data));
  }

  async function removeLabel(id) {
    const ids = arrify(id);

    const data = _data.filter((e) => !ids.includes(e.id));

    if (data.length === _data.length) return;

    resetLabel(data);
  }

  return {
    addLabel,
    removeLabel,
    resetLabel,
    dispose() {
      engine.remove(cluster);
      cluster.dispose();
    },
  };
}

/**
 * DOM标签管理函数
 * @param {Object} params - 配置参数对象
 * @param {import('mapv-three').Engine} params.engine - 地图引擎实例
 * @param {Object} params.config - 标签配置
 * @param {number[]} params.config.zooms - 标签显示的缩放级别范围[min, max]
 * @param {Function} params.config.makeDom - 自定义DOM生成函数
 * @param {Array<{id: string|number, position: number[], info: Object}>} params.data - 标签数据
 * @returns {Promise<{addLabel: Function, upadteLabel: Function, removeLabel: Function, resetLabel: Function, dispose: Function}>} 返回DOM标签管理对象
 * @example
 * ```js
 * const domLabelManager = await useDomLabelManager({
 *   config: {
 *     zooms: [0, 0],
 *     minUpdateInterval: 1000,
 *     makeDom(feature) {
 *       const node = document.createElement("div");
 *       node.style.width = "120px";
 *       node.style.height = "40px";
 *       node.innerText = feature.properties.text;
 *       return node;
 *     }
 *   },
 *   engine: mapEngine,
 *   data: [{
 *     id: 1,
 *     position: [116.404, 39.915],
 *     info: {
 *       text: "示例标签"
 *     }
 *   }]
 * });
 * ```
 */
export async function useDomLabelManager({ engine, config, data }) {
  let { zooms, makeDom, offset, minUpdateInterval } = Object.assign(
    {
      zooms: [1, 21],
      offset: [0, 0],
      minUpdateInterval: 1000,
      makeDom(feature) {
        const node = document.createElement("div");
        node.setAttribute(
          "style",
          `
          width: 120px;
          height: 30px;
          
          font-size: 14px;
          color: #fff;
          background-color: #000;

          border: 3px solid #ccc;
          border-radius: 10px;

          display: flex;
          justify-content: center;
          align-items: center;

          transform: translateX(-50%);
        `
        );

        node.innerText = feature.properties.text;

        return node;
      },
    },
    config
  );

  let record = {};

  const domPoint = engine.add(new DomPoints({ makeDom, offset }));

  domPoint.frustumCulled = false;
  domPoint.renderItem = makeDom;

  const dompointDataSource = await GeoJSONDataSource.fromGeoJSON([]);

  domPoint.dataSource = dompointDataSource;

  domPoint.zooms = zooms;
  domPoint.minUpdateInterval = minUpdateInterval;

  makeData(data);

  function makeData(data) {
    if (isEmpty(data)) return [];

    return arrify(data).map((e) => {
      const { position, ...info } = e;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: position,
        },
        properties: info,
      };
    });
  }

  function addLabel(data) {
    if (isEmpty(data) || isEmpty(data.id)) return;

    record[data.id] = data;

    dompointDataSource.setData(makeData(Object.values(record)));
  }

  function removeLabel(id) {
    if (isEmpty(id)) return;

    delete record[id];

    dompointDataSource.setData(makeData(Object.values(record)));
  }

  function upadteLabel(data) {
    if (isEmpty(data) || isEmpty(data.id)) return;

    record[data.id] = data;

    dompointDataSource.setData(makeData(Object.values(record)));
  }

  function resetLabel(data) {
    data.forEach((e) => {
      if (isEmpty(e.id)) return;
      record[e.id] = e;
    });

    dompointDataSource.setData(makeData(data));
  }

  return {
    addLabel,
    upadteLabel,
    removeLabel,
    resetLabel,
    dispose() {
      engine.remove(domPoint);
      domPoint.dispose();
    },
  };
}
