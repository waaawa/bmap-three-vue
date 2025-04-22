export class Quaternion {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n);
  }
  static slerpFlat(e, t, i, n, s, r, a) {
    let o = i[n + 0],
      l = i[n + 1],
      h = i[n + 2],
      c = i[n + 3];
    const u = s[r + 0],
      d = s[r + 1],
      p = s[r + 2],
      f = s[r + 3];
    if (0 === a)
      return (
        (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = h), void (e[t + 3] = c)
      );
    if (1 === a)
      return (
        (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = f)
      );
    if (c !== f || o !== u || l !== d || h !== p) {
      let e = 1 - a;
      const t = o * u + l * d + h * p + c * f,
        i = t >= 0 ? 1 : -1,
        n = 1 - t * t;
      if (n > Number.EPSILON) {
        const s = Math.sqrt(n),
          r = Math.atan2(s, t * i);
        (e = Math.sin(e * r) / s), (a = Math.sin(a * r) / s);
      }
      const s = a * i;
      if (
        ((o = o * e + u * s),
        (l = l * e + d * s),
        (h = h * e + p * s),
        (c = c * e + f * s),
        e === 1 - a)
      ) {
        const e = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
        (o *= e), (l *= e), (h *= e), (c *= e);
      }
    }
    (e[t] = o), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = c);
  }
  static multiplyQuaternionsFlat(e, t, i, n, s, r) {
    const a = i[n],
      o = i[n + 1],
      l = i[n + 2],
      h = i[n + 3],
      c = s[r],
      u = s[r + 1],
      d = s[r + 2],
      p = s[r + 3];
    return (
      (e[t] = a * p + h * c + o * d - l * u),
      (e[t + 1] = o * p + h * u + l * c - a * d),
      (e[t + 2] = l * p + h * d + a * u - o * c),
      (e[t + 3] = h * p - a * c - o * u - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, i, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const i = e._x,
      n = e._y,
      s = e._z,
      r = e._order,
      a = Math.cos,
      o = Math.sin,
      l = a(i / 2),
      h = a(n / 2),
      c = a(s / 2),
      u = o(i / 2),
      d = o(n / 2),
      p = o(s / 2);
    switch (r) {
      case "XYZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "YXZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "ZXY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "ZYX":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "YZX":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "XZY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r
        );
    }
    return !1 !== t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2,
      n = Math.sin(i);
    return (
      (this._x = e.x * n),
      (this._y = e.y * n),
      (this._z = e.z * n),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      n = t[4],
      s = t[8],
      r = t[1],
      a = t[5],
      o = t[9],
      l = t[2],
      h = t[6],
      c = t[10],
      u = i + a + c;
    if (u > 0) {
      const e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (h - o) * e),
        (this._y = (s - l) * e),
        (this._z = (r - n) * e);
    } else if (i > a && i > c) {
      const e = 2 * Math.sqrt(1 + i - a - c);
      (this._w = (h - o) / e),
        (this._x = 0.25 * e),
        (this._y = (n + r) / e),
        (this._z = (s + l) / e);
    } else if (a > c) {
      const e = 2 * Math.sqrt(1 + a - i - c);
      (this._w = (s - l) / e),
        (this._x = (n + r) / e),
        (this._y = 0.25 * e),
        (this._z = (o + h) / e);
    } else {
      const e = 2 * Math.sqrt(1 + c - i - a);
      (this._w = (r - n) / e),
        (this._x = (s + l) / e),
        (this._y = (o + h) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(De(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (0 === i) return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      n = e._y,
      s = e._z,
      r = e._w,
      a = t._x,
      o = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = i * h + r * a + n * l - s * o),
      (this._y = n * h + r * o + s * a - i * l),
      (this._z = s * h + r * l + i * o - n * a),
      (this._w = r * h - i * a - n * o - s * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    const i = this._x,
      n = this._y,
      s = this._z,
      r = this._w;
    let a = r * e._w + i * e._x + n * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = r), (this._x = i), (this._y = n), (this._z = s), this;
    const o = 1 - a * a;
    if (o <= Number.EPSILON) {
      const e = 1 - t;
      return (
        (this._w = e * r + t * this._w),
        (this._x = e * i + t * this._x),
        (this._y = e * n + t * this._y),
        (this._z = e * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(o),
      h = Math.atan2(l, a),
      c = Math.sin((1 - t) * h) / l,
      u = Math.sin(t * h) / l;
    return (
      (this._w = r * c + this._w * u),
      (this._x = i * c + this._x * u),
      (this._y = n * c + this._y * u),
      (this._z = s * c + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      i = Math.sqrt(e),
      n = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(n),
      i * Math.sin(s),
      i * Math.cos(s),
      t * Math.sin(n)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
