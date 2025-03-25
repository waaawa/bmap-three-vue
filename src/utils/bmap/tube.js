import * as THREE from "bmap-three";
import { TubePath } from "./tube-path";
import { arrify } from "../arrify";
import { useLineManager } from "./line-manager";

/**
 * 管道效果管理器
 * @param {Object} options - 配置项
 * @param {import('mapv-three').Engine} options.engine - Three.js引擎实例
 * @param {Array<Array<number>>} options.path - 路径点数组，每个点为[x,y,z]格式
 * @returns {Promise<THREE.Mesh>} 返回创建的管道mesh对象
 * @example
 * const mesh = await useTubeManager({
 *   engine: threeEngine,
 *   path: [[0,0,0], [10,10,10], [20,20,20]]
 * });
 */
export async function useTubeManager({ config, engine, data }) {
  const {
    radius,
    radiusSegments,
    closed,
    normalColor,
    elbowSegmentNum,
    elbowSegmentOffset,
  } = Object.assign(
    {
      radius: 5,
      radiusSegments: 14,
      closed: false,
      normalColor: 0x00ffff,
      elbowSegmentNum: 3,
      elbowSegmentOffset: 0.3,
    },
    config
  );

  const lineManager = await useLineManager({ engine });

  let pos = arrify(data);
  let model;

  initModel([...pos]);

  function getGeometry(data, radius, radiusSegments, closed) {
    const path = getPath(data);

    const geo = new TubePath(
      path,
      TubePath.pathToUMapping(path, elbowSegmentNum, elbowSegmentOffset),
      radius,
      radiusSegments,
      closed
    );

    // 设置顶点颜色
    const colors = getVertexColorByData(data);
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    return geo;
  }

  function initModel(data) {
    if (data.length < 2 || model) return;

    const geometry = getGeometry(data, radius, radiusSegments, closed);

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      depthTest: true,
      depthWrite: false,
    });

    lineManager.addFlyLine({
      name: "tubeFlyLine",
      config: {
        color: "white",
        lineWidth: 10,
        vertexColors: false,
      },
      data: data,
    });

    model = new THREE.Mesh(geometry, material);
    engine.add(model);
  }

  /**
   * 根据数据设置顶点颜色
   * @param {Array<Array<number>>} path - 路径点数组
   * @returns {Array<number>} 顶点颜色数组
   */
  function getVertexColorByData(data) {
    const colors = [];

    // 顶点数量计算公式
    // geo.attributes.position.count / (radiusSegments + 1) - ((pos.length - 2) * (elbowSegmentNum * 2 + 1) + 2)

    const segNum = elbowSegmentNum * 2 + 1;

    // 为每个路径点创建颜色
    for (let i = 0; i < data.length; i++) {
      const inc = (data.length - 1 + i) % (data.length - 1) ? segNum : 1;

      const color = data[i].color
        ? new THREE.Color(data[i].color)
        : new THREE.Color(normalColor);

      // 为每个管道段的所有顶点设置颜色
      for (let j = 0; j < (radiusSegments + 1) * inc; j++) {
        colors.push(color.r, color.g, color.b);
      }
    }

    return colors;
  }

  function getPath(data) {
    if (data.length < 2) return [];

    const p = data.map((item) => {
      return new THREE.Vector3(...engine.map.projectPointArr(item.position));
    });

    const path = new THREE.CatmullRomCurve3(p, false, "catmullrom", 0);

    return path;
  }

  function addTube(data) {
    pos.push(...arrify(data));

    if (model) {
      const geometry = getGeometry([...pos], radius, radiusSegments, closed);

      model.geometry.dispose();
      model.geometry = geometry;

      lineManager.setLine("tubeFlyLine", data);
    } else {
      initModel([...pos]);
    }
  }

  return { addTube };
}
