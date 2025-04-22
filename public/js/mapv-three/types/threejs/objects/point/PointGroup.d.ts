export class PointGroup extends GeoObject {
    /**
     * 是否支持返回的事件参数中携带entity实体数据
     */
    isEventEntitySupported: boolean;
    /**
     * 添加GeoObject类型的部件
     * @param {GeoObject} object
     * @returns
     */
    addComponent(object: GeoObject): GeoObject | undefined;
    /**
     * 移除部件
     * @param {GeoObject} object
     */
    removeComponent(object: GeoObject): void;
    getChildDataSource(child: any): any;
}
import { GeoObject } from "../GeoObject";
