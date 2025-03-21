/**
 * 方量分析
 * ```js
 * const volumeLandAnalysis = engine.add(new mapvthree.VolumeLandAnalysis(engine), {
 *      terrain: terrain,
 * });
 * engine.add(volumeLandAnalysis);
 * // 分析区域，坐标为墨卡托坐标
 * const position = [
 *      [11791837.217680497, 3425121.4633757835],
 *      [11792294.189106291, 3425165.3429134428],
 *      [11792372.746473195, 3424776.079217815]
 * ]
 * volumeLandAnalysis.coveragePosition = position;
 * // 基准高度
 * volumeLandAnalysis.surfaceHeight = surfaceHeight;
 * volumeLandAnalysis.build();
 * // 获取方量分析结果
 * const {
 *      cutArea,
 *      cutVolume,
 *      fillAera,
 *      fillVolume
 * } = volumeLandAnalysis;
 * ```
 */
export class VolumeLandAnalysis {
    constructor(engine: any, options?: {});
    /** @private */ private _coveragePosition;
    /** @private */ private _surfaceHeight;
    /** @private */ private _interpolateNum;
    /** @private */ private _polygonPosition;
    /** @private */ private _cutArea;
    /** @private */ private _cutVolume;
    /** @private */ private _fillArea;
    /** @private */ private _fillVolume;
    /** @private */ private _terrain;
    /** @private */ private _terrainClipPlan;
    /** @private */ private _terrainClipPlanOpts;
    afterAddToEngine(engine: any): void;
    _engine: any;
    build(): void;
    /**
     * @private
     * 生成网格点
     */
    private _calcInterpolatePoints;
    /**
     * @private
     * 采样网格点高度
     */
    private _sampleGridHeights;
    /**
     * @private
     * 过滤不在多边形polygon中的三角形
     */
    private _filterGridList;
    /**
     * @private
     * 根据三角网计算填挖方面积/体积
     */
    private calcVolumeLand;
    /**
     * @private
     * 计算三角格网的顶点索引
     */
    private getGridIndex;
    /**
     * @private
     * 判断一个点是否在一个多边形内
     */
    private isInPolygon;
    clear(): void;
    set surfaceHeight(arg: number);
    /**
     * 开填挖基准高度
     */
    get surfaceHeight(): number;
    set coveragePosition(arg: any[]);
    get coveragePosition(): any[];
    set interpolateNum(arg: number);
    /**
     * 每行的插值数
     */
    get interpolateNum(): number;
    /**
     * 挖方面积
     */
    get cutArea(): number;
    /**
     * 挖方体积
     */
    get cutVolume(): number;
    /**
     * 填方面积
     */
    get fillArea(): number;
    /**
     * 填方体积
     */
    get fillVolume(): number;
}
