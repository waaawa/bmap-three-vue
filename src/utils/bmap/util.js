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

export function merge(opts) {
  const obj = {};
  for (let i = 0; i < opts.length; i++) {
    const opt = clone(opts[i]);
    for (const key in opt) obj[key] = opt[key];
  }
  return obj;
}

export function createElement(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}

export function createCanvasEl() {
  const e = createElement("canvas");
  return (e.style.display = "block"), e;
}

export const defineUniformProxy = (obj, props = []) => {
  for (let prop of props) {
    Object.defineProperty(obj, prop, {
      get: function () {
        return this.uniforms[prop].value;
      },
      set: function (val) {
        this.uniforms[prop].value = val;
      },
    });
  }
};

export const defineUniformsVec4Proxy = (obj, props = []) => {
  for (let prop of props) {
    Object.defineProperty(obj, prop, {
      get: function () {
        return this.uniforms[prop].value;
      },
      set: function (val) {
        this.uniforms[prop].value = colorToVec4(val);
      },
    });
  }
};

export const defineUniformsCustomProxy = (obj, opts = []) => {
  for (let [prop1, prop2, handle] of opts) {
    Object.defineProperty(obj, prop1, {
      get: function () {
        return this.uniforms[prop2].value;
      },
      set: function (e) {
        this.uniforms[prop2].value = handle ? handle(e) : e;
      },
    });
  }
};

export const defineAutoUpdatePropHook = (e, props = []) => {
  for (let [prop, p] of props) {
    Object.defineProperty(e, prop, {
      get: function () {
        return !!this.defines[p];
      },
      set: function (e) {
        if (this[prop] !== e) {
          if (e) {
            this.defines[p] = !0;
          } else {
            delete this.defines[p];
            this.needsUpdate = !0;
          }
        }
      },
    });
  }
};
