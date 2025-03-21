export function ceilPowerOfTwo(value: any): number;
export function floorPowerOfTwo(value: any): number;
/**
 * 计算线坐标串是否首闭合
 * @param {Array<number>} linestring 线坐标串
 */
export function isClosed(linestring: Array<number>): boolean;
/**
 * 计算两点坐标是否相同
 * @param {Array<number>} p1 起点
 * @param {Array<number>} p2 终点
 * @param {number} threshold js计算偏差的误差值
 */
export function isPointEqual(p1: Array<number>, p2: Array<number>, threshold?: number): boolean;
/**
 * 计算两坐标点在三维空间中的距离
 * @param {Array<number>} p1 起点
 * @param {Array<number>} p2 终点
 */
export function getDistance(p1: Array<number>, p2: Array<number>): number;
/**
 * 计算两坐标点在XY平面投影的距离
 * @param {Array<number>} p1 起点
 * @param {Array<number>} p2 终点
 */
export function getXYDistance(p1: Array<number>, p2: Array<number>): number;
/**
 * 数字的线性差值
 * @param {number} v1 差值起点
 * @param {number} v2 差值终
 * @param {number} ratio 差值比例
 */
export function intepolateScalar(v1: number, v2: number, ratio: number): number;
/**
 * 二维数组的线性差值
 * @param {Array} v1 差值起点
 * @param {Array} v2 差值终
 * @param {number} ratio 差值比例
 */
export function intepolateVector2(v1: any[], v2: any[], ratio: number): any[];
/**
 * 三维数组的线性差值
 * @param {Array} v1 差值起点
 * @param {Array} v2 差值终
 * @param {number} ratio 差值比例
 */
export function intepolateVector3(v1: any[], v2: any[], ratio: number): any[];
/**
 * 计算二维坐标p1点到p2点的单位向量
 * @param {Array<number>} p1 起点
 * @param {Array<number>} p2 终点
 */
export function getDirection(p1: Array<number>, p2: Array<number>): any;
/**
 * 计算二维向量的法线，逆时针旋转90度
 * @param {Vector2} vec 二维向量
 */
export function computeNormal(vec: any): any;
/**
 * 获取两向量夹角的向量
 * @param {Vector2} v1 起始向量
 * @param {Vector2} v2 结束向量
 */
export function computeMiter(v1: any, v2: any): any;
export function segmentsIntr(a: any, b: any, c: any, d: any): false | {
    x: number;
    y: number;
};
export function getRadiusCenter(lineA: any, lineB: any, percent: any): {
    point: number[] | undefined;
    center: boolean | {
        x: number;
        y: number;
    };
    interPointA: any[];
    interPointB: any[];
    direction: number[] | undefined;
};
export function isNumber(num: any): boolean;
