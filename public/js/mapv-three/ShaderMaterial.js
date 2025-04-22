import { Material } from "./Material.js";
import { clone } from "./utils/index.js";

export class ShaderMaterial extends Material {
  constructor(e) {
    super(), (this.isShaderMaterial = !0);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader =
      "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader =
      "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.lights = !1;
    this.clipping = !1;
    this.forceSinglePass = !0;
    this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1,
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0],
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = !1;
    this.glslVersion = null;
    void 0 !== e && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = clone(e.uniforms)),
      (this.uniformsGroups = (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i++) t.push(e[i].clone());
        return t;
      })(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const n in this.uniforms) {
      const i = this.uniforms[n].value;
      i && i.isTexture
        ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
        : i && i.isColor
        ? (t.uniforms[n] = { type: "c", value: i.getHex() })
        : i && i.isVector2
        ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
        : i && i.isVector3
        ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
        : i && i.isVector4
        ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
        : i && i.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
        : i && i.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
        : (t.uniforms[n] = { value: i });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const i = {};
    for (const n in this.extensions) !0 === this.extensions[n] && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
