export class EventDispatcher {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    const i = this._listeners;
    void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    const i = this._listeners;
    return void 0 !== i[e] && -1 !== i[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    const i = this._listeners[e];
    if (void 0 !== i) {
      const e = i.indexOf(t);
      -1 !== e && i.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    const t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      const i = t.slice(0);
      for (let t = 0, n = i.length; t < n; t++) i[t].call(this, e);
      e.target = null;
    }
  }
}
