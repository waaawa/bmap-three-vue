/**
 * 天际线描边
 * 支持地形和楼块
 * ```js
 * const skyline = engine.add(new mapvthree.SkyLine());
 * skyline.color = 'yellow';
 * // 开启天际线描边
 * skyline.enabled = true;
 * ```
 */
export class SkyLine {
    /** @private */ private _color;
    /** @private */ private _width;
    /** @private */ private _enabled;
    /** @private */ private _skylinePass;
    afterAddToEngine(engine: any): void;
    _engine: any;
    set color(arg: string);
    get color(): string;
    set width(arg: number);
    get width(): number;
    beforeRemoveFromEngine(engine: any): void;
    getSelectedObjects: () => void;
    set enabled(arg: boolean);
    get enabled(): boolean;
}
