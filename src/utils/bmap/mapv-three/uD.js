export class uD {
  constructor(e) {
    this._canvas = e = "string" == typeof e ? document.getElementById(e) : e;
    this._ctx = e.getContext("2d");
    this._width = e.width;
    this._height = e.height;
    this._max = 1;
    this._data = [];

    this.defaultGradient = {
      0.4: "blue",
      0.6: "cyan",
      0.7: "lime",
      0.8: "yellow",
      1: "red",
    };

    this.defaultRadius = 25;
  }

  data(e) {
    return (this._data = e), this;
  }
  max(e) {
    return (this._max = e), this;
  }
  add(e) {
    return this._data.push(e), this;
  }
  clear() {
    return (this._data = []), this;
  }
  radius(e, t) {
    t = void 0 === t ? 15 : t;

    var i = (this._circle = this._createCanvas());
    const n = i.getContext("2d");
    const s = (this._r = e + t);

    return (
      (i.width = i.height = 2 * s),
      (n.shadowOffsetX = n.shadowOffsetY = 2 * s),
      (n.shadowBlur = t),
      (n.shadowColor = "black"),
      n.beginPath(),
      n.arc(-s, -s, e, 0, 2 * Math.PI, !0),
      n.closePath(),
      n.fill(),
      this
    );
  }
  resize() {
    (this._width = this._canvas.width), (this._height = this._canvas.height);
  }
  gradient(e) {
    var t = this._createCanvas(),
      i = t.getContext("2d"),
      n = i.createLinearGradient(0, 0, 0, 256);
    for (var s in ((t.width = 1), (t.height = 256), e))
      n.addColorStop(+s, e[s]);
    return (
      (i.fillStyle = n),
      i.fillRect(0, 0, 1, 256),
      (this._grad = i.getImageData(0, 0, 1, 256).data),
      this
    );
  }
  draw(e) {
    this._circle || this.radius(this.defaultRadius);
    this._grad || this.gradient(this.defaultGradient);

    var t = this._ctx;
    t.clearRect(0, 0, this._width, this._height);

    for (var i, n = 0, s = this._data.length; n < s; n++) {
      i = this._data[n];
      t.globalAlpha = Math.max(i[2] / this._max, void 0 === e ? 0.05 : e);
      t.drawImage(this._circle, i[0] - this._r, i[1] - this._r);
    }

    var r = t.getImageData(0, 0, this._width, this._height);
    this._colorize(r.data, this._grad), t.putImageData(r, 0, 0);
    return this;
  }
  _colorize(e, t) {
    for (var i, n = 0, s = e.length; n < s; n += 4)
      (i = 4 * e[n + 3]) &&
        ((e[n] = t[i]), (e[n + 1] = t[i + 1]), (e[n + 2] = t[i + 2]));
  }
  _createCanvas() {
    return "undefined" != typeof document
      ? document.createElement("canvas")
      : new this._canvas.constructor();
  }
}

export function createCanvas(e, t) {
  let i = document.createElement("canvas");
  return e && (i.width = e), t && (i.height = t), i;
}
