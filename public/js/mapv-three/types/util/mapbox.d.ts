export function getMapboxPath(url: any): any;
export function normalizeStyleUrl(url: any, token: any): string;
export function normalizeSpriteUrl(url: any, token: any, styleUrl: any): string;
export function normalizeSourceUrl(url: any, token: any, tokenParam: any, styleUrl: any): string;
export function unbundle(value: any): any;
export function deepUnbundle(value: any): any;
export function classifyRings(rings: any, maxRings: any): any[];
/**
 * Returns the signed area for the polygon ring.  Postive areas are exterior rings and
 * have a clockwise winding.  Negative areas are interior rings and have a counter clockwise
 * ordering.
 *
 * @private
 * @param ring Exterior or interior ring
 */
export function calculateSignedArea(ring: any): number;
export namespace interpolate {
    function number(a: any, b: any, t: any): number;
    function number(a: any, b: any, t: any): number;
    function color(from: any, to: any, t: any): Color;
    function color(from: any, to: any, t: any): Color;
    function array(from: any, to: any, t: any): any;
    function array(from: any, to: any, t: any): any;
}
export namespace lab {
    export { rgbToLab as forward };
    export { labToRgb as reverse };
    export { interpolateLab as interpolate };
}
export namespace hcl {
    export { rgbToHcl as forward };
    export { hclToRgb as reverse };
    export { interpolateHcl as interpolate };
}
import { Color } from "../threemap/mapView/mapbox/color";
declare function rgbToLab(rgbColor: any): {
    l: number;
    a: number;
    b: number;
    alpha: any;
};
declare function labToRgb(labColor: any): Color;
declare function interpolateLab(from: any, to: any, t: any): {
    l: number;
    a: number;
    b: number;
    alpha: number;
};
declare function rgbToHcl(rgbColor: any): {
    h: number;
    c: number;
    l: number;
    alpha: any;
};
declare function hclToRgb(hclColor: any): Color;
declare function interpolateHcl(from: any, to: any, t: any): {
    h: any;
    c: number;
    l: number;
    alpha: number;
};
export {};
