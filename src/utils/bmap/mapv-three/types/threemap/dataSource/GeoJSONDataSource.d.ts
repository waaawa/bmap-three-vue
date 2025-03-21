/**
 * 继承自[[DataSource]]，专用于输入数据源是GeoJSON格式的数据
 * ```javascript
 * const data = [{'properties': {}, 'geometry': {'type': Point', 'coordinates': [106.472739, 29.561524]}}];
 * ```
 */
export class GeoJSONDataSource extends DataSource {
    /**
     * 快捷静态方法，实例化GeoJSONDataSource类，异步
     * @param {string} url 数据的url路径
     */
    static fromGeoJSON: (url: string) => Promise<GeoJSONDataSource>;
    /**
     * 快捷静态方法，实例化GeoJSONDataSource类，异步
     * @param {string} url 数据的url路径
     */
    static fromUrl: (url: string) => Promise<GeoJSONDataSource>;
    /**
     * 快捷静态方法，实例化GeoJSONDataSource类，同步
     * @param {object} object geojson数据对象
     */
    static fromGeoJSONObject: (object: object) => GeoJSONDataSource;
    /**
     * 快捷静态方法，实例化GeoJSONDataSource类，同步
     * @param {object} object geojson数据对象
     */
    static fromObject: (object: object) => GeoJSONDataSource;
    constructor(options: any);
    /** @private */ private _geoDataType;
    /** @private */ private _geoFeatures;
    /** @private */ private _geoIndexMap;
    type: string;
    /**
     * @internal
     */
    _parseFeatures(data: any, userData: any): void;
    /**
     * @internal
     */
    _prepareFeatures(): void;
    /**
     * GeoJSON数据的类型，Point | Polygon | LineString
     */
    get geoDataType(): any;
}
import { DataSource } from "./DataSource";
