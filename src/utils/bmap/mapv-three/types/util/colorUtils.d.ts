/**
 * 将Color类型的颜色信息转换为四维向量的格式，包含一个值为1的透明度分量
 * @param {Color} params 颜色信息
 * @returns
 */
export function colorToVec4(params: any): any;
/**
 * 将Color类型的颜色信息转换为三维向量的格式，不包含透明度分量
 * @param {Color} params 颜色信息
 * @returns
 */
export function colorToVec3(params: any): any;
export function colorToArr4(params: any): any[];
export function colorToArr3(params: any): any[];
