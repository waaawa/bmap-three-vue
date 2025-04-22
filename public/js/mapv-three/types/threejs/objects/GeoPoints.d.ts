/** @protected */
export class GeoPoints extends GeoObject {
    /**
     * @readonly
     * 类型为Points的标识
     */
    readonly isPoints: true;
    /** @protected */
    protected isEventEntitySupported: boolean;
    /**
     * 设置object尺寸
     * @param {number} value 尺寸值
     */
    set size(arg: number);
    /**
     * object尺寸
     */
    get size(): number;
}
import { GeoObject } from "./GeoObject";
