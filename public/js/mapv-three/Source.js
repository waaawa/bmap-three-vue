import { Pe } from "./utils/other.js";

let st = 0;
export class Source {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: st++ }),
      (this.uuid = Pe()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      n = this.data;
    if (null !== n) {
      let e;
      if (Array.isArray(n)) {
        e = [];
        for (let t = 0, i = n.length; t < i; t++)
          n[t].isDataTexture ? e.push(at(n[t].image)) : e.push(at(n[t]));
      } else e = at(n);
      i.url = e;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}

function at(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? nt.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
