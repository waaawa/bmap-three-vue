import {
  LightSphere,
  SimplePoint,
  GeoJSONDataSource,
  DataItem,
} from "mapv-three";
import { arrify } from "../arrify";
import { isEmpty } from "../is";
import * as THREE from "bmap-three";

export async function useLightSphereManager({ engine, color }) {
  const lightSphere = engine.add(
    new LightSphere({
      color: color,
      radius: 20, // 球体半径
      animationEffectPeriod: 3000, // 动画周期
      animationEffect: false, // 是否开启动画
      widthSegments: 50, //水平分段数
      heightSegments: 50, // 垂直分段数
      phiStart: 0, // 水平起始角度
      phiLength: 2 * Math.PI, //水平扫描角度大小
      thetaStart: 0, // 垂直起始角度
      thetaLength: Math.PI * 2, // 垂直扫描角度大小
    })
  );

  let dataSource = await mapvthree.GeoJSONDataSource.fromGeoJSON([]);
  lightSphere.dataSource = dataSource;

  function setData() {}

  function addPoints(p) {
    arrify(p).forEach((item) => {
      if (isEmpty(item)) return;
      dataSource.add(
        new DataItem([item.position[0], item.position[1], 0], {
          count: Math.min(item.value, cfg.maxValue),
        })
      );
    });
  }

  function clear() {}

  function dispose() {}

  return {
    setData,
    addPoints,
    clear,
    dispose,
  };
}

export async function useSimplePointManager({ engine, size }) {
  const point = engine.add(
    new SimplePoint({
      opacity: 1,
      vertexColors: true,
      size: size,
      // vertexSizes: true,
    })
  );

  let dataSource = await GeoJSONDataSource.fromGeoJSON([]);
  point.dataSource = dataSource;
  dataSource.setAttribute("color", "color");
  // dataSource.setAttribute("size", "size");

  function addPoints(p) {
    arrify(p).forEach((item) => {
      if (isEmpty(item)) return;

      dataSource.add(
        new DataItem([item.position[0], item.position[1], item.position[2]], {
          color: item.color,
          size: item.size,
        })
      );
    });

    console.log(dataSource);
  }

  function dispose() {
    point.dispose();
  }

  return {
    addPoints,
    dispose,
  };
}

export function usePoints({ engine }) {
  const geometry = new THREE.BufferGeometry();

  const positions = [];
  const colors = [];

  const _color = new THREE.Color();

  let position = new THREE.Float32BufferAttribute(positions, 3);
  let color = new THREE.Float32BufferAttribute(colors, 3);

  geometry.setAttribute("position", position);
  geometry.setAttribute("color", color);

  geometry.computeBoundingSphere();

  const sprite = new THREE.TextureLoader().load("assets/images/disc.png");

  const material = new THREE.PointsMaterial({
    size: 15,
    map: sprite,
    transparent: true,
    vertexColors: true,
    depthTest: true,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);

  engine.add(points);

  function addPoints(p) {
    arrify(p).forEach((e) => {
      _color.set(e.color);
      colors.push(_color.r, _color.g, _color.b);

      positions.push(...engine.map.projectPointArr(e.position));

      position = new THREE.Float32BufferAttribute(positions, 3);
      color = new THREE.Float32BufferAttribute(colors, 3);

      geometry.setAttribute("position", position);
      geometry.setAttribute("color", color);
    });

    geometry.computeBoundingSphere();
    geometry.computeBoundingBox();
  }

  function dispose() {
    points.removeFromParent();

    geometry.dispose();
    material.dispose();
  }

  return {
    mesh: points,
    addPoints,
    dispose,
  };
}
