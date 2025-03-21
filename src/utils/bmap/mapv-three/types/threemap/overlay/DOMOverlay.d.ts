/**
 * DOM覆盖物，默认锚点位置为div的中心点
 * ```js
 * let overlay = engine.add(new mapvthree.DOMOverlay({
 *  point: [lng, lat, z],
 *  dom: HTMLElement | string
 * }))
 * ```
 */
export class DOMOverlay {
    constructor(parameters?: {});
    /** @private */ private _container;
    /** @private */ private _point;
    /** @private */ private _dom;
    /** @private */ private _div;
    /** @private */ private _visible;
    /** @private */ private _offset;
    /** @private */ private _stopPropagation;
    /** @private */ private _enableDragging;
    isDOMOverlay: boolean;
    parameters: {};
    afterAddToEngine(engine: any): void;
    engine: any;
    set dom(arg: any);
    get dom(): any;
    set point(arg: any);
    get point(): any;
    set offset(arg: any);
    get offset(): any;
    set className(arg: any);
    get className(): any;
    set enableDragging(arg: boolean);
    get enableDragging(): boolean;
    set visible(arg: any);
    get visible(): any;
    beforeRemoveFromEngine(engine: any): void;
    /**
     * 初始化dom
     */
    initDom(): any;
    afterInit(): void;
    onBeforeScenePrepareRender(engine: any, scene: any, camera: any): void;
    camera: any;
    renderer: any;
    _screenPos: any;
    onDispose(): void;
    /**
     * 内存释放
     */
    dispose(): void;
    set stopPropagation(arg: boolean);
    get stopPropagation(): boolean;
    _className: any;
    handleMouseDown: (e: any) => void;
    _sub: any;
    handleMouseUp: (e: any) => void;
    handleMouseMove: (e: any) => void;
    handleWheel: (e: any) => void;
}
