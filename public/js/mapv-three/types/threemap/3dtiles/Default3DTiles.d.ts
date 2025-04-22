/**
 * 加载3DTiles
 *
 * 3DTiles必须为基于2.5D坐标系统，不支持Cesium的ECEF坐标系统切片
 *
 * boudingVolume支持sphere和box，不支持region
 */
export class Default3DTiles {
    /**
     * @param {{
     *     url: string,
     *     errorTarget: number,
     *     loadSiblings: boolean,
     *     displayActiveTiles: boolean,
     *     autoDisableRendererCulling: boolean,
     *     preprocessURL: function,
     *     fetchOptions: Object
     * }} options
     * @param {string} options.url 根节点的tileset.json文件地址
     * @param {number} options.errorTarget 控制LOD的屏幕误差
     * @param {boolean} options.loadSiblings 控制是否加载所有同级图块
     * @param {boolean} options.displayActiveTiles 控制是否渲染已加载但不一定可见的tiles
     * @param {boolean} options.autoDisableRendererCulling 控制是否关闭自动剔除
     * @param {function} options.preprocessURL 拦截处理请求url
     * @param {Object} options.fetchOptions fetchOptions
     */
    constructor(options: {
        url: string;
        errorTarget: number;
        loadSiblings: boolean;
        displayActiveTiles: boolean;
        autoDisableRendererCulling: boolean;
        preprocessURL: Function;
        fetchOptions: Object;
    });
    /** @private */
    private options;
    /** @private */
    private _tilesRenderer;
    /** @private */
    private _elementsManager;
    /** @private */
    private _elementsGroup;
    /** @private */
    private _editableElementManager;
    /** @private */
    private engine;
    /**
     * @private
     * 瓦片最大层级，以此计算LODlevel
    */
    private _tileMaxLevel;
    /**
     * @public @readonly
     *
     */
    public readonly is3DTiles: true;
    /** @private */
    private _materialManager;
    /** @private */
    private _debugTilesRenderer;
    /** @private */
    private _freezeUpdate;
    /** @private */
    private _excludeCastShadowMaterials;
    /** @private */
    private _instancedElementManager;
    /** @private */
    private _identityType;
    /** @private */
    private _visibile;
    /**
     * @private
     */
    private _loaders;
    /**
     * @protected
     */
    protected afterAddToEngine(engine: any): void;
    _engine: any;
    beforeRemoveFromEngine(engine: any): void;
    /**
     * 获取边界盒
     * @returns box array[]
     */
    getBounds(): any;
    /**
     * @private
     */
    private handleBeforeRender;
    /**
     * @private
     */
    private handleLoadTileSet;
    /**
     * @private
     */
    private handleUpdateModel;
    /**
     * @private
     */
    private parseTileInfo;
    /**
     * @private
     */
    private handleLoadModel;
    /**
     * @private
     */
    private handleDisposeModel;
    /**
     * @private
     */
    private handleTileVisibleChanged;
    /**
     * @private
     */
    private handleDebugBeforeengineRender;
    /**
     * @private
     */
    private _updateTilesCustomLoaders;
    /**
     * @private
     */
    private createDebugTilesRenderer;
    /**
     * @private
     */
    private handleDebugLoadTileSet;
    /**
     * @private
     */
    private handleDebugLoadModel;
    /**
     * 将ECEF坐标转换为平面坐标
     * @param {number} lng 经度
     * @param {number} lat 纬度
     * @param {number} height 高程
     */
    transformFromEcefToPlane: (lng: number, lat: number, height?: number) => void;
    /**
     * @private
     */
    private isEntityVisible;
    _updateCameraHelper(camera: any): void;
    _cameraHelper: any;
    _destoryCameraHelper(): void;
    lockCameraViewport: () => void;
    _lockedCamera: any;
    releaseCameraViewport: () => void;
    /**
     * 指定预加载瓦片的区域
     */
    preloadView: (viewOption: any) => void;
    /**
     * 移除预加载区域
     */
    removePreloadView: () => void;
    /**
     * @private
     */
    private destoryDebugTilesRenderer;
    /**
     * @private
     */
    private disposeTilesRender;
    dispose(): void;
    set checkIntersectByBox(arg: any);
    get checkIntersectByBox(): any;
    /**
     * 3dtiles的材质管理器，可以利用它来设置3dtiles的不同材质，如真实材质
     */
    set materialManager(arg: any);
    get materialManager(): any;
    /**
     * 是否展示debugTilesRenderer
     */
    set showDebug(arg: boolean);
    get showDebug(): boolean;
    /**
     * 瓦片渲染器的一种变体，包括了用于调试和可视化各种瓦片集中瓦片的能力
     */
    get debugTilesRenderer(): any;
    get elementsManager(): any;
    set freezeUpdate(arg: boolean);
    /**
     * 是否禁止3dtile更新
     */
    get freezeUpdate(): boolean;
    set errorTarget(arg: any);
    /**
     * 屏幕空间误差,如果瓦片的errorTarget低于这个级别，那么它将不会被渲染
     */
    get errorTarget(): any;
    /**
     * 瓦片的容器组，可以将它添加到three.js场景中渲染它
     */
    get tilesGroup(): any;
    /**
     * 渲染器，它是基于3d-tiles-renderer的TileRenderer实现的
     */
    get tilesRenderer(): any;
    get instancedElementManager(): any;
    /**
     * 编辑管理器，可以使用它来批量添加或删除元素
     */
    get editableElementManager(): any;
    set identityType(arg: number);
    /**
     * 若当前3dtilesManager为的材质为Identity3DTilesMaterialManager，可以通过identityType来得到不同的材质
     */
    get identityType(): number;
    set loadSiblings(arg: any);
    /**
     * 加载所有同级图块，以确保移动相机时的连贯性
     */
    get loadSiblings(): any;
    set displayActiveTiles(arg: any);
    /**
     * 使相机视锥体中不可见但已加载的tiles保持在场景中
     */
    get displayActiveTiles(): any;
    set autoDisableRendererCulling(arg: any);
    /**
     * 关闭自动剔除
     */
    get autoDisableRendererCulling(): any;
    set preprocessURL(arg: any);
    get preprocessURL(): any;
    set errorThreshold(arg: any);
    get errorThreshold(): any;
    set maxDepth(arg: any);
    get maxDepth(): any;
    set enabledSchedule(arg: any);
    /**
     * 是否开启调度加载，优先加载距离相机近的瓦片
     */
    get enabledSchedule(): any;
    set cacheDepth(arg: any);
    get cacheDepth(): any;
    set maxCacheChildren(arg: any);
    get maxCacheChildren(): any;
    set deferLoadDepth(arg: any);
    get deferLoadDepth(): any;
    set deferOutSideFrustum(arg: any);
    /**
     * 是否延迟加载不在谁锥体内的瓦片
     */
    get deferOutSideFrustum(): any;
    set cullWithChildrenBounds(arg: any);
    /**
     * 是否使用子瓦片的包围盒用于裁剪
     */
    get cullWithChildrenBounds(): any;
    set cullRequestsWhileMoving(arg: any);
    /**
     * 移动裁剪，快速移动时瓦片停留时间太短可以不加载
     */
    get cullRequestsWhileMoving(): any;
    set cullRequestsWhileMovingMultiplier(arg: any);
    get cullRequestsWhileMovingMultiplier(): any;
    set dynamicScreenSpaceError(arg: any);
    /**
     * 是否开启动态屏幕空间误差，较远的贴图将呈现较低的细节的贴图。这样可以通过渲染更少的图块和发出更少的请求来提高性能
     */
    get dynamicScreenSpaceError(): any;
    set dynamicScreenSpaceErrorFactor(arg: any);
    /**
     * 动态屏幕空间错误因子。随着这个值的增加，渲染所需的贴图会越来越少，距离中的贴图细节也会越来越少。如果设置为零，该功能将被禁用。
     */
    get dynamicScreenSpaceErrorFactor(): any;
    set dynamicScreenSpaceErrorHeightFalloff(arg: any);
    /**
     * 如果相机低于此高度，则直接应用计算密度，否则密度下降
     */
    get dynamicScreenSpaceErrorHeightFalloff(): any;
    set dynamicScreenHeightScale(arg: any);
    /**
     * 用于扩大影响的密度的相机高度范围
     */
    get dynamicScreenHeightScale(): any;
    set dynamicScreenSpaceErrorDensity(arg: any);
    /**
     * 密度
     */
    get dynamicScreenSpaceErrorDensity(): any;
    set foveatedScreenSpaceError(arg: any);
    /**
     * 屏幕中心的瓦片优先
     */
    get foveatedScreenSpaceError(): any;
    set foveatedConeSize(arg: any);
    /**
     * 用于控制锥体大小，决定哪些贴图被延迟。位于这个圆锥体内的瓷砖会立即加载。圆锥体外的贴图可能会被延迟
     */
    get foveatedConeSize(): any;
    set visible(arg: boolean);
    get visible(): boolean;
}
