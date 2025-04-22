/**
 * 抽象地图类, 为地图管理器，可通过该类操控地图状态<br />
 * 该类会随[[Engine]]的初始化自动实例化，通常不需要开发者手动执行初始化调用，支持三维场景建立于[空白地图]或[百度地图]等之上,可以对地图进行访问配置
 * ```javascript
 * engine.map.setCenter(center);
 * engine.map.setZoom(14);
 * ```
 */
export class EngineMap {
    constructor(engine: any, options?: {});
    /** @private */ private _engine;
    /** @private */ private _map;
    /** @private */ private _container;
    /** @private */ private _mapType;
    /** @internal */
    init(): void;
    /** @internal */
    afterInit(): void;
    /** @internal */
    handleViewChange: () => void;
    /** @internal */
    handleResolutionChange: (resolution: any) => void;
    /**
     * 设置地图中心点
     * @param {Array<number>} center 中心点坐标
     */
    setCenter(center: Array<number>): void;
    /**
     * 设置地图缩放级别
     * @param {number} zoom 缩放级别
     */
    setZoom(zoom: number): void;
    /**
     * 设置地图选转角度
     * @param {number} heading 选转角度
     */
    setHeading(heading: number): void;
    /**
     * 设置地图倾斜角度
     * @param {number} pitch 倾斜角度
     */
    setPitch(pitch: number): void;
    /**
     * 设置地图可拖动视野区域
     * @param {Array} bounds 区域的坐标，左下、右上的做标数组[sw, ne]
     */
    setBounds(bounds: any[]): void;
    /**
     * 锁定地图拖拽
     * @param {*} status 状态
     */
    lockDrag(status: any): void;
    /**
     * 设置3d地图最远视距
     * @param {number} range 距离
     */
    setMaxRange(range: number): void;
    /**
     * 设置地图视野
     * @param {Array | Vector3} target 目标视野中心点
     * @param {Object} offset 视野角度，包括 heading、pitch，其中3d支持range、2d支持zoom
     */
    lookAt(target: any[] | any, offset?: Object): void;
    /**
     * 获取地图的视野区域
     * @returns
     */
    getBoundingBox(): any;
    /**
     * 获取地图当前中心点
     */
    getCenter(): any[];
    getCenter2D(): any;
    /**
     * 获取地图当前缩放级别
     */
    getZoom(): any;
    /**
     * 获取地图当前缩放级别下，1像素对应多少墨卡托单位
     */
    getZoomUnits(): any;
    /**
     * 根据传入zoomUnits值计算合适的缩放级别
     */
    getZoomByZoomUnits(zoomUnits: any): number;
    /**
     * 根据传入缩放级别计算合适的ZoomUnits值
     */
    getZoomUnitsByZoom(zoom: any): any;
    /**
     * 获取地图当前旋转角度
     */
    getHeading(): any;
    /**
     * 获取地图当前倾斜角度
     */
    getPitch(): any;
    /**
     * 获取地图当前中心点的投影坐标
     */
    getProjectionCenter(): any[];
    getProjectionCenter2D(): any;
    /**
     * 获取地图当前相机到地面的距离
     */
    getCameraDistance(): any;
    /**
     * 获取地图当前容器的长度和宽度
     */
    getResolution(): any;
    /**
     * 按照当前投影方式，将输入坐标转为投影坐标
     * @param {Array<number>} input 输入坐标
     */
    projectPointArr(input: Array<number>): any;
    /**
     * 将传入的墨卡托坐标转换为wgs84坐标
     * @param {string | Array} input
     */
    unprojectPointArr(input: string | any[]): any;
    projectCoordinates(input: any): any;
    /**
     * 开启地图控制，允许用户拖动、平移、旋转等操作
     */
    enableControl(): void;
    /**
     * 关闭地图控制
     */
    disableControl(): void;
    /**
     * 更新地图相机
     */
    updateCamera(): void;
    getScaleAt(point: any): number;
    /**
     * 视野推进放大
     */
    zoomIn(): void;
    /**
     * 视野拉远缩小
     */
    zoomOut(): void;
    /**
     * 将地图缩放至object对象上
     * @param {Object3D} object
     * @param {Object} options
     * @returns
     */
    zoomTo(object: any, options?: Object): void;
    bindCanvas(): void;
    releaseCanvas(): void;
    /**
     * 销毁地图实例，移除其绑定事件
     */
    dispose(): void;
    /**
     * 设置分辨率改变时的回调函数
     */
    set onResolutionChanged(arg: any);
    /**
     * 获取地图当前投影方式
     */
    get projectionCoordsName(): string;
    /**
     * 获取地图实例
     */
    get map(): BlankBD09Map | BlankMap3DControl | BlankMap | BlankUTMMap | BaiduMap | MapboxMap;
    /**
     * 获取地图类型
     */
    get mapType(): string | undefined;
    /**
     * 获取map的dom容器
     */
    get container(): any;
    /**
     * 获取地图视野开角
     */
    get fov(): number;
    /**
     * 获取地图近裁面距离
     */
    get near(): number;
    /**
     * 获取地图远裁面距离
     */
    get far(): number;
}
import { BlankBD09Map } from "./map/BlankBD09Map";
import { BlankMap3DControl } from "./map/BlankMap3DControl";
import { BlankMap } from "./map/BlankMap";
import { BlankUTMMap } from "./map/BlankUTMMap";
import { BaiduMap } from "./map/BaiduMap";
import { MapboxMap } from "./map/MapboxMap";
