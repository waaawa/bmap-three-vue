/**
 * 通视分析
 * ```js
 * const sightline = engine.add(new mapvthree.SightLine());
 * // 添加观察点(墨卡托坐标)
 * sightline.viewPosition = position;
 * // 添加目标点
 * sightline.addTargetPoint({
 *     position: targetPosition,
 * });
 * // 开始通视分析
 * sightline.build();
 * ```
 */
export class SightLine {
    /** @private */ private _viewPoistion; /** 观察点 */
    /** @private */ private _targetPositions; /** 目标点 */
    /** @private */ private _occlusionPoints; /** 遮挡点 */
    /** @private */ private _raycaster;
    /** @private */ private _tempModelViewMatrix;
    /** @private */ private _visibleLine; /** 可视区域的线 */
    /** @private */ private _invisibleLine; /** 不可视区域的线 */
    /** @private */ private _visibleDataSource;
    /** @private */ private _invisibleDataSource;
    /** @private */ private _distanceBias; /** 距离偏差 */
    /** @private */ private _visibleColor;
    /** @private */ private _invisibleColor;
    afterAddToEngine(engine: any): void;
    _engine: any;
    destroy(): void;
    addTargetPoint(targetPoint: any): void;
    removeTargetPoint(nameOrIndex: any): void;
    removeAllTargetPoint(): void;
    /**
     * @private
     * 根据坐标数组构造一份LineString类型的GeoJSON数据
     */
    private buildGeoJSON;
    /**
     * @private
     * 传入世界坐标转换为屏幕坐标
     */
    private convertToScreenCoord;
    /**
     * 根据viewPosition和targetPositions进行通视分析
     */
    build(): void;
    set viewPosition(arg: any);
    /**
     * 观察点坐标
     */
    get viewPosition(): any;
    set visibleColor(arg: string);
    /**
     * 可见区颜色
     */
    get visibleColor(): string;
    set invisibleColor(arg: string);
    /**
     * 不可见区颜色
     */
    get invisibleColor(): string;
}
