/**
 * 可视域分析
 * ```js
 * const viewshed = engine.add(new mapvthree.ViewShedAnalysis());
 * // 观察点
 * viewshed.viewPosition = new Vector3(...viewPosition);
 * viewshed.targetPosition = new Vector3(...targetPosition);
 * // 开始分析
 * viewshed.build();
 * ```
 */
export class ViewShedAnalysis {
    /** @private */ private _distance;
    /** @private */ private _isAutoDistance;
    /** @private */ private _viewPosition;
    /** @private */ private _targetPosition;
    /** @private */ private _visibleColor;
    /** @private */ private _invisibleColor;
    /** @private */ private _camera;
    /** @private */ private _fov;
    afterAddToEngine(engine: any): void;
    _engine: any;
    set visibleColor(arg: number);
    get visibleColor(): number;
    set invisibleColor(arg: number);
    get invisibleColor(): number;
    _depthTarget: any;
    /**
     * @private
     * 根据光源相机创建深度图
     */
    private createDepth;
    /**
     * @private
     * 创建视锥体线框
     */
    private createOutlineFrustum;
    /**
     * @private
     * 计算可见性shader
     */
    private createShadowMapGLSL;
    /**
     * @private
     */
    private _updateUniforms;
    /**
     * 开始可视域分析
     */
    build(): void;
    _outlineFrustum: any;
    _viewshedPass: any;
    /**
     * 关闭可视域分析
     */
    close(): void;
    set viewPosition(arg: any);
    /**
     * 可视域分析起点
     */
    get viewPosition(): any;
    set targetPosition(arg: any);
    /**
     * 可视域分析终点
     */
    get targetPosition(): any;
    set distance(arg: any);
    get distance(): any;
    set fov(arg: number);
    get fov(): number;
}
