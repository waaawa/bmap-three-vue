export class TileManager {
    static TILE_DISPLAY_AFTER_ALL_SIBLINGS_READY: number;
    static TILE_DISPLAY_AFTER_ANY_SIBLINGS_READY: number;
    constructor(group: any, parameters?: {});
    _maxCacheSize: number;
    _maxDisplaySize: number;
    _displayTileAfterAllSiblingsReady: boolean;
    _displayParentTileWhileNotAllSiblingsReady: boolean;
    _cachedTiles: any;
    _delayedTiles: {};
    _requestingKeys: Set<any>;
    _delayedTileTTL: number;
    _tileLoadDelayTime: number;
    _upwardsSteps: number;
    _maxParallelRequests: number;
    _currentParallelRequests: number;
    tileLoader: any;
    _group: any;
    handleTileRemove: (tile: any, key: any) => void;
    /**
     * 使用指定的瓦片刷新当前视图
     * @param {*} tiles
     */
    refresh(tileTree: any, selectedTiles: any, camera: any): {
        renderedTiles: any[];
        hasDelayedTile: boolean;
        delayCount: number;
        createCount: number;
    };
    _checkLoadedParentTile: (tile: any, tileTree: any, renderedTilesMap: any) => any;
    _checkAnyChildReady: (tile: any) => true | undefined;
    _markTileChildrenSkipped: (tile: any, renderedTilesMap: any) => void;
    _scheduleChildTile: (tile: any, sourceTile: any) => Promise<void>;
    _scheduleTile: (tile: any) => Promise<void>;
    requestChildTiles: (childTiles: any) => Promise<void>;
    requestTiles: (tiles: any) => void;
    /**
     * 清理延时队列中的瓦片
     */
    _cleanDelayedTiles: () => void;
    isTileLoading: (key: any) => boolean;
    getCachedTile: (key: any) => any;
    clear(): void;
    dispose(): void;
    set maxDisplaySize(arg: number);
    get maxDisplaySize(): number;
    set maxCacheSize(arg: any);
    get maxCacheSize(): any;
    set maxCacheAge(arg: any);
    get maxCacheAge(): any;
    set displayTileAfterAllSiblingsReady(arg: boolean);
    get displayTileAfterAllSiblingsReady(): boolean;
    set displayParentTileWhileNotAllSiblingsReady(arg: boolean);
    get displayParentTileWhileNotAllSiblingsReady(): boolean;
}
