export class ObjectTracker {
    static computeTransformedBoundingBox(box: any, transform: any): any;
    /** @private */ private _trackObject;
    /** @private */ private _trackStatus;
    /** @private */ private _trackConfig;
    /** @private */ private _trackParams;
    /**
     * 追踪物体
     * @param {*} object 物体
     * @param {*} config 追踪配置
     */
    track(object: any, config: any): void;
    /**
     * 停止追踪
     */
    stop(): void;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    _engine: any;
    /** @protected */
    protected onBeforeScenePrepareRender(engine: any, scene: any, camera: any, renderState: any): void;
    /**
     * 获取目标相机
     * @param {Object} viewer 视图实例
     * @param {any} target 可以是 Vector3或者[x,y,z]或者是几何体Mesh,Polygon,Line,Point等
     * @param {Object} view 目标视线
     * @param {Number} [view.yaw=0] 平视角
     * @param {Number} [view.pitch=-0.5*PI] 俯仰角
     * @param {Number} [view.radius=0] 和目标物之间的距离
     * @returns {Object} 相机
     */
    getCameraByTargetAndView(engine: any, target: any, view?: {
        yaw?: number | undefined;
        pitch?: number | undefined;
        radius?: number | undefined;
    }): Object;
}
