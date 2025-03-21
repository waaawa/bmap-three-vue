/**
 * 瓦片地图（扩展自Object3D）
 * @param {Object} args 参数
 * @param {Object} [args.mapLayer] MapLayer实例
 * @param {Object} [args.boundingBox] 最小包围盒
 */
export class MapTile {
    constructor(args: any);
    _level: number;
    url: string;
    mapLayer: any;
    boundingBox: any;
    boundingSphere: any;
    loaded: boolean;
    loading: boolean;
    childTiles: any[];
    parentTile: any;
    _geometryType: string;
    numGeometries: number;
    spacing: number;
    /**
     * 加载
     */
    load(): void;
    startLoadTime: number | undefined;
    /**
     * 加载几何体
     */
    loadGeometries(): void;
    /**
     * 是否已加载
     */
    isLoaded(): boolean;
    /**
     *
     */
    set _loaded(arg: boolean);
    /**
     *
     */
    get _loaded(): boolean;
    /**
     * 等级
     */
    set level(arg: number);
    /**
     * 等级
     */
    get level(): number;
    /**
     * 获取url
     * @returns {string} url
     */
    getUrl(): string;
    /**
     * 获取url
     * @returns {string} url
     */
    setUrl(url: any): string;
    name: string | undefined;
    fileType: string | undefined;
    /**
     * 获取子几何体
     * @returns {Array} 子几何体
     */
    getChildren(): any[];
    /**
     * 获取子瓦片
     * @returns {Array} 子瓦片
     */
    getChildTiles(): any[];
    /**
     * 获取子结合体个数
     * @returns {number} 子结合体个数
     */
    getNumGeometries(): number;
    /**
     * 添加子结合体个数
     * @param {Object} geometry 几何体
     */
    addGeometry(geometry: Object): void;
    /**
     * 移除子结合体个数
     * @param {Object} geometry 几何体
     */
    removeGeometry(geometry: Object): void;
    /**
     * 获取最小包围盒
     * @returns {Object} 最小包围盒
     */
    getBoundingBox(): Object;
    /**
     * 设置最小包围盒
     * @param {Object} box 最小包围盒
     */
    setBoundingBox(box: Object): void;
    /**
     * 获取最小包围球
     * @returns {Object} 最小包围球
     */
    getBoundingSphere(): Object;
    /**
     * 设置最小包围球
     * @param {Object} sphere 最小包围球
     */
    setBoundingSphere(sphere: Object): void;
    /**
     * 设置位置
     * @param {Object} position 位置
     */
    setPosition(position: Object): void;
    /**
     * 更新矩阵
     * @param {boolean} force 强制
     */
    updateMatrixWorld(force: boolean): void;
    matrixWorldNeedsUpdate: boolean | undefined;
    hideDescendants(): void;
    /**
     * 创建子瓦片
     * @returns {Array} 瓦片数组
     */
    createChildTiles(): any[];
    /**
     * 释放内存
     */
    dispose(): void;
    childrenTile: {} | undefined;
    children: any[] | undefined;
}
