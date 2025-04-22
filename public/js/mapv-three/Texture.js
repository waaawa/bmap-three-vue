import { EventDispatcher } from "./EventDispatcher.js";
import { Pe } from "./utils/other.js";
import { Source } from "./Source.js";
import { Vector2 } from "./Vector.js";
import { Matrix3 } from "./Matrix.js";

import { w, T, I, de, pe, fe, me } from "./utils/other.js";

let ot = 0;

export class Texture extends EventDispatcher {
  DEFAULT_IMAGE = null;
  DEFAULT_MAPPING = 300;
  DEFAULT_ANISOTROPY = 1;

  constructor(
    e = Texture.DEFAULT_IMAGE,
    t = Texture.DEFAULT_MAPPING,
    i = 1001,
    n = 1001,
    s = 1006,
    r = 1008,
    a = 1023,
    o = 1009,
    l = Texture.DEFAULT_ANISOTROPY,
    h = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: ot++ }),
      (this.uuid = Pe()),
      (this.name = ""),
      (this.source = new Source(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = n),
      (this.magFilter = s),
      (this.minFilter = r),
      (this.anisotropy = l),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new Vector2(0, 0)),
      (this.repeat = new Vector2(1, 1)),
      (this.center = new Vector2(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Matrix3()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      "string" == typeof h
        ? (this.colorSpace = h)
        : (Xe(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = h === pe ? me : fe)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (300 !== this.mapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case w:
          e.x = e.x - Math.floor(e.x);
          break;
        case T:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case I:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case w:
          e.y = e.y - Math.floor(e.y);
          break;
        case T:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case I:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      Xe("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === me ? pe : de
    );
  }
  set encoding(e) {
    Xe("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === pe ? me : fe);
  }
}
