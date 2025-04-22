/** @protected */
export class GeoObject extends ThreeObject {
    /**
     * @readonly
     * 类型为GeoObject的标识
     */
    readonly isGeoObject: true;
    /**
     * 是否自动更新渲染数据
     * 默认为TRUE，如果需要手动管理数据的更新则需要置为FALSE
     */
    dataAutoUpdate: boolean;
    /** @private */ private _parameters;
    /** @private */ private _dataSource;
    /** @private */ private _dataSourceUpdated;
    /** @private */ private _needsUpdate;
    /** @private */ private _zooms;
    /** @private */ private _zoomVisibleCache;
    /** @protected */ protected engine: any;
    /** @private */ private _clampToGround;
    /** @private */ private _renderMaterialOptions;
    /** @private */ private _backMaterialOptions;
    /** @private */ private _frontMaterialOptions;
    /** @private */ private _terrain;
    /** @private */ private _backObject;
    /** @private */ private _frontObject;
    /** @private */ private _renderObject;
    /** @protected */ protected _VolumeClass: any;
    /** @protected */ protected _volumeDataSource: BufferDataSource;
    /** @protected */
    set parameters(arg: any);
    /**
     * object的传入参数
     */
    get parameters(): any;
    /**
     * 设置object的数据源
     * @param {DataSource} dataSource 数据源
     */
    set dataSource(arg: any);
    /** object连接的数据源[[DataSource]]类 */
    get dataSource(): any;
    /**
     * 设置object是否在下一帧更新
     * @param {boolean} value 设置为true，则下一帧渲染前更新该object
     */
    set needsUpdate(arg: boolean);
    /**
     * 是否需要更新
     */
    get needsUpdate(): boolean;
    /**
     * 设置显示object的zoom级别范围
     * @param {Array} value 级别范围数组
     */
    set zooms(arg: any[]);
    /**
     * 显示object的zoom级别范围
     */
    get zooms(): any[];
    /**
     * 当前zoom级别是否在zooms设定的显示级别范围内
     */
    get inZoomsRange(): boolean;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    /**
     * @internal
     */
    beforeRemoveFromEngine(engine: any): void;
    /**
     * @protected
     */
    protected initObject(): void;
    /** @protected */
    protected getDefaultParams(): {};
    /**
     * @protected
     * 通过index获取该index对应的数据源的实体信息entity，entity中包括数据索引、
     * 索引对应的原始数据和经过解析之后的数据
     * @param {number} index
     * @returns {object}
     */
    protected getEntityByIndex(index: number): object;
    /**
     * @internal
     */
    setDataSource(dataSource: any): void;
    /**
     * @internal
     */
    onBeforeScenePrepareRender(engine: any, scene: any, camera: any, renderState: any): void;
    /**
     * @internal
     */
    onBeforeSceneRender(engine: any, scene: any, camera: any, renderState: any): void;
    _collisionUpdated: boolean | undefined;
    visible: any;
    /**
     * object接入数据的入口
     * @internal
     */
    setData(): void;
    /**
     * object元素碰撞检测时计算自身尺寸的方法
     * @protected
     */
    protected collisionTest(data: any): {};
    /**
     * 生成阴影体的数据源
     * @internal
     */
    createVolumeDataSource(): any;
    /**
     * @private
     * 指定阴影体的mesh class
     */
    private specifiedVolumeClass;
    /**
     * @private
     */
    private filterVolumeParamter;
    /**
     * @internal
     */
    getGeoFeatures: (data: any, dontProject?: boolean) => any;
    /**
     * @internal
     */
    travelFeatureLineCoordinate: (feature: any, coordinateName: any, callback: any) => void;
    /**
     * @internal
     * 遍历线型边界， [[x1, y1],[x2, y2], ...]
     */
    travelLineCoordinates: (features: any, coordinateName: string | undefined, callback: any, offsetIndex?: number) => void;
    /**
     * @internal
     * 遍历多边形边界， [[[x1, y1],[x2, y2], ...],...]
     */
    travelPolygonCoordinates: (features: any, coordinateName: string | undefined, callback: any, offsetIndex?: number) => void;
    /**
     * @internal
     * 遍历点， [x1, y1]
     */
    travelPointCoordinates: (features: any, coordinateName: string | undefined, callback: any, offsetIndex?: number) => void;
    /**
     * @internal
     */
    getPointsBounding: (features: any, coordinateName?: string) => number[];
    /**
     * dispose时调用该函数，执行节点在object上的geometry和material实例销毁之后
     */
    onDispose(): void;
    /**
     * 销毁object上的geometry和material实例，释放资源
     */
    dispose(): void;
    bindTerrain(terrain: any): void;
    initMaterialOptions(): void;
    /**
     * @private
     * 创建阴影体
     */
    private getShadowVolumeOptions;
    set clampToGround(arg: any);
    get clampToGround(): any;
}
import { ThreeObject } from "./ThreeObject";
import { BufferDataSource } from "../../threemap/dataSource/BufferDataSource";
