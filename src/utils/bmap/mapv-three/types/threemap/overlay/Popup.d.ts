/**
 * 信息弹窗，默认锚点位置为底部中心点
 * ```js
 * let overlay = engine.add(new mapvthree.Popup({
 *  point: [lng, lat, z],
 *  title: 'title',
 *  content: 'content'
 * }))
 * ```
 */
export class Popup extends DOMOverlay {
    constructor(parameters: any);
    /** @private */ private _titleDiv;
    /** @private */ private _contentDiv;
    /** @private */ private _title;
    /** @private */ private _content;
    /** @private */ private _closePopup;
    isPopup: boolean;
    set title(arg: any);
    get title(): any;
    set content(arg: any);
    get content(): any;
    click: () => void;
}
import { DOMOverlay } from "./DOMOverlay";
