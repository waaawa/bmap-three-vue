export function __defNormalProp(e, t, i) {
  return t in e
    ? Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i,
      })
    : (e[t] = i);
}

export function __publicField(e, t, i) {
  return __defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i;
}
