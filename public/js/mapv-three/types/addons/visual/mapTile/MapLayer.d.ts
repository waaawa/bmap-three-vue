/**
 * 地图图层类（扩展自Object3D）
 * @param {Object} args 参数
 * @param {strign} [args.url] 网络地址
 * @param {number} [args.geometryBudget] 最大几何数
 * @param {Function} [args.initCallback] 初始化完成时的回调
 */
export class MapLayer {
    constructor(args: any);
    root: any[];
    boundingBox: any;
    center: any;
    url: any;
    loaded: boolean;
    spacing: number;
    style: any;
    _visible: boolean;
    minimumTilePixelSize: number;
    numVisibleGeometries: number;
    numVisibleTiles: number;
    visibleTiles: Map<any, any>;
    deepestVisibleLevel: number;
    maxVisibledLevel: number;
    geometryBudget: number;
    loader: MapTileLoader;
    initCallback: any;
    _geometryType: string;
    /** @private */
    private afterAddToEngine;
    _engine: any;
    isLoaded(): boolean;
    isInitialized(): boolean;
    initialized(): void;
    baseUri: any;
    initRootTile(data: any, level?: number): void;
    updateMatrixWorld(force: any): void;
    matrixWorldNeedsUpdate: boolean | undefined;
    nodesOnRay(nodes: any, ray: any): any[];
    getBoundingBoxWorld(): any;
    getTilesByName(name: any): any[];
    addTile(tile: any): void;
    removeTile(tile: any): void;
    setVisible(value: any): void;
    getVisible(): boolean;
    setStyle(style: any): void;
    getStyle(): any;
    update(): void;
    dispose(): void;
}
import { MapTileLoader } from "./MapTileLoader";
