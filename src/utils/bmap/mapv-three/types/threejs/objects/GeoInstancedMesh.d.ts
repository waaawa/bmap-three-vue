/**
 * GeoInstancedMesh可以用来渲染大量具有相同几何体与材质、但具有不同世界变化的物体，
 * 它能够帮你减少draw call的数量，提升应用程序的整体性能
 * ```js
 * // 创建一个实例化格网
 * const instancedMesh = engine.add(new mapvthree.GeoInstancedMesh(geometry, material));
 * // 传入数据源
 * mapvthree.GeoJSONDataSource.fromGeoJSON(randomPoints(center, 0.05, 1000)).then(data => {
 *    instancedMesh.dataSource = data;
 * });
 * ```
 */
export class GeoInstancedMesh extends GeoObject {
    /**
     * 实例化网格构造函数
     * @param {BufferGeometry} geometry 一个BufferGeometry实例
     * @param {Material} material 一个Material实例
     */
    constructor(geometry: any, material: any);
    /** @protected */ protected type: string;
    /** @protected */ protected isMesh: boolean;
    /** @protected */ protected isInstancedMesh: boolean;
    /** @protected */ protected frustumCulled: boolean;
    /** @protected */ protected instanceColor: any;
    /** @protected */ protected count: number;
    /** @protected */ protected instanceMatrix: any;
    /** @private */ private _enableInstanceColor;
    /** @private */
    private instanceMorphMatrix;
    /**
     * 是否支持返回的事件参数中携带entity实体数据
     */
    isEventEntitySupported: boolean;
    boundingBox: any;
    boundingSphere: any;
    geometry: any;
    material: any;
    set enableInstanceColor(arg: boolean);
    get enableInstanceColor(): boolean;
    /**
     * @internal
     * 计算模型本地变换矩阵
     */
    getInstanceLocalMatrix: (coordinates: any, feature: any, index: any) => null;
    /** @protected */
    protected addCustomAttributes: () => void;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    getMatrixAt(index: any, matrix: any): void;
    /**
     * @internal
     * 通过material上的size, height, zoomUnits等属性计算实例的变形矩阵
     */
    computeInstanceMorphMatrix(): void;
}
import { GeoObject } from "./GeoObject";
