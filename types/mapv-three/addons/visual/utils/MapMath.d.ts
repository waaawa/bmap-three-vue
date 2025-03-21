/**
 * 获取Vector2
 * @param {Any} position 坐标
 * @returns {Object} Vector2
 */
export function getVector2(position: any, defaultVector: any): Object;
/**
 * 获取Vector3
 * @param {Any} position 坐标
 * @param {number} z 默认z值
 * @returns {Object} Vector3
 */
export function getVector3(position: any, z: number | undefined, defaultVector: any): Object;
/**
 * 获取Box3
 * @param {Any} box 坐标
 * @returns {Object} Box3
 */
export function getBox3(box: any): Object;
/**
 * 获取Color
 * @param {Any} color 坐标
 * @returns {Object} Color
 */
export function getColor(color: any): Object;
/**
 * 删除重复点
 * @param {*} points 点数组
 */
export function removeDupEndPts(points: any): void;
export function convertToClockwise(vertices: any, holes: any): void;
export function area(points: any, start: any, end: any): number;
export function equals(arr1: any, arr2: any): boolean;
export function getMatrixFromCameraParams(translation?: any, quaternion?: any, scale?: any): any;
export function getEulerRotationFromCameraParams(quaternion: any): any;
export function fromSreenToNdc(x: any, y: any, container: any): {
    x: number;
    y: number;
    z: number;
};
export function fromNdcToScreen(x: any, y: any, container: any): {
    x: number;
    y: number;
};
export function intersectsBox(box1: any, box2: any): any;
/**
 * 二维空间下，矩形与矩形之间的碰撞检测
 * @requires @param {Object} dim1 矩形1信息
 * @requires @param {Object} dim2 矩形2信息
 * @returns {boolean} true-碰撞、false-不碰撞
 */
export function boxCollision(dim1: Object, dim2: Object): boolean;
/**
 * 二维空间下，圆与圆之间的碰撞检测
 * @requires @param {Object} circle1 圆1信息
 * @requires @param {Object} circle2 圆2信息
 * @returns {boolean} true-碰撞、false-不碰撞
 */
export function circleCollision(circle1: Object, circle2: Object): boolean;
/**
 * 二维空间下，圆与矩形之间的碰撞检测
 * @requires @param {Object} dim Box型Symbol的有关信息
 * @requires @param {Object} circle Circle型Symbol的有关信息
 * @returns {boolean} true-碰撞、false-不碰撞
 */
export function circleBoxCollision(dim: Object, circle: Object): boolean;
