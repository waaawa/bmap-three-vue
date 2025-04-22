/**
 * 继承自[[DataSource]]，专用于输入数据源是CSV格式的数据
 */
export class CSVDataSource extends DataSource {
    /**
     * 快捷静态方法，实例化CSVDataSource类
     * @param {string} url 数据的url路径
     */
    static fromUrl: (url: string) => Promise<CSVDataSource>;
    constructor(options: any);
    /** @private */ private _coordinatesKey;
    /** @private */ private _csvDataType;
    /** @private */ private _csvFeatures;
    /** @private */ private _csvIndexMap;
    type: string;
    /**
     * @internal
     */
    _parseFeature(data: any, userData: any): void;
    /**
     * @internal
     */
    _prepareFeatures(): void;
    /**
     * @internal
     * 将csv数据转换为类似geojson格式中的feature
     */
    csvToFeatures(): any;
    get csvDataType(): any;
}
import { DataSource } from "./DataSource";
