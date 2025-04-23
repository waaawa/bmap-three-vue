import { clone, merge, publicField } from "./utils/index.js";

export function makeSimplePoint(
  CommonShaderMaterial,
  U_,
  N_,
  k_,
  B_,
  O_,
  G_,
  yl,
  Xn,
  L_,
  D_,
  rn,
  Ki,
  w_,
  Points
) {
  class AR extends rn {
    constructor(e) {
      super(e), (this.parameters = e);
    }
    setData(e) {
      const { vertexSizes: t, vertexColors: i } = this.parameters,
        {
          aPositions: n,
          aObjectIndices: s,
          aMapIndexs: r,
          aColors: a,
          aSizes: o,
        } = e;
      this.setAttribute("position", new Ki(n, 3)),
        this.setAttribute("objectIndex", new Ki(s, 1)),
        this.setAttribute("aMapIndex", new Ki(r, 1)),
        i && this.setAttribute("aColor", new Ki(a, 4)),
        t && this.setAttribute("aSize", new Ki(o, 1));
    }
  }

  const yR = new yl(),
    xR = merge([
      Xn.fog,
      L_,
      D_,
      {
        isEmissive: { value: !1 },
        color: { value: [0, 1, 1, 1] },
        size: { value: 30 },
        vertexColors: { value: !1 },
        vertexSizes: { value: !1 },
        uShapeType: { value: 2 },
        opacity: { value: 1 },
        map: { value: null },
        useMap: { value: !1 },
        uOffset: { value: [0, 0] },
      },
    ]);

  class SimplePointMaterial extends CommonShaderMaterial {
    constructor(e) {
      super();
      this.type = "SimplePointMaterial";
      this.vertexShader = `
      #define GLSLIFY 1
      #include <common>

      #ifdef MVT_USE_VERTEX_SIZE
          attribute float aSize;
          varying float vSize;
      #endif

      #ifdef MVT_USE_VERTEX_OFFSET
          attribute vec2 aOffset;
      #else
          uniform vec2 uOffset;
      #endif

      #ifdef MVT_USE_VERTEX_COLOR
          attribute vec4 aColor;
          varying vec4 vColor;
      #endif

      uniform float size;
      uniform float pixelRatio;
      uniform vec2 resolution;

      #include <mvt_selective_pars_vertex>
      #include <logdepthbuf_pars_vertex>
      #include <mvt_extra_vertex_utils>

      void main() {
          #include <mvt_selective_vertex>

          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          float pixelSize = getPixelSize(worldPosition.xyz);

          #ifdef MVT_USE_VERTEX_OFFSET
              vec2 offset = aOffset * 2. * pixelRatio * pixelSize;
          #else
              vec2 offset = uOffset * 2. * pixelRatio * pixelSize;
          #endif

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position.xy = gl_Position.xy - offset;

          #ifdef MVT_USE_VERTEX_SIZE
              vSize = aSize * pixelRatio;
              gl_PointSize = vSize;
          #else
              gl_PointSize = size * pixelRatio;
          #endif

          gl_PointSize /= pixelSize;

          #ifdef MVT_USE_VERTEX_COLOR
              vColor = aColor;
          #endif

          #include <logdepthbuf_vertex>
      }
    `;
      this.fragmentShader = `
      #define GLSLIFY 1
      #include <common>

      #ifdef MVT_USE_VERTEX_COLOR
          varying vec4 vColor;
      #endif
      uniform vec4 color;
      uniform float uShapeType;
      uniform float opacity;

      #ifdef MVT_USE_VERTEX_SIZE
          varying float vSize;
      #else
          uniform float size;
      #endif
      uniform bool useMap;
      uniform sampler2D map;

      #include <mvt_selective_pars_fragment>
      #include <logdepthbuf_pars_fragment>

      void main() {

          #ifdef MVT_USE_VERTEX_COLOR
              gl_FragColor = vColor;
          #else
              gl_FragColor = color;
          #endif

          if (uShapeType == 2.) {
              float d = distance(gl_PointCoord, vec2(0.5, 0.5));
              if (d > 0.5) {
                  discard; // 丢弃超出半径的片段
              }

              #ifdef MVT_USE_VERTEX_SIZE
                  float alpha = smoothstep(0.5 + 0.5 / vSize, 0.5 - 1.0 / vSize, d);
              #else
                  float alpha = smoothstep(0.5 + 0.5 / size, 0.5 - 1.0 / size, d);
              #endif
              
              if (alpha <= 0.) {
                  discard;
              } else {
                  gl_FragColor.a *= alpha;
              }
          }
      
          if (useMap) {
              vec4 tColor = texture2D(map, vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
          //    gl_FragColor.rgb = tColor.rgb * tColor.a + gl_FragColor.rgb * (1.0 - tColor.a);
          //    gl_FragColor.a += tColor.a;
              
              gl_FragColor = mix(gl_FragColor, tColor, tColor.a);
              // gl_FragColor.rgb = mix(gl_FragColor.rgb, tColor.rgb, tColor.a);
              // gl_FragColor.a += tColor.a;
              // gl_FragColor = tColor;
          }
          gl_FragColor.a *= opacity;
          if (gl_FragColor.a <= 0.) {
              discard;
          }
          #include <mvt_selective_fragment> 
          #include <logdepthbuf_fragment> 
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
      }
  `;
      this.isSimplePointMaterial = true;
      this.transparent = true;
      Object.assign(this.uniforms, clone(xR));
      U_(this);
      N_(this, ["size", "uShapeType", "opacity", "isEmissive"]);
      k_(this, [["offset", "uOffset"]]);
      B_(this, ["color"]);
      O_(this, [
        ["vertexColors", "MVT_USE_VERTEX_COLOR"],
        ["vertexSizes", "MVT_USE_VERTEX_SIZE"],
      ]);
      G_(this);
      Object.defineProperties(this, {
        mapSrc: {
          get: function () {
            return this.uniforms.map.value;
          },
          set: function (e) {
            const t = this.mapSrc,
              i = "url_map";
            if (this.userData[i] === e) return;
            if ((t && t.dispose(), !e))
              return (
                (this.uniforms.map.value = null),
                (this.uniforms.useMap.value = !1),
                void delete this.userData[i]
              );
            const n = yR.load(e);
            (n.wrapS = n.wrapT = T),
              (this.uniforms.map.value = n),
              (this.userData[i] = e),
              (this.uniforms.useMap.value = !0);
          },
        },
      }),
        (this.emissiveEnabled = !0),
        (this.emissive = [0, 0, 0]),
        this.setValues(e);
    }
    dispose() {
      this.uniforms.map.value && this.uniforms.map.value.dispose(),
        super.dispose();
    }
  }

  return class SimplePoint extends Points {
    constructor(e) {
      super(e),
        publicField(this, "geometry"),
        publicField(this, "material"),
        publicField(this, "color"),
        publicField(this, "vertexColors"),
        publicField(this, "size"),
        publicField(this, "vertexSizes"),
        publicField(this, "opacity"),
        publicField(this, "emissive"),
        (this.parameters = e),
        this.defineMaterialProxyProperties([
          "size",
          "uShapeType",
          "opacity",
          "emissive",
          "vertexColors",
          "vertexSizes",
          "color",
          "mapSrc",
        ]);
    }
    collisionTest(e) {
      return this.parameters.vertexSizes && e.size
        ? { width: e.size, height: e.size }
        : { width: this.size, height: this.size };
    }
    initObject() {
      (this.geometry = new AR(this.parameters)),
        (this.material = new SimplePointMaterial(this.parameters)),
        this.material.setCommonUniforms(this.engine.rendering.uniforms);
    }
    setData() {
      const e = this.dataSource.data,
        { vertexSizes: t, vertexColors: i } = this.parameters;
      let n = [];

      n =
        this._enableCollision && this._collisionData
          ? this._collisionData
          : this.dataSource.userData;
      const s = [],
        r = [],
        a = [],
        o = [];
      for (let l = 0; l < n.length; l++) {
        const h = n[l].position;
        const c = n[l].index;

        s.push(...h);
        r.push(c);

        if (i && e.color) {
          let e = w_(n[l].color);
          a.push(...e.toArray());
        }

        t && e.size && o.push(n[l].size);
      }
      this.geometry.setData({
        aPositions: s,
        aObjectIndices: r,
        aColors: a,
        aSizes: o,
      }),
        this.geometry.computeBoundingSphere(),
        this.makeGeometryOffsetPosition(this.geometry, s),
        (this.needsUpdate = !1);
    }
  };
}
