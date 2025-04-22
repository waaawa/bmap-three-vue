/**
 * 地形开挖
 * 注意：开挖高度计算使用的是射线法，因此开挖位置所在瓦片需要保证已经加载
 * ```js
 * const terrainClipPlane = engine.add(new mapvthree.TerrainClipPlan({
 *      terrain,
 *      bottomImg: 'bottom.png',
 *      wallImg: 'wall.png',
 * }));
 * // 开挖区域
 * terrainClipPlan.coveragePosition = [
 *      [11790542.978977421, 3427192.594080612, 0],
 *      [11791260.48396005, 3427927.6729757967, 0],
 *      [11791358.784855496, 3426989.130348856, 0],
 * ];
 * // 开挖
 * terrainClipPlan.updateData();
 * ```
 */
export class TerrainClipPlan {
    constructor(options?: {});
    _coveragePosition: any[];
    /** @private */ private _splitNum;
    /** @private */ private _bottomImg;
    /** @private */ private _wallImg;
    /** @private */ private _bottomPolygon;
    /** @private */ private _sideWall;
    /** @private */ private _multiClippingPlaneCollection;
    /** @private */ private _terrainHeight;
    /** @private */ private _dirty;
    /** @private */ private _dirtyList;
    afterAddToEngine(engine: any): void;
    _engine: any;
    _options: {};
    _terrain: any;
    _height: any;
    _isTerrainHeight: any;
    set coveragePosition(arg: any[]);
    /**
     * 开挖区域坐标
     * 计算平面距离需要墨卡托，统一转换为墨卡托坐标
     */
    get coveragePosition(): any[];
    updateData(): void;
    excavateMinHeight: any;
    _cutCoordinates: any;
    _cutTriangle: any;
    set dirty(arg: any);
    /**
     * 记录裁剪面坐标是否重更新，若未更新，不重新创建裁剪面
     */
    get dirty(): any;
    _updateExcavateMinHeight(positions: any): void;
    _clearMultiClippingPlane(): void;
    /**
     * 构建插值点坐标，底部坐标等
     */
    _prepareData(): void;
    set height(arg: any);
    /**
     * 开挖深度,默认相对于区域最低点
     */
    get height(): any;
    prepareData: {
        lerp_pos: any[][];
        bottom_pos: any[][];
        no_height_top: any[][];
    } | undefined;
    /**
     * 根据插值点等数据开挖
     */
    build(): void;
    excavateMaxHeight: any;
    lerpExcavateMinHeight: any;
    /**
     * 处理脏数据
     */
    _handleDirtyList(lerpPos: any): void;
    /**
     * @private
     * 构建底面
     */
    private _createBottomSurface;
    /**
     * @private
     * 构建侧边
     */
    private _createWall;
    /**
     * 判断是否为凹多边形
     * @vertexs 顶点数组
     */
    isConcavePoly(vertexs: any): boolean;
    isClockWise: (contour: any) => boolean;
    /**
     * 清除裁剪面以及侧面与底部的数据源
     */
    clear(): void;
    dispose(): void;
    set bottomImg(arg: any);
    /**
     * 底部贴图
     */
    get bottomImg(): any;
    set wallImg(arg: any);
    /**
     * 侧边贴图
     */
    get wallImg(): any;
    set isTerrainHeight(arg: any);
    get isTerrainHeight(): any;
    set terrainHeight(arg: any);
    get terrainHeight(): any;
    get length(): number;
    set terrain(arg: any);
}
