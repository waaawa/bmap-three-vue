export class JSONDataSource extends DataSource {
    /**
     * 快捷静态方法，实例化JSONDataSource类
     * @param {string} url 数据的url路径
     */
    static fromUrl: (url: string) => Promise<JSONDataSource>;
    /**
     * 静态方法，传入json数据，实例化JSONDataSource类
     * @param {object} json json数据
     */
    static fromJSON: (object: any) => JSONDataSource;
    constructor(options: any);
    /** @private */ private _coordinatesKey;
    /** @private */ private _jsonFeatures;
    /** @private */ private _jsonIndexMap;
    /** @private */ private _jsonDataType;
    type: string;
    _prepareFeatures(): void;
    _parseJson(data: any): any;
    /**
     * @internal
     */
    _parseFeature(data: any, userData: any): void;
    get jsonDataType(): any;
    set coordinatesKey(arg: string);
    get coordinatesKey(): string;
}
import { DataSource } from "./DataSource";
