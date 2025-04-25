import { publicField } from "../utils/index.js";
import { Vector3 } from "../Vector.js";
import { HeatmapCanvas, createCanvas } from "./HeatmapCanvas.js";

export function makeHeatmapBlockClass(
  Mesh,
  PlaneGeometry,
  CommonMaterial,
  In,
  Xn,
  N_,
  Texture
) {
  const lD = In.merge([
    Xn.fog,
    {
      heightRatio: { value: 100 },
      opacity: { value: 1 },
      map: { value: null },
      isEmissive: { value: !1 },
    },
  ]);

  class HeatmapMaterial extends CommonMaterial {
    constructor(e) {
      super(e);
      this.type = "HeatmapMaterial";
      this.isHeatmapMaterial = !0;
      this.fog = !0;
      this.lights = !1;
      this.transparent = !0;
      this.depthWrite = !0;
      this.depthTest = !0;
      this.fragmentShader = `
        #define GLSLIFY 1
        #include <common>
        uniform sampler2D map;
        uniform float opacity;
        uniform vec2 resolution;
        varying vec2 vUv;
        #include <logdepthbuf_pars_fragment>
        
        void main() {
          gl_FragColor = texture2D(map, vUv);
          gl_FragColor.a *= opacity;
          if ( gl_FragColor.a < 0.85 ) discard;
          #include <logdepthbuf_fragment>
        }
      `;
      this.vertexShader = `
        #define GLSLIFY 1
        #include <common>
        
        /* uniform float heightRatio; */
        uniform sampler2D map;
        
        varying vec2 vUv;
        #include <logdepthbuf_pars_vertex>
        void main() { 
          vUv = vec2(uv.x, 1. - uv.y);
          #include <begin_vertex>
          /* transformed.z = texture2D(map, vUv).a * heightRatio; */
          /* #include <project_vertex> */
          
          vec4 mvPosition = vec4( transformed, 1.0 );
          #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
          #endif
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;

          /* #include <logdepthbuf_vertex> */

          #ifdef USE_LOGDEPTHBUF
            #ifdef USE_LOGDEPTHBUF_EXT
              vFragDepth = 1.0 + gl_Position.w;
              vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
            #else
              if ( isPerspectiveMatrix( projectionMatrix ) ) {
                gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
                gl_Position.z *= gl_Position.w;
              }
            #endif
          #endif
        }
      `;
      Object.assign(this.uniforms, In.clone(lD));
      N_(this, ["resolution", "opacity", "map", "isEmissive"]);
      this.setValues(e);
    }
  }

  return class extends Mesh {
    constructor(e) {
      super(e);
      publicField(this, "_gradient");
      publicField(this, "_size");
      publicField(this, "_resolution");
      publicField(this, "_effectSize");
      publicField(this, "_maxValue");
      publicField(this, "isHeatmap3D", !0);
      publicField(this, "frustumCulled", !1);
      publicField(this, "geometry");
      publicField(this, "material");
      publicField(this, "opacity");
      publicField(this, "heightRatio");

      this.parameters = e;
      this._gradient = this.parameters.gradient || {
        0.4: "rgba(0,0,255,1)",
        0.6: "rgba(0,255,0,1)",
        0.8: "rgba(255,255,0,1)",
        1: "rgba(255,0,0,1)",
      };

      this._size = this.parameters.size || 10;
      this._resolution = this.parameters.resolution || 0;
      this._maxValue = this.parameters.maxValue || 1;
      this._radiationSize = this.parameters.radiationSize || 0;
      this._completePath = true;
      this.defineMaterialProxyProperties([
        "resolution",
        "opacity",
        "heightRatio",
      ]);
    }
    initObject() {
      const {
        radius: e,
        maxValue: t,
        resolution,
        radiationSize,
        ...params
      } = this.parameters;
      this.geometry = new PlaneGeometry(1, 1, 1, 1);
      this.material = new HeatmapMaterial(params);
      this.material.setCommonUniforms(this.engine.rendering.uniforms);
    }

    lerpData(data) {
      const { position, count } = data;

      const vec1 = new Vector3();
      const vec2 = new Vector3();
      const vec3 = new Vector3();

      const p = [];
      const c = [];
      const i = [];

      // 处理数据，路径Vector2 两路径间隔超出 this._size 自动插值
      for (let i = 1; i < position.length; i++) {
        const [x1, y1, z1] = position[i - 1];
        const [x2, y2, z2] = position[i];

        p.push([x1, y1, z1]);
        c.push(count[i - 1] || 0);

        vec1.set(x1, y1, z1);
        vec2.set(x2, y2, z2);

        const value1 = count[i - 1] || 0;
        const value2 = count[i] || 0;

        const distance = vec1.distanceTo(vec2);
        const segNum = Math.floor(distance / this._size);

        if (segNum > 0) {
          for (let j = 1; j <= segNum; j++) {
            vec3.copy(vec1).lerp(vec2, j / segNum);

            p.push([vec3.x, vec3.y, vec3.z]);
            c.push(value1 + (value2 - value1) * (j / segNum));
          }
        }
      }

      return { position: p, count: c, index: i };
    }

    setData() {
      let data = this.dataSource.data;

      let heatmapCanvas = new HeatmapCanvas({
        size: this._size,
        gradient: this._gradient,
        max: this._maxValue,
        resolution: this._resolution,
        radiationSize: this._radiationSize,
      });

      const canvas = new createCanvas(1, 1);

      const lerpData = this.lerpData(data);
      console.log(data, lerpData);

      heatmapCanvas
        .setData(lerpData)
        .calcParamsByData()
        .setCanvas(canvas)
        .draw();

      this.position.set(
        heatmapCanvas.centerX,
        heatmapCanvas.centerY,
        heatmapCanvas.centerZ
      );

      this.geometry && this.geometry.dispose();

      this.geometry = new PlaneGeometry(
        heatmapCanvas.fullWidth,
        heatmapCanvas.fullHeight
      );

      this.geometry.computeBoundingSphere();
      this.geometry.computeBoundingBox();

      this.texture && this.texture.dispose();
      this.texture = new Texture(canvas);

      this.material.uniforms.map.value = this.texture;
      this.needsUpdate = false;
    }
    onDispose() {
      this.texture && this.texture.dispose();
    }
    get gradient() {
      return this._gradient;
    }
    set gradient(e) {
      this._gradient = e;
    }
    get radius() {
      return this._radius;
    }
    set radius(e) {
      this._radius = e;
    }
    get maxValue() {
      return this._maxValue;
    }
    set maxValue(e) {
      this._maxValue = e;
    }
  };
}
