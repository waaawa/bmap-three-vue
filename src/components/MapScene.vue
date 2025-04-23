<template>
  <div id="container"></div>
</template>

<script>
import {
  Engine,
  GeoJSONDataSource,
  Pillar,
  DataItem,
  EmptySky,
} from "mapv-three";
import { useUAVManager, useLineManager } from "@/utils/bmap";

import * as THREE from "bmap-three";

import { randomHexColorStr } from "@/utils/color";
import { randomRange } from "@/utils/math";
import { initHeadMap3D } from "@/utils/bmap/headmap";
import { usePoints, useSimplePointManager } from "@/utils/bmap/points-manager";

export default {
  name: "MapScene",
  mixins: [],
  props: {
    msg: String,
  },
  data() {
    return {
      lineData: [],
      lineData2: [
        {
          color: "#ffff00",
          position: [12956455.078979049, 4825523.581885624, 10],
        },
        {
          color: "#ff00ff",
          position: [12957016.507879993, 4825299.425105057, 10],
        },
        {
          color: "#ff0000",
          position: [12957009.35490845, 4824864.15881215, 10],
        },
        {
          color: "#00ff00",
          position: [12956340.919167032, 4824939.263945814, 10],
        },
        {
          color: "#00ffff",
          position: [12956456.58108184, 4825449.97885466, 10],
        },
        {
          position: [
            116.38888828305818, 39.911673488451456, 23.028086856099904,
          ],
          color: "#b2c5d5",
        },
        {
          position: [116.3886808145498, 39.911518807314245, 30.040745811918594],
          color: "#3f7b5a",
        },
        {
          position: [116.3892054557795, 39.91153386064333, 27.98754942489007],
          color: "#19bcb7",
        },
        {
          position: [116.3893981452758, 39.91141202618037, 13.080416628173895],
          color: "#efc246",
        },
        {
          position: [116.38919325229915, 39.9113015792505, 22.81956346207879],
          color: "#452e40",
        },
        {
          position: [116.38904679643151, 39.911344536759, 30.541790857299524],
          color: "#0be22f",
        },
        {
          position: [116.3897276197521, 39.9113698726518, 29.48041580480683],
          color: "#c16521",
        },
        {
          position: [
            116.38902003007138, 39.910949524719165, 27.767469308120333,
          ],
          color: "#28aab6",
        },
        {
          position: [116.39037656113219, 39.91064497928969, 19.475906902412582],
          color: "#8d0ae6",
        },
        {
          position: [116.38907652189982, 39.910203194154086, 17.92531533237182],
          color: "#c9c751",
        },
        {
          position: [
            116.39064577269352, 39.910733326037864, 18.265791477975082,
          ],
          color: "#a48986",
        },
        {
          position: [116.38860288106714, 39.910144720162, 38.60272069997782],
          color: "#3caff9",
        },
        {
          position: [116.38675667882201, 39.91140585314116, 10.16756823694446],
          color: "#a0971c",
        },
        {
          position: [116.38871303021081, 39.91007062463201, 16.91346975259764],
          color: "#bce0ee",
        },
        {
          position: [116.39088921905622, 39.91065488641155, 22.204955564122784],
          color: "#e94f7c",
        },
        {
          position: [116.39092576230401, 39.91265279505218, 12.20249046862212],
          color: "#c1592f",
        },
        {
          position: [116.39030027118929, 39.91177646666608, 39.1290257923623],
          color: "#41ca2d",
        },
        {
          position: [116.38987690213803, 39.911160287524005, 33.52578092709089],
          color: "#857ed4",
        },
        {
          position: [116.3904367577522, 39.91133046269633, 34.489606357488235],
          color: "#4cdf8f",
        },
        {
          position: [116.390739122536, 39.91112562222292, 24.689854194122148],
          color: "#6daaf2",
        },
      ],
      config: {
        center: [116.389998, 39.9099206, 0],
        pitch: 60,
        zoom: 18,
      },
      mixerArr: [],
      prevTime: Date.now(),
    };
  },
  create() {},
  mounted() {
    this.initScene(this.config);
    this.modelMixerAnimation();
  },
  methods: {
    async initPointsManager() {
      const simplePointManager = await useSimplePointManager({
        engine: this.$engine,
        size: 2,
      });

      this.$simplePointManager = simplePointManager;
    },
    async initUAVManager() {
      this.$uavManager = await useUAVManager({
        // onProgress: (v) => {
        //   console.log(v);
        // },
        offset: [0, 0, 0],
        engine: this.$engine,
      });

      this.$uavManager.addUAV({
        name: "aaa",
        position: [116.38999802501954, 39.90992061915485, 50],
        onClick: (e) => {
          this.$engine.map.setCenter(e.point);
        },
      });

      this.$uavManager.onMove((item) => {
        const { x, y, z } = item.points[item.ind + 1];

        const data = [
          {
            position: [x, y, z],
            color: randomHexColorStr(),
          },
        ];

        if (item.ind === 0) {
          const { x, y, z } = item.points[item.ind];
          data.unshift({
            position: [x, y, z],
            color: randomHexColorStr(),
          });
        }

        // this.$lineManager.setAggregationLine({
        //   name: "line",
        //   flyData: data,
        //   basicData: data,
        // });

        // this.$pointsManager.addPoints(data);

        this.$simplePointManager.addPoints(data);

        // console.log(item.data[item.ind + 1].value);

        // console.log(item.data);

        this.$heatmap3D.setData(item.data[item.ind + 1]);
      });

      this.$engine.event.bind("click", (e) => {
        const p = [...e.point, randomRange(10, 40)];

        this.$uavManager.moveTo({
          name: "aaa",
          step: 2,
          data: {
            position: p,
            value: randomRange(1, 15),
          },
          position: p,
        });
      });
    },
    async initHeadMap() {
      const $heatmap3D = await initHeadMap3D({
        config: {
          opacity: 1,
          radius: 5, // 热力绘制半径
          maxValue: 10, // 最大热力值
          heightRatio: 10, // 高度系数
          attenuateMValueFactor: 1, //径向渐变速度
          gradient: {
            0: "rgb(50, 250, 56)",
            0.5: "rgb(250, 250, 56)",
            0.7: "rgb(250, 50, 56)",
            1: "rgb(250, 50, 56)",
          },
        },
        engine: this.$engine,
      });

      this.$heatmap3D = $heatmap3D;
    },
    async initLine() {
      const lineManager = await useLineManager({
        engine: this.$engine,
      });

      lineManager.addAggregationLine({
        name: "line",
        flyConfig: {
          vertexColors: false,
          lineWidth: 2.5,
        },
        basicConfig: {
          lineWidth: 2,
          vertexColors: true,
        },
        basicData: [...this.lineData],
        flyData: [...this.lineData],
      });

      this.$lineManager = lineManager;
    },
    async addPillar() {
      const { center } = this.config;

      const pillar = this.$engine.add(
        new Pillar({
          height: 300,
          radius: 50,
          radialSegments: 32,
        })
      );

      let data = await GeoJSONDataSource.fromGeoJSON([
        {
          properties: {},
          geometry: {
            type: "Point",
            coordinates: center,
          },
        },
      ]);

      pillar.dataSource = data;

      this.$engine.event.bind("click", (e) => {
        data.add(new DataItem(e.point));
      });
    },
    initSky() {
      const sky = this.$engine.add(new EmptySky());
      sky.time = 3600 * 14;

      this.$sky = sky;
    },
    async initScene(config) {
      this.initBMapGL(config);
      this.initMapEngine(config);

      this.initSky();

      await this.initHeadMap();

      await this.initUAVManager();

      this.initLine();

      this.initPointsManager();
    },
    initBMapGL(config) {
      const { center, zoom } = config;

      const map = new BMapGL.Map("container");
      map.centerAndZoom(new BMapGL.Point(center[0], center[1]), zoom);
      map.enableScrollWheelZoom();
      // map.setMapStyleV2({ styleId: "c95c1f9ab40e5ba30b3b0be8fc3464d8" });

      this.$map = map;
    },
    async initMapEngine(config) {
      const { center, pitch } = config;

      const engine = new Engine(this.$map, {
        rendering: {
          enableAnimationLoop: true,
        },
      });
      engine.map.setCenter(center);
      engine.map.setPitch(pitch);

      this.$engine = engine;
    },
    modelMixerAnimation() {
      var clock = new THREE.Clock();

      this.$engine.rendering.addBeforeRenderListener(() => {
        this.$uavManager?.update(clock.getDelta() * 30);

        if (this.mixerArr) {
          for (let i = 0; i < this.mixerArr.length; i++) {
            this.mixerArr[i].update(clock.getDelta() * 30);
          }
        }
      });
    },
  },
  beforeDestroy() {
    this.$uavManager.dispose();
    this.$heatmap3D.dispose();
    this.$lineManager.dispose();
    this.$pointsManager.dispose();
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 700px;
}
</style>
