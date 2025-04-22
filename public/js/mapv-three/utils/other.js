export const we = [
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

export function Pe() {
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

export const r = "156";
export const a = 1;
export const o = 2;
export const l = 3;
export const h = 0;
export const c = 1;
export const u = 100;
export const d = 200;
export const p = 201;
export const f = 0;
export const m = 1;
export const g = 2;
export const _ = 0;
export const v = 1;
export const A = 2;
export const y = 3;
export const x = 4;
export const b = 5;
export const E = 301;
export const S = 302;
export const C = 303;
export const M = 306;
export const w = 1e3;
export const T = 1001;
export const I = 1002;
export const R = 1003;
export const P = 1004;
export const D = 1005;
export const L = 1006;
export const F = 1007;
export const N = 1008;
export const B = 1009;
export const k = 1012;
export const O = 1013;
export const U = 1014;
export const z = 1015;
export const G = 1016;
export const V = 1020;
export const Q = 1023;
export const H = 1026;
export const j = 1027;
export const W = 1028;
export const q = 1030;
export const X = 33776;
export const Y = 33777;
export const K = 33778;
export const Z = 33779;
export const J = 35840;
export const $ = 35842;
export const ee = 37492;
export const te = 37496;
export const ie = 37808;
export const ne = 37812;
export const se = 36492;
export const re = 2300;
export const ae = 2301;
export const oe = 2302;
export const le = 2400;
export const he = 2401;
export const ce = 2402;
export const ue = 2500;
export const de = 3e3;
export const pe = 3001;
export const fe = "";
export const me = "srgb";
export const ge = "srgb-linear";
export const _e = "display-p3";
export const ve = "display-p3-linear";
export const Ae = 7680;
export const ye = 35044;
export const xe = 35048;
export const be = "300 es";
export const Ee = 1035;
export const Se = 2e3;
export const Ce = 2001;
