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
import { useUAVManager, useLineManager, useTubeManager } from "@/utils/bmap";

import * as THREE from "bmap-three";

import { randomHexColorStr } from "@/utils/color";
import { randomRange } from "@/utils/math";

export default {
  name: "MapScene",
  mixins: [],
  props: {
    msg: String,
  },
  data() {
    return {
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
    initBMapGL(config) {
      const { center, zoom } = config;

      const map = new BMapGL.Map("container");
      map.centerAndZoom(new BMapGL.Point(center[0], center[1]), zoom);
      map.enableScrollWheelZoom();

      this.$map = map;
    },

    initMapEngine(config) {
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

    async initUAVManager() {
      this.$uavManager = await useUAVManager({
        // onProgress: (v) => {
        //   console.log(v);
        // },
        engine: this.$engine,
      });
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

    async addTube() {
      const tubeManager = await useTubeManager({
        engine: this.$engine,
        data: [
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
        ],
      });

      this.$engine.event.bind("click", (e) => {
        tubeManager.addTube({
          position: [...e.point, randomRange(10, 40)],
          color: randomHexColorStr(),
        });
      });
    },

    async initScene(config) {
      this.initBMapGL(config);
      this.initMapEngine(config);

      this.initSky();

      await this.initUAVManager();

      window.$uavManager = this.$uavManager;

      this.addTube();

      window.$uavManager.addUAV({
        name: "aaa",
        position: [116.38999802501954, 39.90992061915485, 50],
        onClick: (e) => {
          this.$engine.map.setCenter(e.point);
        },
      });
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 700px;
}
</style>
