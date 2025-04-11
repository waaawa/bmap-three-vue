import { DataItem, GeoJSONDataSource, Heatmap3D, Heatmap } from "mapv-three";
import { arrify } from "../arrify";
import { randomPoints } from ".";
import { isEmpty } from "../is";

export async function initHeadMap3D({ engine, config }) {
  const cfg = Object.assign(
    {
      opacity: 0.8,
      radius: 10, // 热力绘制半径
      maxValue: 10, // 最大热力值
      heightRatio: 20, // 高度系数
      attenuateMValueFactor: 0.9, //径向渐变速度
      gradient: {
        0.1: "rgb(50, 50, 256)",
        0.2: "rgb(50, 250, 56)",
        0.5: "rgb(250, 250, 56)",
        1.0: "rgb(250, 50, 56)",
      },
    },
    config || {}
  );

  const heatmap = engine.add(new Heatmap3D(cfg));

  const dataSource = await GeoJSONDataSource.fromGeoJSON([]);
  dataSource.setAttribute("count");
  heatmap.dataSource = dataSource;

  const makeData = (item) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: item.position,
    },
    properties: {
      count: item.value,
    },
  });

  async function setData(p) {
    // const features = arrify(p).map((item) => makeData(item));

    // const dataSource = await GeoJSONDataSource.fromGeoJSON(features);

    arrify(p).forEach((item) => {
      if (isEmpty(item)) return;
      dataSource.add(
        new DataItem([item.position[0], item.position[1], 0], {
          count: Math.min(item.value, cfg.maxValue),
        })
      );
    });
  }

  return {
    heatmap,
    setData,
    makeData,
  };
}

export async function headMapDemo(engine) {
  const center = [116.389998, 39.9099206, 0];

  const heatmap = engine.add(
    new Heatmap3D({
      opacity: 1,
      radius: 100, // 热力绘制半径
      maxValue: 15, // 最大热力值
      attenuateMValueFactor: 0.5, //径向渐变速度
      gradient: {
        0.1: "rgb(50, 50, 256)",
        0.2: "rgb(50, 250, 56)",
        0.5: "rgb(250, 250, 56)",
        1.0: "rgb(250, 50, 56)",
      },
    })
  );
  const dataSource = await GeoJSONDataSource.fromGeoJSON(
    randomPoints(center, 0.01, 1000)
  );
  dataSource.setAttribute("count");
  heatmap.dataSource = dataSource;
}

export async function initHeadMap({ engine, config }) {
  const cfg = Object.assign(
    {
      keepSize: false,
      opacity: 1,
      radius: 2, // 热力绘制半径
      maxValue: 10, // 最大热力值
      attenuateMValueFactor: 0.5, //径向渐变速度
      gradient: {
        0.1: "rgb(50, 50, 256)",
        0.2: "rgb(50, 250, 56)",
        0.5: "rgb(250, 250, 56)",
        1.0: "rgb(250, 50, 56)",
      },
    },
    config || {}
  );

  const heatmap = engine.add(new Heatmap(cfg));

  let dataSource = await GeoJSONDataSource.fromGeoJSON([]);
  dataSource.setAttribute("count");
  heatmap.dataSource = dataSource;

  const makeData = (item) => {
    return arrify(item)
      .map((item) => {
        if (isEmpty(item)) return;

        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [item.position[0], item.position[1], 10],
          },
          properties: {
            count: item.value,
          },
        };
      })
      .filter(Boolean);
  };

  async function setData(p) {
    dataSource.setData(makeData(p));
  }

  function addPoint(p) {
    arrify(p).forEach((item) => {
      dataSource.add(
        new DataItem([item.position[0], item.position[1], 10], {
          count: item.value,
        })
      );
    });
  }

  return {
    heatmap,
    setData,
    addPoint,
    makeData,
  };
}
