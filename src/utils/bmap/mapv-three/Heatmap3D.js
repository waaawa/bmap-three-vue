const { __publicField } = require("./utils");
import { uD, createCanvas } from "./uD";

export function makeHeatmap3DClass(_A, Wn, hD, Eo) {
  return class extends _A {
    constructor(e) {
      super(e);
      __publicField(this, "_gradient");
      __publicField(this, "_radius");
      __publicField(this, "_maxValue");
      __publicField(this, "isHeatmap3D", !0);
      __publicField(this, "frustumCulled", !1);
      __publicField(this, "geometry");
      __publicField(this, "material");
      __publicField(this, "opacity");
      __publicField(this, "heightRatio");

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
      this.geometry = new Wn(1, 1, 1, 1);
      this.material = new hD(i);
      this.material.setCommonUniforms(this.engine.rendering.uniforms);
    }
    setData() {
      try {
        let e = this.dataSource.data,
          t = 1 / 0,
          i = 1 / 0,
          n = 1 / 0,
          s = -1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = [];

        for (let v = 0; v < e.position.length; v++) {
          const l = e.position[v];
          const h = e.count ? e.count[v] : 1;

          t = Math.min(l[0], t);
          i = Math.min(l[1], i);
          n = Math.min(l[2], n);
          s = Math.max(l[0], s);
          r = Math.max(l[1], r);
          a = Math.max(l[2], a);

          o.push([l[0], l[1], h]);
        }

        let l = [(t + s) / 2, (i + r) / 2, (n + a) / 2];
        this.position.set(...l);

        let h = Math.ceil(s - t) + 2 * this._radius || 2000;
        let c = Math.ceil(r - i) + 2 * this._radius || 2000;

        let u = Math.min((h * c) / 4e4, 2048) + this._radius * 4;

        let d = u / 2 < 1 ? 1 : u / 2;
        let p = new createCanvas(u, u);

        o.forEach((e) => {
          (e[0] = e[0] - t + this._radius), (e[1] = e[1] - i + this._radius);
        });

        let f = new uD(p);
        let m = f._ctx;

        m.save();
        m.scale(u / h, u / c);

        f.data(o)
          .radius(this._radius)
          .max(this._maxValue)
          .gradient(this._gradient)
          .draw();

        m.restore();

        this.geometry && this.geometry.dispose();

        const g = (this.geometry = new Wn(h, c, d, d));
        g.computeBoundingSphere();
        g.computeBoundingBox();

        this.texture && this.texture.dispose();
        let _ = (this.texture = new Eo(p));
        this.material.uniforms.map.value = _;
        this.needsUpdate = !1;
      } catch (error) {
        console.log(error);
      }
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
