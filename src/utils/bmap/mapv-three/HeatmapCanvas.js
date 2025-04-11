export class HeatmapCanvas {
  constructor(canvasEl, config) {
    this._canvas = canvasEl =
      "string" == typeof canvasEl
        ? document.getElementById(canvasEl)
        : canvasEl;
    this._ctx = canvasEl.getContext("2d", { willReadFrequently: true });
    this._width = canvasEl.width;
    this._height = canvasEl.height;
    this._max = 1;
    this._data = [];
    this.gap = config.gap;

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
    // 设置模糊半径，默认值为15
    t = void 0 === t ? e * 1.2 : t;

    // 创建一个新的canvas元素并保存到this._circle
    var i = this._createCanvas();
    this._circle = i;
    // 获取canvas的2d上下文
    const n = i.getContext("2d", { willReadFrequently: true });
    // 计算总半径（原始半径 + 模糊半径）并保存到this._r
    const s = (this._r = e + t);

    // 设置canvas的宽高为总半径的2倍
    i.width = i.height = 2 * s;
    // 设置阴影偏移量为总半径的2倍
    n.shadowOffsetX = n.shadowOffsetY = 2 * s;
    // 设置阴影模糊度
    n.shadowBlur = t * 0.8;
    // 设置阴影颜色为黑色
    n.shadowColor = "black";
    // 开始绘制路径
    n.beginPath();
    // 绘制圆弧，圆心位于(-s, -s)，半径为e，从0到2π
    n.arc(-s, -s, e, 0, 2 * Math.PI, !0);
    // 关闭路径
    n.closePath();
    // 填充路径
    n.fill();

    this._circleImgData = n.getImageData(0, 0, i.width, i.height);

    // 返回this以支持链式调用
    return this;
  }
  resize() {
    this._width = this._canvas.width;
    this._height = this._canvas.height;
  }
  gradient(e) {
    let t = this._createCanvas();
    let i = t.getContext("2d");
    let n = i.createLinearGradient(0, 0, 0, 256);

    t.width = 1;
    t.height = 256;

    for (var s in e) {
      n.addColorStop(+s, e[s]);
    }

    i.fillStyle = n;
    i.fillRect(0, 0, 1, 256);
    this._grad = i.getImageData(0, 0, 1, 256).data;

    return this;
  }
  draw(e) {
    this._circle || this.radius(this.defaultRadius);
    this._grad || this.gradient(this.defaultGradient);

    var t = this._ctx;
    t.clearRect(0, 0, this._width, this._height);

    for (var i, n = 0, s = this._data.length; n < s; n++) {
      i = this._data[n];

      const x = i[0] - this._r;
      const y = i[1] - this._r;

      const a = Math.max(i[2] / this._max, void 0 === e ? 0.05 : e);

      // t.globalAlpha = a;
      // t.drawImage(this._circle, x, y);

      const imgData = t.getImageData(x, y, this._r * 2, this._r * 2);
      this.mixImgData(imgData, this._circleImgData, a);
      t.putImageData(imgData, x, y);
    }

    var r = t.getImageData(0, 0, this._width, this._height);

    this._colorize(r.data, this._grad);
    t.putImageData(r, 0, 0);

    return this;
  }

  mixImgData(a, b, opacity) {
    const aData = a.data;
    const bData = b.data;

    const len = aData.length;
    for (let i = 0; i < len; i += 4) {
      if (!aData[i + 3] && !bData[i + 3]) continue;

      // 计算混合权重
      const alpha = bData[i + 3] / 255;
      const mixAlpha = alpha * opacity;

      if (aData[i + 3]) {
        if (!bData[i + 3]) continue;

        // 使用平方根混合，让过渡更加柔和
        const currentAlpha = aData[i + 3] / 255;
        const newAlpha = Math.sqrt(
          currentAlpha * currentAlpha + mixAlpha * mixAlpha
        );

        // const maxAlpha = Math.max(currentAlpha, mixAlpha);

        aData[i + 3] = Math.min(newAlpha * 255, 255);

        // if (maxAlpha > 0.9) {
        //   aData[i + 3] = maxAlpha * 255;
        //   continue;
        // }

        // aData[i + 3] = Math.max(currentAlpha * 255, mixAlpha * 255);
      } else {
        aData[i + 3] = mixAlpha * 255;
      }
    }
  }

  _colorize(e, t) {
    for (var i, n = 0, s = e.length; n < s; n += 4) {
      i = 4 * e[n + 3];

      if (i) {
        // console.log(
        //   `%c颜色-rgba(${t[i]}, ${t[i + 1]}, ${t[i + 2]}, ${e[n + 3]})`,
        //   `color: rgba(${t[i]}, ${t[i + 1]}, ${t[i + 2]}, ${e[n + 3]})`
        // );

        e[n] = t[i];
        e[n + 1] = t[i + 1];
        e[n + 2] = t[i + 2];
      }
    }
  }
  _createCanvas() {
    if ("undefined" != typeof document) {
      return document.createElement("canvas");
    } else {
      return new this._canvas.constructor();
    }
  }
}

export function createCanvas(e, t) {
  let i = document.createElement("canvas");
  e && (i.width = e);
  t && (i.height = t);
  return i;
}
