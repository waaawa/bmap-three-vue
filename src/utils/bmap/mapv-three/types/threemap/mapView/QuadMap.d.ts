/**
 * 对外抛出`tileloaded`、`tileadd`、`tileremove`、`tiledispose`事件
 */
export class QuadMap {
    constructor(options?: {});
    isQuadMap: boolean;
    /**
     * @internal
     * 是否禁止瓦片更新
     */
    _freezeUpdate: boolean;
    /**
     * @internal
     * 细节层级缩放量
     */
    _lodScaleFactor: number;
    /**
     * @internal
     * 相机远端距离百分比，据此参数可以让tile加载部分视野，可提升性能
     */
    _cameraFarRatio: number;
    /**
     * @internal
     * 相机对象
     */
    _camera: any;
    /**
     * @internal
     * 上次瓦片更新的时间
     */
    _lastUpdateTime: number;
    /**
     * @internal
     * 瓦片更新的延时时间
     */
    _delayUpdateTime: number;
    /** @internal */ _delayUpdateTimeHandler: any;
    /**
     * @internal
     * 瓦片的限制边界，超出限制边界的瓦片不显示
     */
    _restrictedBounds: any[];
    /**
     * @internal
     * 是否展示用于调试的格网，默认的调试格网会在随机的背景色上展示格网的位置信息和层级信息
     */
    _showDebugGrid: boolean;
    /**
     * @internal
     * 调试瓦片加载器
     */
    _debugTileLoader: any;
    /**
     * @internal
     * 用于保存瓦片加载器，当进行瓦片加载器切换时，不用重新实例化一个瓦片加载器
     */
    _savedTileLoader: any;
    /**
     * @internal
     * 瓦片是否分层
     */
    _hirarchical: boolean;
    /**
     * @internal
     * 用于缓存瓦片的z层级
     */
    _zCache: {};
    /**
     * @internal
     * 最新显示的层级，理论上都有第0级，但其实有数据的层数不一样是0
     */
    _displayMinLevel: number;
    /**
     * @internal
     * 每帧渲染的瓦片
     */
    _renderedTiles: any[];
    _textureMaxLevel: number;
    /** @internal */ _engine: any;
    /** @internal */ _grid: any;
    /** @internal */ _options: {};
    /** @internal */ _tileGroup: any;
    /** @internal */ _gridMap: Map<any, any>;
    /** @internal */ _tileLoader: any;
    /** @internal */ _tileManager: TileManager;
    /** @internal */ _preprocessURL: any;
    statistics: {
        visited: number;
        selected: number;
        rendered: number;
    };
    /**
     * @protected
     * 创建瓦片加载器
    */
    protected createTileLoader(): void;
    /**
     * @protected
     */
    protected createGrid(engine: any): void;
    /**
     * @protected
     * 添加到engine中时创建瓦片加载器和格网
     */
    protected afterAddToEngine(engine: any): void;
    _baseZoomInfo: any;
    beforeRemoveFromEngine(engine: any): void;
    /**
     * @protected
     * 每次渲染前判断瓦片加载器是否准备好及能否更新瓦片，重新获取可见瓦片并刷新视图
     * @param {Engine} engine
     * @param {Object3D} scene
     * @param {Camera} camera
     * @param {object} renderState
     * @returns
     */
    protected onBeforeScenePrepareRender(engine: any, scene: any, camera: any, renderState: object): void;
    /**
     *
     * @param {*} camera
     * tan(fov/2)*distance/(screenHeight/2)=pixelSize
     */
    _updateCameraInfo: (engine: any, camera: any) => void;
    _sseDenominator: number | undefined;
    /**
     * @private
     * 重新计算可见的瓦片，刷新当前视图
     * @param { Engine } engine
     * @param { object } scene
     * @param { Camera } camera
     * @param { object } renderState
     */
    private _updateView;
    /**
     * 判断坐标点是否在包含在指定瓦片中
     */
    tileIfContainPoint(tile: any, point: any): any;
    /**
     * 获取指定坐标点与已渲染瓦片的相交瓦片
     */
    intersectTile(point: any): any;
    /**
     * @priavte
     * 范围和传入box范围相交的所有瓦片高度的范围
     * @param {Box2} box 传入的范围
     */
    _intersectHeightRange: (box: any) => number[];
    /**
     * @private
     * 重置渲染瓦片时统计的数据
     */
    private _resetStatistics;
    _isOverMaxLevel: (level: any) => boolean;
    /**
     * 计算当前瓦片的贴图tiles
     */
    _computeTextureTiles: (cameraPosition: any, tile: any, maxLevel: any, sourceTile?: any, exceedLevelTiles?: any[]) => any[] | undefined;
    _getLeafTiles: (tile: any, size?: number, xOffset?: number, yOffset?: number) => void;
    _computeParentTiles: (tile: any, targetLevel: any, sourceTile?: any, xOffset?: number, yOffset?: number) => any;
    /**
     * 计算瓦片中超出maxLevel的瓦片
     */
    _computeExceedLevelTiles: (tiles: any, requestChildTiles: any, selectedChildTiles: any) => void;
    getKeyByValue: (obj: any, value: any) => string | null;
    /**
     * @private
     * 从根瓦片出发，寻找在相机内可见的瓦片放入selectedTiles
     * @param {Camera} camera
     * @param {MapTile} rootTile
     * @param {MapTile[]} selectedTiles
     * @returns
     */
    private _computeVisibleTiles;
    /**
     * @private
     * 根据视椎体frustum和相机位置cameraPosition判断瓦片tile是否和视椎体相交并且在限制边界范围内，如果相交将其放入选中瓦片数组中selectedTiles
     * @param {Frustum} frustum 视椎体
     * @param {Vector3} cameraPosition 相机位置
     * @param {MapTile} tile 瓦片
     * @param {MapTiles[]} selectedTiles 选中的瓦片
     * @returns
     */
    private _computeIntersectTiles;
    _computeHirarchicalIntersectTiles: (frustum: any, cameraPosition: any, tile: any, selectedTiles: any, requestTiles: any) => true | undefined;
    /**
     * @internal
     * 当瓦片加载完成后，若为分层地图，保存其层级信息z
     * @param {Event} e
     */
    handleTileLoaded: (e: Event) => void;
    /**
     * @protected
     */
    protected handleTileDispose: (e: any) => void;
    /**
     * @protected
     */
    protected onTileAdded(tile: any): void;
    /**
     * @protected
     */
    protected onTileRemoved(tile: any): void;
    /**
     * @protected
     */
    protected onTileDisposed(tile: any): void;
    /**
     * 添加限制边界，超出该边界的瓦片不会显示
     * @param {Array} boundArray p1, p2
     */
    addRestrictedBoundingBox: (p1: any, p2: any) => any;
    /**
     * 移除限制边界
     * @param {Vector3} bound
     */
    removeRestrictedBounds: (bound: any) => void;
    /**
     * @private
     * 当showDebugGrid为true时，使用DebugTileloader作为瓦片加载器
     */
    private _updateDebugTileLoader;
    dispose(): void;
    set showDebugGrid(arg: boolean);
    /**
     * 是否展示调试格网，默认的调试格网会用随机的颜色显示该格网的位置和层级信息
     */
    get showDebugGrid(): boolean;
    set freezeUpdate(arg: boolean);
    /**
     * 是否允许瓦片更新
     */
    get freezeUpdate(): boolean;
    set lodScaleFactor(arg: number);
    /**
     * 细节层次缩放值
     */
    get lodScaleFactor(): number;
    /**
     * 瓦片管理器，用于管理瓦片，具有缓存瓦片和决定哪些瓦片用于展示等功能
     */
    get tileManager(): TileManager;
    /**
     * 获取瓦片加载器
     */
    get tileLoader(): any;
    set cameraFarRatio(arg: number);
    /**
     * 相机视椎体远端面距离百分比，通过该参数可以让tile加载部分视野
     */
    get cameraFarRatio(): number;
    set preprocessURL(arg: any);
    /**
     * 拦截处理请求url
     */
    get preprocessURL(): any;
}
import { TileManager } from "./geo/TileManager";
