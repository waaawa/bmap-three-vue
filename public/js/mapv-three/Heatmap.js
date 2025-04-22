import { __publicField } from "./utils/index.js";

export function makeHeatmapClass(_A, Wi, Wa, wa, ut, aD, oD, sD, iD, rn, _R) {
  return class extends _A {
    constructor(e) {
      super(e);
      __publicField(this, "isHeatmap", !0);
      __publicField(this, "frustumCulled", !1);
      __publicField(this, "geometry");
      __publicField(this, "material");
      __publicField(this, "scene");
      __publicField(this, "pointMesh");
      __publicField(this, "pointMaterial");
      __publicField(this, "pointGeometry");
      __publicField(this, "renderTarget");
      __publicField(this, "depthMaterial");
      __publicField(this, "depthRenderTarget");

      this.parameters = e;
      this.defineMaterialProxyProperties(["resolution"]);
    }
    getDefaultParams() {
      return {
        radius: 100,
        maxValue: 1,
        gradient: {
          0: "rgba(0,0,255,1)",
          0.3: "rgba(0,255,0,1)",
          0.6: "rgba(255,255,0,1)",
          1: "rgba(255,0,0,1)",
        },
      };
    }
    initObject() {
      let e = this.parameters;
      const t = (this.geometry = new rn());
      t.setAttribute(
        "position",
        new Wi(new Float32Array([-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0]), 3)
      );
      t.setAttribute(
        "uv",
        new Wi(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), 2)
      );
      t.setIndex([0, 2, 1, 2, 3, 1]);

      this.material = new iD({});
      this.material.setCommonUniforms(this.engine.rendering.uniforms);

      const [i, n] = this.resolution || [];
      const s = (this.scene = new wa());
      this.renderTarget = new ut(i, n);
      this.depthRenderTarget = new ut(i, n, {});
      this.depthMaterial = new aD({ keepSize: this.parameters.keepSize });

      const r = (this.pointGeometry = new oD());
      const a = (this.pointMaterial = new sD({
        keepSize: this.parameters.keepSize,
      }));

      a.setCommonUniforms(this.engine.rendering.uniforms);
      this.depthMaterial.setCommonUniforms(this.engine.rendering.uniforms);

      const o = (this.pointMesh = new _R(r, a));
      o.engine = this.engine;
      this.pointMesh.matrixAutoUpdate = !0;
      o.frustumCulled = !1;
      s.add(o);

      this.material.uniforms.heatmap.value = this.renderTarget.texture;
      this.material.uniforms.heatmapDepth.value =
        this.depthRenderTarget.texture;

      void 0 !== e.gradient && (this.gradient = e.gradient);
      void 0 !== e.radius && (this.radius = e.radius);
      void 0 !== e.minValue && (this.minValue = e.minValue);
      void 0 !== e.maxValue && (this.maxValue = e.maxValue);
      void 0 !== e.opacity && (this.opacity = e.opacity);
      void 0 !== e.keepSize && (this.keepSize = e.keepSize);
      void 0 !== e.attenuateMValueFactor &&
        (this.attenuateMValueFactor = e.attenuateMValueFactor);
    }

    onBeforeSceneRenderHook(e, t, i, n) {
      let s = e.renderer;
      this.scene.position.set(-n.cameraOffsetX, -n.cameraOffsetY, 0);
      s.setRenderTarget(this.renderTarget);
      !1 === s.autoClear && s.clear();
      s.render(this.scene, i);
      s.setRenderTarget(this.depthRenderTarget);
      !1 === s.autoClear && s.clear();
      this.scene.overrideMaterial = this.depthMaterial;
      s.render(this.scene, i);
      this.scene.overrideMaterial = null;
      s.setRenderTarget(null);
    }
    set dataSource(e) {
      this.pointMesh.dataSource = e;
    }
    get dataSource() {
      return this.pointMesh.dataSource;
    }
    setData() {
      if (!this.pointMesh.dataSource) return;

      this.pointMesh.addCustomAttributes = (e, t) => {
        let i = t.data,
          n = [];
        for (let s = 0; s < i.position.length; s++) {
          const e = i.count[s] ? i.count[s] : 1;
          n.push(e);
        }
        e.setAttribute("instancedWeight", new Wa(new Float32Array(n), 1));
      };

      this.pointMesh.setData();
    }
    dispose() {
      this.material.dispose();
      this.geometry.dispose();
      this.pointGeometry.dispose();
      this.pointMaterial.dispose();
      this.renderTarget.dispose();
      this.depthMaterial.dispose();
      this.depthRenderTarget.dispose();
    }
    set gradient(e) {
      "[object Object]" === Object.prototype.toString.call(e) &&
        (this.material.gradient = e);
    }
    set radius(e) {
      !isNaN(e) &&
        e > 0 &&
        ((this.pointMaterial.radius = e), (this.depthMaterial.radius = e));
    }
    get radius() {
      return this.pointMaterial.radius;
    }
    set minValue(e) {
      isNaN(e) || (this.pointMaterial.minValue = e);
    }
    get minValue() {
      return this.pointMaterial.minValue;
    }
    set maxValue(e) {
      isNaN(e) || (this.pointMaterial.maxValue = e);
    }
    get maxValue() {
      return this.pointMaterial.maxValue;
    }
    set opacity(e) {
      isNaN(e) || (this.material.opacity = e);
    }
    get opacity() {
      return this.material.opacity;
    }
    set keepSize(e) {
      (this.pointMaterial.keepSize = e), (this.depthMaterial.keepSize = e);
    }
    get keepSize() {
      return this.pointMaterial.keepSize;
    }
    set attenuateMValueFactor(e) {
      this.pointMaterial.attenuateMValueFactor = e;
    }
  };
}
