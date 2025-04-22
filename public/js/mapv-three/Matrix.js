export class Matrix3 {
  constructor(e, t, i, n, s, r, a, o, l) {
    (Matrix3.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, i, n, s, r, a, o, l);
  }
  set(e, t, i, n, s, r, a, o, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = n),
      (h[2] = a),
      (h[3] = t),
      (h[4] = s),
      (h[5] = o),
      (h[6] = i),
      (h[7] = r),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      n = t.elements,
      s = this.elements,
      r = i[0],
      a = i[3],
      o = i[6],
      l = i[1],
      h = i[4],
      c = i[7],
      u = i[2],
      d = i[5],
      p = i[8],
      f = n[0],
      m = n[3],
      g = n[6],
      _ = n[1],
      v = n[4],
      A = n[7],
      y = n[2],
      x = n[5],
      b = n[8];
    return (
      (s[0] = r * f + a * _ + o * y),
      (s[3] = r * m + a * v + o * x),
      (s[6] = r * g + a * A + o * b),
      (s[1] = l * f + h * _ + c * y),
      (s[4] = l * m + h * v + c * x),
      (s[7] = l * g + h * A + c * b),
      (s[2] = u * f + d * _ + p * y),
      (s[5] = u * m + d * v + p * x),
      (s[8] = u * g + d * A + p * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      r = e[4],
      a = e[5],
      o = e[6],
      l = e[7],
      h = e[8];
    return (
      t * r * h - t * a * l - i * s * h + i * a * o + n * s * l - n * r * o
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      r = e[4],
      a = e[5],
      o = e[6],
      l = e[7],
      h = e[8],
      c = h * r - a * l,
      u = a * o - h * s,
      d = l * s - r * o,
      p = t * c + i * u + n * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / p;
    return (
      (e[0] = c * f),
      (e[1] = (n * l - h * i) * f),
      (e[2] = (a * i - n * r) * f),
      (e[3] = u * f),
      (e[4] = (h * t - n * o) * f),
      (e[5] = (n * s - a * t) * f),
      (e[6] = d * f),
      (e[7] = (i * o - l * t) * f),
      (e[8] = (r * t - i * s) * f),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, n, s, r, a) {
    const o = Math.cos(s),
      l = Math.sin(s);
    return (
      this.set(
        i * o,
        i * l,
        -i * (o * r + l * a) + r + e,
        -n * l,
        n * o,
        -n * (-l * r + o * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Qe.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Qe.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Qe.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let n = 0; n < 9; n++) if (t[n] !== i[n]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
