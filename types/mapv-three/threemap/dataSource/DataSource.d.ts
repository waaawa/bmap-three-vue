/**
 * 抽象数据源类，用来管理传入原始数据到面向渲染数据的流转过程，可详见[[GeoJSONDataSource]]、[[CSVDataSource]]
 */
export class DataSource {
    constructor(options?: {});
    /** @private */ private _projectionName;
    /** @private */ private _objects;
    /** @private */ private _isLoading;
    /** @private */ private _isLoaded;
    /** @private */ private _url;
    /** @private */ private _origin;
    /** @private */ private _data;
    /** @private */ private _userData;
    /** @private */ private _addCache;
    /** @private */ private _attributeMap;
    /** @private */ private _needsUpdate;
    /** @private */ private _templateDataLength;
    /** @private */ private _idIndexMap;
    /** @private */ private _indexIdMap;
    /**
     * @private
     * 是否自动生成曲线数据，只有在线数据的时候会生效
     */
    private _isCurve;
    options: {};
    /**
     * @private
     * 每个DataSource实例有个独立的id，默认为时间戳
     */
    private _id;
    /**
     * 主要入口方法，该方法为异步，根据路径或者原始数据请求并解析
     * @param {string | object} url 请求路径或者数据对象
     */
    load(url: string | object): Promise<DataSource>;
    /** @internal */
    _getFetchData(rs: any): Promise<any>;
    /**
     * 根据数据中属性名设置着色器attribute字段
     * @param {string} attribute 着色器attribute对应变量名
     * @param {string} property 数据中property名
     */
    setAttribute(attribute: string, property: string): DataSource;
    set needsUpdate(arg: boolean);
    /**
     * 是否需要更新
     */
    get needsUpdate(): boolean;
    /**
     * 根据数据中属性名批量设置着色器attribute字段
     * @param {Object} obj 着色器attribute变量名与数据中property名对应关系
     */
    setAttributes(obj: Object): DataSource;
    /**
     * 从着色器中移除属性名为name的attribute字段
     * @param {string} name 属性名
     */
    removeAttribute(name: string): DataSource;
    /**
     * 从着色器移除所有添加的attribute字段，这些字段只能是通过setAttribute或setAttributes添加的
     */
    removeAllAttributes(): DataSource;
    /**
     * 向数据源中增加数据元素
     * @param {DataItem} dataItem 数据元素实例
     */
    add(dataItem: DataItem): DataSource;
    /**
     * 从数据源中移除数据元素
     * @param {DataItem} dataItem 数据元素实例
     * @returns
     */
    remove(dataItem: DataItem): DataSource | undefined;
    /**
     * 获取已解析后的第index个数据
     * @param {number} index 索引下标
     */
    get(index: number): {} | undefined;
    /**
     * 获取原始数据中的数据索引
     * @param {number} index 绘制元素的索引
     */
    getOriginDataIndex(index: number): number[];
    /**
     * 获取原始数据
     * @param {number} index 绘制元素的索引
     */
    getOriginData(index: number): any;
    /**
     * 导出数据成geojson格式
     */
    exportToGeoJSON(): {
        type: string;
        features: {
            type: string;
            geometry: {
                type: string | undefined;
                coordinates: any;
            };
            properties: any;
        }[];
    };
    /**
     * @protect
     */
    originToFeatures(features: any): any;
    /**
     * @internal
     * datasource生成面向Object对象的数据入口
     */
    update(): void;
    set data(arg: {});
    /**
     * 对源数据解析后得到的数据，数据格式如{position: [], index: []}，这样的数据格式更方便着色器
     */
    get data(): {};
    set userData(arg: any[]);
    /**
     * 对源数据解析后得到的数据，数据格式如[{position, index}],这样的数据格式更方便用户
     */
    get userData(): any[];
    /**
     * 修改数据源中的数据
     * @param {*} data
     */
    setData(data: any): void;
    /**
     * 清空数据源中存储的数据，恢复初始状态
     */
    clear(): void;
    /** @internal */
    onClear(): void;
    /**
     * 先处理模板数据
     * @internal
     * @param {object} data 最终data数据格式
     * @param {Array} userData 最终data数据array格式
     */
    _onProcessTemplateData(data: object, userData: any[]): object;
    /**
     * 再处理手工add进来的DataItem数据
     * @internal
     * @param {object} data 最终data数据buffer格式
     * @param {Array} userData 最终data数据array格式
     */
    _onProcessAddData(data: object, userData: any[]): void;
    /**
     * @protected
     * 根据坐标信息来获取数据类型
     */
    protected _getDataType(data: any): string | undefined;
    /**
     * @protected
     * 根据坐标信息来获取数据类型
     */
    protected _getDataTypeByCoordinates(coordinates: any): string | undefined;
    /**
     * @protected
     */
    protected _onDecomposeFeature(type: any, feature: any): any[];
    dispose(): void;
    /**
     * 数据大小
     */
    get size(): any;
    /**
     * 获取数据源的源数据
     */
    get origin(): any;
    set projectionName(arg: any);
    /**
     * 投影名称
     */
    get projectionName(): any;
    set objects(arg: any[]);
    /**
     * 该数据源连接的对象
     */
    get objects(): any[];
    set isCurve(arg: boolean);
    /**
     * 是否自动生成曲线数据，只有在线数据的时候会生效，会自动取线数据的首尾点生成3D贝塞尔曲线
     */
    get isCurve(): boolean;
}
import { DataItem } from "./DataItem";
