/**
 * 淹没分析
 * ```js
 * const floodAnalysis = engine.add(new mapvthree.FloodAnalysis());
 * // 淹没分析区域
 * floodAnalysis.dataSource = mapvthree.GeoJSONDataSource.fromGeoJSONObject([
 *     {
 *          geometry: {
 *              type: 'Polygon',
 *              coordinates: polygonCoords,
 *          }
 *     },
 * ]);
 * // 最大淹没高度
 * floodAnalysis.maxVisibleValue = 450;
 * // 最小淹没高度
 * floodAnalysis.minVisibleValue = 250;
 * // 淹没速度
 * floodAnalysis.floodSpeed = 50;
 * // 开启淹没分析
 * floodAnalysis.enabled = true;
 * ```
 */
export class FloodAnalysis {
    /** @private */ private _coverageArea; /** 淹没分析覆盖区域 */
    /** @private */ private _currentHeight; /** 当前淹没高度 */
    /** @private */ private _floodSpeed; /** 淹没速度 */
    /** @private */ private _maxVisibleValue; /** 最大淹没高度 */
    /** @private */ private _minVisibleValue; /** 最小淹没高度 */
    /** @private */ private _dataSource;
    /** @private */ private _enabled;
    /** @private */ private _floodPolygon;
    /** @private */ private _floodState;
    /** @private */ private _color;
    /** @private */ private _opacity;
    afterAddToEngine(engine: any): void;
    _engine: any;
    /**
     * 淹没回调
     * 用于支持polygon拉伸和分层设色两种方式
     */
    floodCallback(): void;
    _startFlood: () => void;
    destroy(): void;
    reset(): void;
    set color(arg: string);
    /**
     * 淹没区颜色
     */
    get color(): string;
    set opacity(arg: number);
    /**
     * 淹没区透明度
     */
    get opacity(): number;
    set dataSource(arg: any);
    /**
     * 淹没区域范围，类型为面类型的DataSource对象
     */
    get dataSource(): any;
    set maxVisibleValue(arg: number);
    /**
     * 最大淹没值
     */
    get maxVisibleValue(): number;
    set minVisibleValue(arg: number);
    /**
     * 最小淹没值
     */
    get minVisibleValue(): number;
    set floodSpeed(arg: number);
    /**
     * 淹没速度
     */
    get floodSpeed(): number;
    get floodState(): any;
    set enabled(arg: boolean);
    get enabled(): boolean;
}
