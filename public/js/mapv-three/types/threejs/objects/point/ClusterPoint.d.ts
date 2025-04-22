/**
 * 聚合点，它能够汇总一组点要素，统计数据，利用聚合统计得到的数据信息，
 * 结合其他的可视化元素可以展示更丰富的效果
 * ![](media://cluster-point.png)
 */
export class ClusterPoint extends PointGroup {
    /**
     * 构造函数
     * @param {{
        * cluster?: string, icon?: string, label?: string
        * }} parameters 传入参数对象
        * @param {boolean} parameters.cluster 组合独立体
        * @param {number} parameters.icon 组合子组件 icon
        * @param {string} parameters.label 组合子组件 label
        */
    constructor(parameters?: {
        cluster?: string;
        icon?: string;
        label?: string;
    });
    /** @private */ private _ready;
    /** @private */ private _cluster;
    /** @private */ private _clusterDataSource;
    /** @private */ private _icon;
    /** @private */ private _label;
    /** @private */ private _minUpdateInterval;
    /**
     * @private
    */
    private _lastUpdateTime;
    /**
     * @private
    */
    private _updateTimeoutHandler;
    cachedData: any;
    /** @internal */
    _updateRenderingData: () => void;
    set minUpdateInterval(arg: any);
    /**
     * 更新最短的时间间隔
     */
    get minUpdateInterval(): any;
    /**
     * cluster聚合点的数据源
     */
    get clusterDataSource(): GeoJSONDataSource;
}
import { PointGroup } from "./PointGroup";
import { GeoJSONDataSource } from "../../../threemap/dataSource/GeoJSONDataSource";
