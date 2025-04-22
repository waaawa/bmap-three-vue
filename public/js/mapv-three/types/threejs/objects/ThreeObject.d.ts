/** @protected */
export class ThreeObject {
    constructor(options: any);
    /** @private */ private _enableRtc;
    /** @private */ private _cachedRtc;
    /** @private */ private _receiveRaycast;
    /**
     * @internal
     */
    makeMeshPositionOffset: (offset: any) => void;
    /**
    * @internal
    * @param {*} geometry 要偏移坐标的geometry
    */
    makeGeometryOffsetPosition: (geometry: any, positions: any) => void;
    /**
     * @internal
     */
    makePostionArrayOffset: (positions: any, x: any, y: any, z: any, origin: any) => void;
    /**
     * @internal
     */
    updateTransform: () => void;
    /**
     * 将this.geometry下挂载的同名getter与setter属性挂载到this上，方便操作
     * @param {Array<string>} properties 属性名数组
     * @internal
     */
    defineGeometryProxyProperties(properties?: Array<string>): void;
    /**
     * 将this.material下挂载的同名getter与setter属性挂载到this上，方便操作
     * @param {Array<string>} properties 属性名数组
     * @internal
     */
    defineMaterialProxyProperties(properties?: Array<string>): void;
    raycast(raycaster: any, intersects: any): void;
    set receiveRaycast(arg: boolean);
    /**
     * 在需要时可设置是否支持被选中，开启后才能触发鼠标事件，默认关闭以节省性能
     */
    get receiveRaycast(): boolean;
}
