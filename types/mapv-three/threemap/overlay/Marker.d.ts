/**
 * 图片标注，默认锚点位置为img的中心点
 * ```js
 * let overlay = engine.add(new mapvthree.Marker({
 *  point: [lng, lat, z],
 *  icon: a/b/c.png
 * }))
 * ```
 */
export class Marker extends DOMOverlay {
    /** @private */ private _icon;
    /** @private */ private _width;
    /** @private */ private _height;
    isMarker: boolean;
    set icon(arg: any);
    get icon(): any;
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    opacity: any;
}
import { DOMOverlay } from "./DOMOverlay";
