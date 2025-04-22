/**
 *  获取拉伸后的几何
 * @param { Obejct } polygon 多边形数据
 * @param { number} height 高度
 * @param { Obejct } center 中心点
 * @returns {Object} bufferGeometry
 */
export function getExtrudeGeometry(polygon: any, height: number, center: any): Object;
/**
 * 依据多边形和高度，中心点，获取拉伸后的数据
 * @param {Object} polygon 多边形
 * @param {number} height  高度
 * @param {Object} center 中线点
 * @returns {Object} 拉伸多边形的参数
 */
export function getExtrudeGeometryParams(polygon: Object, height: number, center: Object, { needsOutline, top, bottom, side }: {
    needsOutline: any;
    top: any;
    bottom: any;
    side: any;
}): Object;
/**
 * 依据线数据和深度，中心点，获取拉伸后的数据
 * @param {Object} polyline 线
 * @param {number} depth  深度
 * @param {Object} center 中线点
 * @param {Object} space 使geojson文件内所有图形的贴图保持等比例大小，默认10000
 * @returns {Object} 拉伸多边形的参数
 */
export function getExtrudePolylineGeometryParams(polyline: Object, direction: any, depth: number, center: Object, { topColor, bottomColor }: {
    topColor: any;
    bottomColor: any;
}, space: Object): Object;
/**
 * 初始化点颜色
 * @param { Object } geometry 几何
 * @param {Object} color 颜色
 * @param {Object} topColor 顶部的颜色
 * @param {boolean} upOrDown 标识赋值的颜色位置
 * @returns {Array} 点颜色数组
 */
export function initVertexColors(geometry: Object, color: Object, topColor: Object, upOrDown: boolean): any[];
/**
 * 同时存在贴图和顶点颜色的时候处理办法
 * @param { Object } bufferGeomertry 几何
 * @param {Object} topColor 顶部的颜色
 * @returns {Object}  tmpBufferGeometry
 *
 */
export function changeUVAndVertecColors(bufferGeometry: any, topColor: Object, bottomColor: any, isUv?: boolean): Object;
/**
 * 获取中心点
 * @param {Array} coordinates 点坐标数组
 * @returns {Object} 中线点
 */
export function getCenterOfPoints(coordinates?: any[]): Object;
/**
 * 获取线的位置数组
 * @param {Object} polyline 线数据
 * @param {Object} center 中线点
 * @returns {Array} 位置数组
 */
export function getPolylinePositions(polyline: Object, center: Object): any[];
/**
 * 获取多边形的位置数组
 * @param {Object} polygon 多边形数据
 * @param {Object} center 中线点
 * @param {boolean} isArrayBuff 是否是buffer
 * @returns {Array} 位置数组
 */
export function getPolygonPositions(polygon: Object, center: Object, isArrayBuff?: boolean): any[];
/**
 * 获取单个多边形的位置数组
 * @param {Object} polyline 线数据
 * @param {Object} center 中线点
 * @returns {Array} 位置数组
 */
export function getSinglePolylinePositions(polyline: Object, center: Object): any[];
/**
 * 获取单个多边形的位置数组
 * @param {Object} polygon 多边形数据
 * @param {Object} center 中线点
 * @param {boolean} isArrayBuff 是否是buffer
 * @returns {Array} 位置数组
 */
export function getSinglePolygonPositions(polygon: Object, center: Object, isArrayBuff?: boolean): any[];
/**
 * 计算两个点之间的距离
 * @param {Array} point1 点 [x,y]
 * @param {Array} point2  点 [x,y]
 */
export function computeDistance(point1: any[], point2: any[]): number;
