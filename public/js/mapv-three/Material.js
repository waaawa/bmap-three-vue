import { Pe } from "./utils/other.js";
import { EventDispatcher } from "./EventDispatcher.js";
import { h, u, _e, Ae } from "./utils/other.js";

let Ri = 0;

export class Material extends EventDispatcher {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Ri++ }),
      (this.uuid = Pe()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = h),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = u),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Ae),
      (this.stencilZFail = Ae),
      (this.stencilZPass = Ae),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (const t in e) {
        const i = e[t];
        if (void 0 === i) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const n = this[t];
        void 0 !== n
          ? n && n.isColor
            ? n.set(i)
            : n && n.isVector3 && i && i.isVector3
            ? n.copy(i)
            : (this[t] = i)
          : console.warn(
              `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
            );
      }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function n(e) {
      const t = [];
      for (const i in e) {
        const n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      void 0 !== this.roughness && (i.roughness = this.roughness),
      void 0 !== this.metalness && (i.metalness = this.metalness),
      void 0 !== this.sheen && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (i.shininess = this.shininess),
      void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.iridescence && (i.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (i.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      void 0 !== this.anisotropy && (i.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (i.combine = this.combine)),
      void 0 !== this.envMapIntensity &&
        (i.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (i.size = this.size),
      null !== this.shadowSide && (i.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (i.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (i.blending = this.blending),
      this.side !== h && (i.side = this.side),
      this.vertexColors && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      !0 === this.transparent && (i.transparent = this.transparent),
      (i.depthFunc = this.depthFunc),
      (i.depthTest = this.depthTest),
      (i.depthWrite = this.depthWrite),
      (i.colorWrite = this.colorWrite),
      (i.stencilWrite = this.stencilWrite),
      (i.stencilWriteMask = this.stencilWriteMask),
      (i.stencilFunc = this.stencilFunc),
      (i.stencilRef = this.stencilRef),
      (i.stencilFuncMask = this.stencilFuncMask),
      (i.stencilFail = this.stencilFail),
      (i.stencilZFail = this.stencilZFail),
      (i.stencilZPass = this.stencilZPass),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (i.rotation = this.rotation),
      !0 === this.polygonOffset && (i.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (i.linewidth = this.linewidth),
      void 0 !== this.dashSize && (i.dashSize = this.dashSize),
      void 0 !== this.gapSize && (i.gapSize = this.gapSize),
      void 0 !== this.scale && (i.scale = this.scale),
      !0 === this.dithering && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (i.alphaHash = this.alphaHash),
      !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage),
      !0 === this.premultipliedAlpha &&
        (i.premultipliedAlpha = this.premultipliedAlpha),
      !0 === this.forceSinglePass && (i.forceSinglePass = this.forceSinglePass),
      !0 === this.wireframe && (i.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (i.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (i.flatShading = this.flatShading),
      !1 === this.visible && (i.visible = !1),
      !1 === this.toneMapped && (i.toneMapped = !1),
      !1 === this.fog && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t)
    ) {
      const t = n(e.textures),
        s = n(e.images);
      t.length > 0 && (i.textures = t), s.length > 0 && (i.images = s);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let i = null;
    if (null !== t) {
      const e = t.length;
      i = new Array(e);
      for (let n = 0; n !== e; ++n) i[n] = t[n].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
}
