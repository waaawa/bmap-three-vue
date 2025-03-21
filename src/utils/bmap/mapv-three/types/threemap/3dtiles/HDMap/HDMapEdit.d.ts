/**
 * event list
 *
 */
export class HDMapEdit {
    constructor(tiles: any);
    _enabled: boolean;
    _apiHost: string;
    _selectedEntity: any;
    _proxyBox: any;
    _enableClickSelect: boolean;
    _hasLoadInitialInfo: boolean;
    _cachedModelAssetsInfo: any;
    _cachedElementInfo: Map<any, any>;
    _modelsCache: {};
    _author: any;
    _deletedIdsCache: any[];
    _tiles: any;
    _engine: any;
    _modelMeshSingleton: PromisedSingleton;
    _setup(): void;
    _destory(): void;
    _generateModelMesh: (key: any) => Promise<any>;
    _getScaleFactor(coordinates: any): number;
    _syncProxyObject: (element: any, object: any, dimension: any) => void;
    _showSelectedObjectEntity(entity: any): void;
    _hideSelectedObjectEntity(): void;
    _loadChangeInfo: () => Promise<void>;
    selectElementById(id: any): Promise<any>;
    deselect(): Promise<void>;
    /**
     * 给元素附加变换控件
     * 如果是3DTiles中的元素，需要先删除，再创建额外一个单体元素
     * 首先从instanced单体元素中删除当前数据，再创建一个单体元素用作变换对象，变换完成后再恢复回来
     * @param {*} id
     * @returns
     */
    attachElementTransformById(id: any): Promise<void>;
    _proxyModelObject: any;
    _transformingElement: any;
    _handleTransformChanged: (e: any) => void;
    detachElementTransform(): Promise<void>;
    findElementById(id: any): Promise<any>;
    findElementsById(...id: any[]): Promise<any>;
    findLinesById(...id: any[]): Promise<any>;
    deleteElementById(id: any): Promise<any>;
    addElement(point: any, properties: any): Promise<any>;
    /**
     * 加载模型资产信息，包含所有可加载模型的信息
     */
    loadModelAssetsInfo(): Promise<any>;
    _cachedModelAssetsMap: {} | undefined;
    updateElementById(id: any, point?: any, properties?: {}): Promise<any>;
    _updateTransformingElement: () => Promise<any>;
    /**
     * 根据模型信息在场景中添加一个模型
     * @param {*} element
     */
    _addElementModel: (element: any) => Promise<void>;
    _getModelInstanceDataFromElement: (element: any) => {
        id: any[];
        translation: any;
        scale: any[];
        rotation: number[];
    };
    _getModelInfoKey: (model: any) => string;
    _getElementTypeKey: (element: any) => any;
    _request(uri: any, data: any): Promise<any>;
    _decodeResponse: (str: any) => any;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set apiHost(arg: string);
    get apiHost(): string;
    set author(arg: any);
    get author(): any;
}
import { PromisedSingleton } from "../../../util/PromisedSingleton";
