/**
 * 数据元素构造函数
 * @param {Array<number>} position 坐标
 * @param {object} attributes 属性对象
 */
export function DataItem(position: Array<number>, attributes?: object): void;
export class DataItem {
    /**
     * 数据元素构造函数
     * @param {Array<number>} position 坐标
     * @param {object} attributes 属性对象
     */
    constructor(position: Array<number>, attributes?: object);
    position: number[];
    attributes: object;
    id: any;
    /** @private */
    private _projection;
    getProjection(projectionName: any): any[];
}
