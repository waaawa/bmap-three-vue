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
 * 通过web墨卡托坐标和半径获取当前范围内瓦片的列表
 * @param {*} center
 * @param {*} radius
 * @param {*} level
 * @returns
 */
export function getTileListByRadius(center: any, radius: any, level: any): string;
