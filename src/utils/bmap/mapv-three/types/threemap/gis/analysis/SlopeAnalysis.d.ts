/**
 * 坡度分析
 * ```js
 * // 初始化
 * const slopeAnalysis = new mapvthree.SlopeAnalysis();
 * // 绑定地形
 * slopeAnalysis.bindTerrain(terrain);
 * // 添加颜色分级
 * slopeAnalysis.setColorStop({
 *     0.5: 'rgb(85,182,43)',
 *     2: 'rgb(135,211,43',
 *     5: 'rgb(204,244,44',
 *     15: 'rgb(245,233,44',
 *     35: 'rgb(255,138,43',
 *     55: 'rgb(255,84,43',
 *     90: 'rgb(255,32,43',
 * }));
 * // 开启坡度分析
 * slopeAnalysis.enabled = true;
 * // 指定坡度分析区域
 * this._slopeAnalsis.coverageArea = [
 *     [11784358.577629654, 3428780.5980476816, 0],
 *     [11794377.770655354, 3439108.0721344748, 0],
 *     [11797801.698959356, 3424101.3842805387, 0],
 *     [11790406.650398718, 3421790.6811827198, 0],
 * ];
 * // 开始坡度分析
 * slopeAnalysis.build();
 * ```
 */
export class SlopeAnalysis {
    /** @private */ private _coverageArea; /** 坡度分析范围，为位置数组，若不指定则计算全局坡度 */
    /** @private */ private _slopeMap; /** 坡度颜色纹理 */
    /** @private */ private _maxSlope;
    /** @private */ private _minSlope;
    /** @private */ private _enabled;
    /** @private */ private _terrain;
    /** @private */ private _coverageClippingPlanes;
    /** @private */
    private _defaultColorStop;
    /** @private */
    private afterAddToEngine;
    _engine: any;
    set minSlope(arg: number);
    get minSlope(): number;
    set maxSlope(arg: number);
    get maxSlope(): number;
    bindTerrain: (terrain: any) => void;
    /**
     * 设置颜色分段信息
     * @param {object} colorStop 颜色分段信息
     * key值为坡度大小, 0-90
     * value为颜色值
     */
    setColorStop(colorStop: object): void;
    /**
     * 开始坡度分析
     */
    build(): void;
    _update: () => void;
    _updateShader: (material: any) => void;
    /** @private */
    private _updateUniforms;
    /** @private */
    private isConcavePoly;
    /** @private */
    private isClockWise;
    /**
     * 结束坡度分析
     */
    close(): void;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set coverageArea(arg: any[]);
    /**
     * 局部坡度分析范围
     */
    get coverageArea(): any[];
}
