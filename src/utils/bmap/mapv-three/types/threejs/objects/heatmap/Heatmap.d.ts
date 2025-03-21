/**
 * 2D热力图，平面热力图，立体热力图见[[Heatmap3D]]
 * ```js
 * const heatmap = engine.add(new mapvthree.Heatmap());
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * heatmap.dataSource = data;
 * ```
 * ![](media://heatmap.png)
 */
export class Heatmap extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * gradient?: object, opacity?: number, minValue?: number, maxValue?: number, radius?: number,
     * keepSize?: boolean, attenuateMValueFactor?: number
     * }} parameters 传入参数对象
     * @param {object} parameters.gradient 热力渐变颜色配置，格式为{stop: 'color'}，例如{0.4: 'blue', 0.65: 'lime', 1: 'red'}
     * @param {number} parameters.opacity 透明度整体系数，默认1
     * @param {number} parameters.minValue 最小热力值，默认0
     * @param {number} parameters.maxValue 最大热力值，默认100
     * @param {number} parameters.radius 热力绘制半径，默认30
     * @param {boolean} parameters.keepSize 是否保持大小（即按像素为单位绘制）
     * @param {boolean} parameters.attenuateMValueFactor 径向渐变速度，默认0
     */
    constructor(parameters: {
        gradient?: object;
        opacity?: number;
        minValue?: number;
        maxValue?: number;
        radius?: number;
        keepSize?: boolean;
        attenuateMValueFactor?: number;
    });
    /** @protected */ protected isHeatmap: boolean;
    /** @protected */ protected frustumCulled: boolean;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** @private */ private scene;
    /** @private */ private pointMesh;
    /** @private */ private pointMaterial;
    /** @private */ private pointGeometry;
    /** @private */ private renderTarget;
    /** @private */ private depthMaterial;
    /** @private */ private depthRenderTarget;
    /**
     * 热力渐变颜色配置，格式为{stop: 'color'}，例如{0.4: 'blue', 0.65: 'lime', 1: 'red'}
     */
    set gradient(arg: any);
    /**
     * 热力绘制半径
     */
    set radius(arg: any);
    get radius(): any;
    /**
     * 最小热力值
     */
    set minValue(arg: any);
    get minValue(): any;
    /**
     * 最大热力值
     */
    set maxValue(arg: any);
    get maxValue(): any;
    /**
     * 透明度整体系数
     */
    set opacity(arg: any);
    get opacity(): any;
    /**
     * 是否保持大小（即按像素为单位绘制）
     */
    set keepSize(arg: any);
    get keepSize(): any;
    /**
     * 径向渐变速度
     */
    set attenuateMValueFactor(arg: any);
    /** @internal */
    onBeforeSceneRenderHook(engine: any, scene: any, camera: any, renderState: any): void;
}
import { GeoMesh } from "../GeoMesh";
