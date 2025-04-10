var __defNormalProp = (e, t, i) => {
  return t in e
    ? Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i,
      })
    : (e[t] = i);
};

var __publicField = (e, t, i) => (
  __defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i
);

const t = "mapv";

function i(e, t) {
  if (void 0 === e.className) e.className = t;
  else if (e.className !== t) {
    const i = e.className.split(/ +/);
    -1 === i.indexOf(t) &&
      (i.push(t),
      (e.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")));
  }
  return e;
}

function n(e, t) {
  if (t)
    if (e.className === t) e.removeAttribute("class");
    else {
      const i = e.className.split(/ +/),
        n = i.indexOf(t);
      -1 !== n && (i.splice(n, 1), (e.className = i.join(" ")));
    }
  else e.className = void 0;
  return e;
}

const s = {};
const r = "156",
  a = 1,
  o = 2,
  l = 3,
  h = 0,
  c = 1,
  u = 100,
  d = 200,
  p = 201,
  f = 0,
  m = 1,
  g = 2,
  _ = 0,
  v = 1,
  A = 2,
  y = 3,
  x = 4,
  b = 5,
  E = 301,
  S = 302,
  C = 303,
  M = 306,
  w = 1e3,
  T = 1001,
  I = 1002,
  R = 1003,
  P = 1004,
  D = 1005,
  L = 1006,
  F = 1007,
  N = 1008,
  B = 1009,
  k = 1012,
  O = 1013,
  U = 1014,
  z = 1015,
  G = 1016,
  V = 1020,
  Q = 1023,
  H = 1026,
  j = 1027,
  W = 1028,
  q = 1030,
  X = 33776,
  Y = 33777,
  K = 33778,
  Z = 33779,
  J = 35840,
  $ = 35842,
  ee = 37492,
  te = 37496,
  ie = 37808,
  ne = 37812,
  se = 36492,
  re = 2300,
  ae = 2301,
  oe = 2302,
  le = 2400,
  he = 2401,
  ce = 2402,
  ue = 2500,
  de = 3e3,
  pe = 3001,
  fe = "",
  me = "srgb",
  ge = "srgb-linear",
  _e = "display-p3",
  ve = "display-p3-linear",
  Ae = 7680,
  ye = 35044,
  xe = 35048,
  be = "300 es",
  Ee = 1035,
  Se = 2e3,
  Ce = 2001;

class Me {
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

const we = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];

let Te = 1234567;

const Ie = Math.PI / 180,
  Re = 180 / Math.PI;

function Pe() {
  const e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0;
  return (
    we[255 & e] +
    we[(e >> 8) & 255] +
    we[(e >> 16) & 255] +
    we[(e >> 24) & 255] +
    "-" +
    we[255 & t] +
    we[(t >> 8) & 255] +
    "-" +
    we[((t >> 16) & 15) | 64] +
    we[(t >> 24) & 255] +
    "-" +
    we[(63 & i) | 128] +
    we[(i >> 8) & 255] +
    "-" +
    we[(i >> 16) & 255] +
    we[(i >> 24) & 255] +
    we[255 & n] +
    we[(n >> 8) & 255] +
    we[(n >> 16) & 255] +
    we[(n >> 24) & 255]
  ).toLowerCase();
}

function De(e, t, i) {
  return Math.max(t, Math.min(i, e));
}

function Le(e, t) {
  return ((e % t) + t) % t;
}

function Fe(e, t, i) {
  return (1 - i) * e + i * t;
}

function Ne(e) {
  return 0 == (e & (e - 1)) && 0 !== e;
}

function Be(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}

function ke(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}

function Oe(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}

function Ue(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(4294967295 * e);
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int32Array:
      return Math.round(2147483647 * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw new Error("Invalid component type.");
  }
}

const ze = {
  DEG2RAD: Ie,
  RAD2DEG: Re,
  generateUUID: Pe,
  clamp: De,
  euclideanModulo: Le,
  mapLinear: function (e, t, i, n, s) {
    return n + ((e - t) * (s - n)) / (i - t);
  },
  inverseLerp: function (e, t, i) {
    return e !== t ? (i - e) / (t - e) : 0;
  },
  lerp: Fe,
  damp: function (e, t, i, n) {
    return Fe(e, t, 1 - Math.exp(-i * n));
  },
  pingpong: function (e, t = 1) {
    return t - Math.abs(Le(e, 2 * t) - t);
  },
  smoothstep: function (e, t, i) {
    return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e);
  },
  smootherstep: function (e, t, i) {
    return e <= t
      ? 0
      : e >= i
      ? 1
      : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10);
  },
  randInt: function (e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  randFloat: function (e, t) {
    return e + Math.random() * (t - e);
  },
  randFloatSpread: function (e) {
    return e * (0.5 - Math.random());
  },
  seededRandom: function (e) {
    void 0 !== e && (Te = e);
    let t = (Te += 1831565813);
    return (
      (t = Math.imul(t ^ (t >>> 15), 1 | t)),
      (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  },
  degToRad: function (e) {
    return e * Ie;
  },
  radToDeg: function (e) {
    return e * Re;
  },
  isPowerOfTwo: Ne,
  ceilPowerOfTwo: Be,
  floorPowerOfTwo: ke,
  setQuaternionFromProperEuler: function (e, t, i, n, s) {
    const r = Math.cos,
      a = Math.sin,
      o = r(i / 2),
      l = a(i / 2),
      h = r((t + n) / 2),
      c = a((t + n) / 2),
      u = r((t - n) / 2),
      d = a((t - n) / 2),
      p = r((n - t) / 2),
      f = a((n - t) / 2);
    switch (s) {
      case "XYX":
        e.set(o * c, l * u, l * d, o * h);
        break;
      case "YZY":
        e.set(l * d, o * c, l * u, o * h);
        break;
      case "ZXZ":
        e.set(l * u, l * d, o * c, o * h);
        break;
      case "XZX":
        e.set(o * c, l * f, l * p, o * h);
        break;
      case "YXY":
        e.set(l * p, o * c, l * f, o * h);
        break;
      case "ZYZ":
        e.set(l * f, l * p, o * c, o * h);
        break;
      default:
        console.warn(
          "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
            s
        );
    }
  },
  normalize: Ue,
  denormalize: Oe,
};

class Ge {
  constructor(e = 0, t = 0) {
    (Ge.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      n = e.elements;
    return (
      (this.x = n[0] * t + n[3] * i + n[6]),
      (this.y = n[1] * t + n[4] * i + n[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(De(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      n = Math.sin(t),
      s = this.x - e.x,
      r = this.y - e.y;
    return (this.x = s * i - r * n + e.x), (this.y = s * n + r * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}

class Ve {
  constructor(e, t, i, n, s, r, a, o, l) {
    (Ve.prototype.isMatrix3 = !0),
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

const Qe = new Ve();

function He(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}

function je(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}

function We() {
  const e = je("canvas");
  return (e.style.display = "block"), e;
}

const qe = {};
function Xe(e) {
  e in qe || ((qe[e] = !0), console.warn(e));
}

function Ye(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}

function Ke(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}

const Ze = new Ve().fromArray([
  0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7, 1e-7,
  0.9105199,
]);

const Je = new Ve().fromArray([
  1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7, 0,
  1.0982735,
]);

const $e = {
  [ge]: (e) => e,
  [me]: (e) => e.convertSRGBToLinear(),
  [_e]: function (e) {
    return e.convertSRGBToLinear().applyMatrix3(Je);
  },
};

const et = {
  [ge]: (e) => e,
  [me]: (e) => e.convertLinearToSRGB(),
  [_e]: function (e) {
    return e.applyMatrix3(Ze).convertLinearToSRGB();
  },
};

const tt = {
  enabled: !0,
  get legacyMode() {
    return (
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
      !this.enabled
    );
  },
  set legacyMode(e) {
    console.warn(
      "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
    ),
      (this.enabled = !e);
  },
  get workingColorSpace() {
    return ge;
  },
  set workingColorSpace(e) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function (e, t, i) {
    if (!1 === this.enabled || t === i || !t || !i) return e;
    const n = $e[t],
      s = et[i];
    if (void 0 === n || void 0 === s)
      throw new Error(`Unsupported color space conversion, "${t}" to "${i}".`);
    return s(n(e));
  },
  fromWorkingColorSpace: function (e, t) {
    return this.convert(e, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function (e, t) {
    return this.convert(e, t, this.workingColorSpace);
  },
};
let it;

class nt {
  static getDataURL(e) {
    if (/^data:/i.test(e.src)) return e.src;
    if ("undefined" == typeof HTMLCanvasElement) return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === it && (it = je("canvas")),
        (it.width = e.width),
        (it.height = e.height);
      const i = it.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = it);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      const t = je("canvas");
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height),
        s = n.data;
      for (let e = 0; e < s.length; e++) s[e] = 255 * Ye(s[e] / 255);
      return i.putImageData(n, 0, 0), t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * Ye(t[e] / 255)))
          : (t[e] = Ye(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      console.warn(
        "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ),
      e
    );
  }
}

let st = 0;
class rt {
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
let ot = 0;

class _i extends Me {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: si++ }),
      (this.uuid = Pe()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = _i.DEFAULT_UP.clone());
    const e = new gt(),
      t = new ii(),
      i = new mt(),
      n = new gt(1, 1, 1);
    t._onChange(function () {
      i.setFromEuler(t, !1);
    }),
      i._onChange(function () {
        t.setFromQuaternion(i, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new Wt() },
        normalMatrix: { value: new Ve() },
      }),
      (this.matrix = new Wt()),
      (this.matrixWorld = new Wt()),
      (this.matrixAutoUpdate = _i.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = _i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new ni()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ai.setFromAxisAngle(e, t), this.quaternion.multiply(ai), this;
  }
  rotateOnWorldAxis(e, t) {
    return ai.setFromAxisAngle(e, t), this.quaternion.premultiply(ai), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(di, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(pi, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(fi, e);
  }
  translateOnAxis(e, t) {
    return (
      ri.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ri.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(di, e);
  }
  translateY(e) {
    return this.translateOnAxis(pi, e);
  }
  translateZ(e) {
    return this.translateOnAxis(fi, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(oi.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, i) {
    e.isVector3 ? li.copy(e) : li.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1),
      hi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? oi.lookAt(hi, li, this.up)
        : oi.lookAt(li, hi, this.up),
      this.quaternion.setFromRotationMatrix(oi),
      n &&
        (oi.extractRotation(n.matrixWorld),
        ai.setFromRotationMatrix(oi),
        this.quaternion.premultiply(ai.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (null !== e.parent && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(mi))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(gi)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      oi.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), oi.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(oi),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, n = this.children.length; i < n; i++) {
      const n = this.children[i].getObjectByProperty(e, t);
      if (void 0 !== n) return n;
    }
  }
  getObjectsByProperty(e, t) {
    let i = [];
    this[e] === t && i.push(this);
    for (let n = 0, s = this.children.length; n < s; n++) {
      const s = this.children[n].getObjectsByProperty(e, t);
      s.length > 0 && (i = i.concat(s));
    }
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, e, ci), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, ui, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) {
      const n = t[i];
      (!0 !== n.matrixWorldAutoUpdate && !0 !== e) || n.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (!0 === e &&
        null !== i &&
        !0 === i.matrixWorldAutoUpdate &&
        i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      !0 === t)
    ) {
      const e = this.children;
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t];
        !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e,
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const n = {};
    function s(t, i) {
      return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      !0 === this.castShadow && (n.castShadow = !0),
      !0 === this.receiveShadow && (n.receiveShadow = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.frustumCulled && (n.frustumCulled = !1),
      0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      (n.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = s(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        const i = t.shapes;
        if (Array.isArray(i))
          for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            s(e.shapes, n);
          }
        else s(e.shapes, i);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (s(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const t = [];
        for (let i = 0, n = this.material.length; i < n; i++)
          t.push(s(e.materials, this.material[i]));
        n.material = t;
      } else n.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let t = 0; t < this.children.length; t++)
        n.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const i = this.animations[t];
        n.animations.push(s(e.animations, i));
      }
    }
    if (t) {
      const t = r(e.geometries),
        n = r(e.materials),
        s = r(e.textures),
        a = r(e.images),
        o = r(e.shapes),
        l = r(e.skeletons),
        h = r(e.animations),
        c = r(e.nodes);
      t.length > 0 && (i.geometries = t),
        n.length > 0 && (i.materials = n),
        s.length > 0 && (i.textures = s),
        a.length > 0 && (i.images = a),
        o.length > 0 && (i.shapes = o),
        l.length > 0 && (i.skeletons = l),
        h.length > 0 && (i.animations = h),
        c.length > 0 && (i.nodes = c);
    }
    return (i.object = n), i;
    function r(e) {
      const t = [];
      for (const i in e) {
        const n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let i = 0; i < e.children.length; i++) {
        const t = e.children[i];
        this.add(t.clone());
      }
    return this;
  }
}

class cv extends _i {
  constructor(e) {
    super(),
      __publicField(this, "_enableRtc", !0),
      __publicField(this, "_cachedRtc", [0, 0, 0]),
      __publicField(this, "_receiveRaycast", !1),
      __publicField(this, "makeMeshPositionOffset", (e) => {
        (this._cachedRtc = [e[0], e[1], e[2] || 0]), this.updateTransform();
      }),
      __publicField(this, "makeGeometryOffsetPosition", (e, t) => {
        if (!this._enableRtc) return;
        const i = e.boundingSphere && e.boundingSphere.center;
        if (!i)
          return (this._cachedRtc = [0, 0, 0]), void this.updateTransform();
        const { x: n, y: s, z: r } = i;
        e.isCustomInstancedBufferGeometry
          ? this.makePostionArrayOffset(
              e.attributes.instancedPosition.array,
              n,
              s,
              r,
              t
            )
          : (this.makePostionArrayOffset(
              e.attributes.position.array,
              n,
              s,
              r,
              t
            ),
            e.attributes.position.array.length),
          e.computeBoundingSphere(),
          (this._cachedRtc = [n, s, r]),
          this.updateTransform();
      }),
      __publicField(this, "makePostionArrayOffset", (e, t, i, n, s) => {
        if (!e || e.length < 3) return;
        let r = s || e;
        for (let a = 0, o = e.length - 2; a < o; a += 3)
          (e[a] = r[a] - t),
            (e[a + 1] = r[a + 1] - i),
            (e[a + 2] = r[a + 2] - n);
      }),
      __publicField(this, "updateTransform", () => {
        const [e, t, i] = this._cachedRtc;
        this.position.set(e, t, i), this.updateMatrixWorld(!0);
      }),
      Object.defineProperties(this, {
        enableRtc: {
          get: function () {
            return this._enableRtc;
          },
          set: function (e) {
            this._enableRtc = e;
          },
        },
      });
  }
  defineGeometryProxyProperties(e = []) {
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      Object.defineProperty(this, i, {
        get: function () {
          return this.geometry[i];
        },
        set: function (e) {
          this.geometry[i] = e;
        },
      });
    }
  }
  defineMaterialProxyProperties(e = []) {
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      Object.defineProperty(this, i, {
        get: function () {
          return this.material[i];
        },
        set: function (e) {
          this.material[i] = e;
        },
      });
    }
  }
  raycast(e, t) {
    this.receiveRaycast && this.visible && super.raycast(e, t);
  }
  get receiveRaycast() {
    return this._receiveRaycast;
  }
  set receiveRaycast(e) {
    this._receiveRaycast = e;
  }
}

export class gA extends cv {
  constructor() {
    super(...arguments),
      __publicField(this, "isGeoObject", !0),
      __publicField(this, "dataAutoUpdate", !0),
      __publicField(this, "_parameters"),
      __publicField(this, "_dataSource"),
      __publicField(this, "_dataSourceUpdated"),
      __publicField(this, "_needsUpdate"),
      __publicField(this, "_zooms", [0, 100]),
      __publicField(this, "_zoomVisibleCache"),
      __publicField(this, "engine"),
      __publicField(this, "_clampToGround"),
      __publicField(this, "_renderMaterialOptions"),
      __publicField(this, "_backMaterialOptions"),
      __publicField(this, "_frontMaterialOptions"),
      __publicField(this, "_terrain"),
      __publicField(this, "_backObject"),
      __publicField(this, "_frontObject"),
      __publicField(this, "_renderObject"),
      __publicField(this, "_VolumeClass"),
      __publicField(this, "_volumeDataSource", new mA()),
      __publicField(this, "getGeoFeatures", (e, t = !1) => {
        if (!e) return [];
        let i = null;
        return (
          t || this.map.projectGeoJSON(e),
          (i = e.features ? e.features : Array.isArray(e) ? e : [e]),
          i
        );
      }),
      __publicField(this, "travelFeatureLineCoordinate", (e, t, i) => {
        const n = e.geometry;
        if (!n || !n[t] || !n.type) return;
        const s = n[t];
        if ("LineString" === n.type) i && i(s);
        else if ("MultiLineString" === n.type || "Polygon" === n.type)
          for (let r of s) i && i(r);
        else if ("MultiPolygon" === n.type)
          for (let r of s) for (let e of r) i && i(e);
      }),
      __publicField(
        this,
        "travelLineCoordinates",
        (e, t = "coordinates", i, n = 0) => {
          if (Array.isArray(e) && i)
            for (let s = 0, r = e.length; s < r; s++) {
              const r = e[s],
                a = n + s,
                o = r.geometry;
              if (!o || !o[t] || !o.type) continue;
              const l = o[t];
              if ("LineString" === o.type) i && i(l, r, a);
              else if ("MultiLineString" === o.type || "Polygon" === o.type)
                for (let e of l) i && i(e, r, a);
              else if ("MultiPolygon" === o.type)
                for (let e of l) for (let t of e) i && i(t, r, a);
            }
        }
      ),
      __publicField(
        this,
        "travelPolygonCoordinates",
        (e, t = "coordinates", i, n = 0) => {
          if (Array.isArray(e) && i)
            for (let s = 0, r = e.length; s < r; s++) {
              const r = e[s],
                a = n + s,
                o = r.geometry;
              if (!o || !o[t] || !o.type) continue;
              const l = o[t];
              if ("Polygon" === o.type) i && i(l, r, a);
              else if ("MultiPolygon" === o.type)
                for (let e of l) i && i(e, r, a);
              else if ("LineString" === o.type) i && i([l], r, a);
              else if ("MultiLineString" === o.type)
                for (let e of l) i && i([e], r, a);
            }
        }
      ),
      __publicField(
        this,
        "travelPointCoordinates",
        (e, t = "coordinates", i, n = 0) => {
          if (Array.isArray(e) && i)
            for (let s = 0, r = e.length; s < r; s++) {
              const r = e[s],
                a = n + s,
                o = r.geometry;
              if (!o || !o[t] || !o.type) continue;
              const l = o[t];
              "Point" === o.type && i && i(l, r, a);
            }
        }
      ),
      __publicField(this, "getPointsBounding", (e, t = "coordinates") => {
        let i = 1 / 0,
          n = 1 / 0,
          s = 1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = -1 / 0;
        return (
          this.travelPointCoordinates(e, t, (e) => {
            const [t, l, h = 0] = e;
            t < i && (i = t),
              t > r && (r = t),
              l < n && (n = l),
              l > a && (a = l),
              h < s && (s = h),
              h > o && (o = h);
          }),
          isFinite(i) || (i = 0),
          isFinite(r) || (r = 0),
          isFinite(n) || (n = 0),
          isFinite(a) || (a = 0),
          isFinite(s) || (s = 0),
          isFinite(o) || (o = 0),
          [i, n, s, r, a, o]
        );
      });
  }
  get parameters() {
    return this._parameters;
  }
  set parameters(e) {
    this._parameters
      ? (this._parameters = { ...this._parameters, ...e })
      : (this._parameters = { ...this.getDefaultParams(), ...e });
  }
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(e) {
    this.setDataSource(e);
  }
  get needsUpdate() {
    return this._needsUpdate;
  }
  set needsUpdate(e) {
    this._needsUpdate = e;
  }
  get zooms() {
    return this._zooms;
  }
  set zooms(e) {
    this._zooms = e;
  }
  get inZoomsRange() {
    const e = this.engine;
    return (
      !!e &&
      e.map.getZoom() >= this.zooms[0] &&
      e.map.getZoom() <= this.zooms[1]
    );
  }
  afterAddToEngine(e) {
    (this.engine = e),
      this.initObject(),
      this.isInstancedMesh && (this.material.defines.IS_INSTANCE = !0);
  }
  beforeRemoveFromEngine(e) {
    this.dispose();
  }
  initObject() {}
  getDefaultParams() {
    return {};
  }
  getEntityByIndex(e) {
    const t = this.dataSource;
    if (!t) return;
    const i = {
        index: e,
        value: t.getOriginData(e),
        itemIndex: t.getOriginDataIndex(e),
        pairs: {},
      },
      n = t.data;
    for (const s of Object.keys(n)) i.pairs[s] = n[s][e];
    return i;
  }
  setDataSource(e) {
    if (!e && this._dataSource) {
      const e = this._dataSource.objects.indexOf(this);
      e > -1 && this._dataSource.splice(e, 1), (this._dataSource = null);
    }
    e.objects.indexOf(this) > -1 ||
      ((this._dataSource = e),
      (e.projectionName = this.engine.map.projectionCoordsName),
      e.objects.push(this),
      (this.needsUpdate = !0),
      this.engine.requestRender());
  }
  onBeforeScenePrepareRender(e, t, i, n) {
    if (
      this.dataSource &&
      (this.dataSource.needsUpdate &&
        (this.dataSource.update(), (this.needsUpdate = !0)),
      this.dataAutoUpdate &&
        this.needsUpdate &&
        this._enableCollision &&
        (e.rendering.collision.needsUpdate = !0),
      this.onBeforeScenePrepareRenderHook &&
        this.onBeforeScenePrepareRenderHook(e, t, i, n),
      this.clampToGround)
    ) {
      const t = this.getShadowVolumeOptions();
      this._volumeDataSource = this.createVolumeDataSource();
      const i = this._VolumeClass;
      this._backObject && this.engine.remove(this._backObject),
        (this._backObject = e.add(
          new i({ ...this._backMaterialOptions, ...t })
        )),
        this._frontObject && this.engine.remove(this._frontObject),
        (this._frontObject = e.add(
          new i({ ...this._frontMaterialOptions, ...t })
        )),
        this._renderObject && this.engine.remove(this._renderObject),
        (this._renderObject = e.add(
          new i({
            ...this._renderMaterialOptions,
            ...t,
            ...this.filterVolumeParamter(this.parameters),
          })
        )),
        (this._frontObject.dataSource = this._volumeDataSource),
        (this._backObject.dataSource = this._volumeDataSource),
        (this._renderObject.dataSource = this._volumeDataSource);
    }
  }
  onBeforeSceneRender(e, t, i, n) {
    this.dataSource &&
      (this.dataAutoUpdate && this.needsUpdate
        ? this.setData()
        : this.dataAutoUpdate && this._collisionUpdated
        ? (this.setData(), (this._collisionUpdated = !1))
        : this.geometry &&
          this.geometry.needsUpdate &&
          this.geometry.updateGeometry &&
          (this.geometry.updateGeometry(),
          this.afterGeometryUpdate && this.afterGeometryUpdate()),
      this.visible && !this.inZoomsRange
        ? ((this._zoomVisibleCache = this.visible), (this.visible = !1))
        : !this.visible &&
          this._zoomVisibleCache &&
          this.inZoomsRange &&
          ((this.visible = this._zoomVisibleCache),
          (this._zoomVisibleCache = void 0)),
      this.onBeforeSceneRenderHook && this.onBeforeSceneRenderHook(e, t, i, n));
  }
  setData() {}
  collisionTest(e) {
    return {};
  }
  createVolumeDataSource() {
    return this.dataSource;
  }
  specifiedVolumeClass() {
    this._VolumeClass = this.constructor;
  }
  filterVolumeParamter(e) {
    const t = [
      "opacity",
      "color",
      "vertexColors",
      "emissive",
      "mapSrc",
      "mapScale",
    ];
    let i = {};
    return (
      Object.keys(e)
        .filter((e) => t.includes(e))
        .forEach((t) => {
          i[t] = e[t];
        }),
      i
    );
  }
  onDispose() {}
  dispose() {
    if ((this.geometry && this.geometry.dispose(), this.material))
      if (Array.isArray(this.material))
        for (let e = 0; e < this.material.length; e++) {
          this.material[e].dispose();
        }
      else this.material.dispose();
    this.onDispose();
  }
  bindTerrain(e) {
    this._terrain = e;
  }
  initMaterialOptions() {
    (this._frontMaterialOptions = {
      side: h,
      depthWrite: !1,
      colorWrite: !1,
      stencilWrite: !0,
      stencilFunc: 519,
      stencilZFail: 34056,
      stencilZPass: Ae,
    }),
      (this._backMaterialOptions = {
        side: c,
        depthWrite: !1,
        colorWrite: !1,
        stencilWrite: !0,
        stencilFunc: 519,
        stencilZFail: 34055,
        stencilZPass: Ae,
      }),
      (this._renderMaterialOptions = {
        side: 2,
        stencilWrite: !0,
        stencilRef: 0,
        depthTest: !1,
        stencilFunc: 517,
        stencilZFail: 0,
        stencilFail: 0,
        stencilZPass: 0,
      });
  }
  getShadowVolumeOptions() {
    this.geometry.computeBoundingBox();
    const { min: e, max: t } = this.geometry.boundingBox,
      i = this.position;
    let n = new Ge(e.x, e.y).add(i),
      s = new Ge(t.x, t.y).add(i);
    const r = new nh(n, s);
    let [a, o] = this._terrain._intersectHeightRange(r);
    return {
      opacity: 0.4,
      extrude: !0,
      extrudeValue: o - a,
      zOffset: a,
      enableBottomFace: !0,
    };
  }
  get clampToGround() {
    return this._clampToGround;
  }
  set clampToGround(e) {
    this.clampToGround !== e &&
      ((this._clampToGround = e),
      e
        ? (this.initMaterialOptions(),
          this.specifiedVolumeClass(),
          (this.material.visible = !1))
        : (this._frontObject && this.engine.remove(this._frontObject),
          this._backObject && this.engine.remove(this._backObject),
          this._renderObject && this.engine.remove(this._renderObject),
          (this.material.visible = !0)));
  }
}

export class _A extends gA {
  constructor() {
    super(...arguments), __publicField(this, "isMesh", !0);
  }
}
