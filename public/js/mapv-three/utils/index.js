export function defNormalProp(e, t, i) {
  return t in e
    ? Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i,
      })
    : (e[t] = i);
}

export function publicField(e, t, i) {
  return defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i;
}

export function clone(e) {
  const t = {};
  for (const i in e) {
    t[i] = {};
    for (const n in e[i]) {
      const s = e[i][n];
      s &&
      (s.isColor ||
        s.isMatrix3 ||
        s.isMatrix4 ||
        s.isVector2 ||
        s.isVector3 ||
        s.isVector4 ||
        s.isTexture ||
        s.isQuaternion)
        ? s.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (t[i][n] = null))
          : (t[i][n] = s.clone())
        : Array.isArray(s)
        ? (t[i][n] = s.slice())
        : (t[i][n] = s);
    }
  }
  return t;
}

export function merge(e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = clone(e[i]);
    for (const e in n) t[e] = n[e];
  }
  return t;
}

export function createElement(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}

export function createCanvasEl() {
  const e = createElement("canvas");
  return (e.style.display = "block"), e;
}
