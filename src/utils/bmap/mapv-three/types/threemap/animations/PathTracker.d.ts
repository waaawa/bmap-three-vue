export class PathTracker {
    /** @private */ private _isRunning;
    /** @private */ private _animationStartTime;
    /** @private */ private _animationDuration;
    /** @private */ private _animationTransform;
    /** @private */ private _animationCurrenState;
    /** @private */ private _engine;
    /** @private */ private _track;
    /** @private */ private _frameInfo;
    /** @private */ private _sampledPath;
    /** @private */ private _isPause;
    /** @private */ private _pauseTime;
    /** @private */ private _pauseTimestamp;
    /** @private */ private _object;
    /** @private */ private _interpolateDirectThreshold;
    /** @private */ private _interpolateDirectThresholdPercent;
    /** @private */ private _lockView;
    /** @private */ private _viewFollow;
    /** @private */ private _viewMode;
    /** @private */ private _arcInfo;
    /** @private */ private _pointHandle;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    beforeRemoveFromEngine(): void;
    _update: () => void;
    /**
     * @internal
     * 控制地图视野移动
     */
    _updateCamera(camera: any, center: any, zoom: any, zoomUnits: any, heading: any, pitch: any): void;
    /**
     * @internal
     * 不用map的方法，直接修改相机，避免出现卡顿问题
     */
    _computeCameraMatrixBlankMap(camera: any, center: any, zoom: any, zoomUnits: any, heading: any, pitch: any): void;
    /**
     * @internal
     * 3DControl的lookAt方法是直接操作相机
     */
    _computeCameraMatrixBlankMap3D(camera: any, center: any, zoom: any, zoomUnits: any, heading: any, pitch: any): void;
    /**
     * @internal
     */
    _interpolatePath(ratio: any): any;
    /**
     * @internal
     */
    _createSampledPath(path: any): {
        percent: string;
        point: any;
        position: any;
        distance: number;
        direction: any;
        pitch: number;
    }[] | undefined;
    /**
     * @internal
     * 计算v0到v1的地图倾斜角度
     * @param {Array} v0 起点
     * @param {Array} v1 终点
     */
    _getRadians(v0: any[], v1: any[]): number;
    /**
     * 开始漫游动画，可设置动画时长、视野距离、视野偏移
     * @param {{duration?: number, heading?: number, pitch?: number, distance?: number}} options 动画参数
     */
    start(options?: {
        duration?: number | undefined;
        heading?: number | undefined;
        pitch?: number | undefined;
        distance?: number | undefined;
    }): void;
    /**
     * 暂停漫游动画
     * @param {*} unlock 是否解锁视野
     * @returns 当前视角参数
     */
    pause(unlock: any): any;
    /**
     * 停止漫游动画
     */
    stop(): void;
    /**
     * 设置视野跟随的坐标
     * @param {Array | GeoJSON} target 坐标数组或geojson对象
     */
    set track(arg: any);
    get track(): any;
    /**
     * 设置拐弯处的开始差值的距离
     * @param {number} value 距离单位米
     */
    set interpolateDirectThreshold(arg: number);
    get interpolateDirectThreshold(): number;
    /**
     * 设置拐弯处的开始差值的距离百分比
     * @param {number} value 百分比 0 < value < 0.5
     */
    set interpolateDirectThresholdPercent(arg: number);
    get interpolateDirectThresholdPercent(): number;
    set viewMode(arg: string);
    get viewMode(): string;
    /**
     * 锁定视角
     * @param {boolean} value 是否锁定
     */
    set lockView(arg: boolean);
    get lockView(): boolean;
    set viewFollow(arg: boolean);
    get viewFollow(): boolean;
    /**
     * 设置跟踪的object物体，如果参数为模型则需遵循以下要求：模型的前进方向为X正半轴，且按+Y UP导出
     * @param {Object3D} value 传入threejs的Object对象
     */
    set object(arg: any);
    get object(): any;
    set pointHandle(arg: any);
    curvePath: any;
}
