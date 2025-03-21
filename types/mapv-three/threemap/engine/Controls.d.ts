/**
 * 引擎控件入口
 *
 * ```javascript
 * const control = new EngineControls(engine, {
 *   fullscreen: true
 * });
 * control.logo.enabled = true;
 * ```
 */
export class EngineControls {
    constructor(engine: any, options?: {});
    /** @private */ private _container;
    /** @private */ private _engine;
    /** @private */ private _logo;
    /** @private */ private _zoom;
    /** @private */ private _scale;
    /** @private */ private _fullscreen;
    /** @private */ private _geoLocate;
    /** @private */ private _exportImage;
    /** @private */ private _mapInfo;
    /** @private */ private _compass;
    _drawer: Drawer;
    dispose(): void;
    /**
     * mapvthree的容器
     */
    get container(): any;
    /**
     * mapvthree的engine对象
     */
    get engine(): any;
    /**
     * mapvthree的compass节点
     */
    get compass(): Compass;
    /**
     * mapvthree的logo节点
     */
    get logo(): Logo;
    /**
     * mapvthree的zoom节点
     */
    get zoom(): Zoom;
    /**
     * mapvthree的scale节点
     */
    get scale(): Scale;
    /**
     * mapvthree的fullscreen节点
     */
    get fullscreen(): Fullscreen;
    /**
     * mapvthree的geoLocate节点
     */
    get geoLocate(): GeoLocate;
    /**
     * mapvthree的exportImage节点
     */
    get exportImage(): ExportImage;
    /**
     * mapvthree的mapInfo节点
     */
    get mapInfo(): MapInfo;
    get drawer(): Drawer;
}
import { Drawer } from "./controls/Drawer";
import { Compass } from "./controls/Compass";
import { Logo } from "./controls/Logo";
import { Zoom } from "./controls/Zoom";
import { Scale } from "./controls/Scale";
import { Fullscreen } from "./controls/Fullscreen";
import { GeoLocate } from "./controls/GeoLocate";
import { ExportImage } from "./controls/ExportImage";
import { MapInfo } from "./controls/MapInfo";
