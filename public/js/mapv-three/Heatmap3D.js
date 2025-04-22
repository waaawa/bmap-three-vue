import { publicField } from "./utils/index.js";
import { HeatmapCanvas, createCanvas } from "./HeatmapCanvas.js";

export function makeHeatmap3DClass(
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
      super(e), (this.type = "HeatmapMaterial");
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
          #include <logdepthbuf_fragment>
        }
      `;
      this.vertexShader = `
        #define GLSLIFY 1
        #include <common>
        
        uniform float heightRatio;
        uniform sampler2D map;
        
        varying vec2 vUv;
        #include <logdepthbuf_pars_vertex>
        void main() { 
          vUv = vec2(uv.x, 1. - uv.y);
          #include <begin_vertex>
          transformed.z = texture2D(map, vUv).a * heightRatio;
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
      N_(this, ["heightRatio", "resolution", "opacity", "map", "isEmissive"]);
      this.setValues(e);
    }
  }

  return class extends Mesh {
    constructor(e) {
      super(e);
      publicField(this, "_gradient");
      publicField(this, "_radius");
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

      this._radius = this.parameters.radius || 100;
      this._maxValue = this.parameters.maxValue || 1;
      this.defineMaterialProxyProperties([
        "resolution",
        "opacity",
        "heightRatio",
      ]);
    }
    initObject() {
      const { radius: e, maxValue: t, ...i } = this.parameters;
      this.geometry = new PlaneGeometry(1, 1, 1, 1);
      this.material = new HeatmapMaterial(i);
      this.material.setCommonUniforms(this.engine.rendering.uniforms);
    }
    setData() {
      let e = this.dataSource.data,
        min_x = 1 / 0,
        min_y = 1 / 0,
        min_z = 1 / 0,
        max_x = -1 / 0,
        max_y = -1 / 0,
        max_z = -1 / 0,
        gap = this._radius * 4,
        nodeData = [];

      if (!e.position.length) return;

      // 遍历所有位置点
      for (let v = 0; v < e.position.length; v++) {
        // 获取当前点的位置坐标
        const poi = e.position[v];
        // 获取当前点的权重值，如果没有设置则默认为1
        const count = e.count ? e.count[v] : 1;

        // 计算包围盒的最小坐标
        min_x = Math.min(poi[0], min_x); // x最小值
        min_y = Math.min(poi[1], min_y); // y最小值
        min_z = Math.min(poi[2], min_z); // z最小值
        // 计算包围盒的最大坐标
        max_x = Math.max(poi[0], max_x); // x最大值
        max_y = Math.max(poi[1], max_y); // y最大值
        max_z = Math.max(poi[2], max_z); // z最大值

        // 将位置和权重信息保存到数组，用于后续热力图渲染
        // [x, y, weight]
        nodeData.push([poi[0], poi[1], count]);
      }

      // 计算包围盒的中心点坐标
      let center = [
        (min_x + max_x) / 2,
        (min_y + max_y) / 2,
        (min_z + max_z) / 2,
      ];

      // 设置热力图网格的中心位置
      this.position.set(...center);

      // 计算热力图的宽度和高度（包含边缘缓冲区）
      let width = Math.ceil(max_x - min_x) + gap * 2; // 宽度
      let height = Math.ceil(max_y - min_y) + gap * 2; // 高度

      // 计算热力图纹理的分辨率
      // 保证最小分辨率256，最大不超过2048
      // 根据面积和半径动态计算合适的分辨率
      let size = Math.max(256, Math.min((width * height) / 4000, 2048));

      const rat = height / width;
      const scale = size / width;

      let canvasH = size * rat;
      // 计算网格细分数，至少为1
      let wSeg = parseInt(size / 2);
      let hSeg = parseInt(canvasH / 2);

      console.log(
        [width, height, width / height],
        [size, canvasH, size / canvasH]
      );

      // 创建用于渲染热力图的画布
      let canvas = new createCanvas(size, canvasH);

      // 将所有点的坐标转换到相对于左上角的位置
      nodeData.forEach((e) => {
        e[0] = (e[0] - min_x + gap) * scale; // x坐标转换
        e[1] = (e[1] - min_y + gap) * scale; // y坐标转换
      });

      let heatmapCanvas = new HeatmapCanvas(canvas, { scale });
      let heatmapCanvasCtx = heatmapCanvas._ctx;

      heatmapCanvasCtx.save();
      // heatmapCanvasCtx.scale(size / width, canvasH / height);

      heatmapCanvas
        .data(nodeData)
        .radius(this._radius)
        .max(this._maxValue)
        .gradient(this._gradient)
        .draw();

      heatmapCanvasCtx.restore();

      this.geometry && this.geometry.dispose();

      this.geometry = new PlaneGeometry(width, height, wSeg, hSeg);
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
