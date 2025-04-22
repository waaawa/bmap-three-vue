/**
 * 待转区编辑
 */
export class HDMapTurnEdit {
    constructor(tiles: any);
    _enabled: boolean;
    _apiHost: string;
    _hasLoadInitialInfo: boolean;
    _cachedElementInfo: Map<any, any>;
    _author: any;
    _deletedIdsCache: any[];
    _tiles: any;
    _engine: any;
    _turnEditor: TurnWaitingEditor;
    _strokeDataSource: BufferDataSource;
    _stroke: any;
    _stopDataSource: BufferDataSource;
    _stop: any;
    _setup(): void;
    _destory(): void;
    _loadChangeInfo: () => Promise<void>;
    /**
     * 手动开启绘制待转区
     */
    addElementManual(id: any, type: any): void;
    _lastLaneLink: {
        id: any;
        type: any;
    } | null | undefined;
    /**
     * 通过数据传入单个坐标模拟单次点击
     * @param {Array} point 经纬度
     */
    addNode(point: any[]): void;
    _handleFinishDraw: (e: any) => Promise<void>;
    findElementById(id: any): Promise<any>;
    findElementsById(...id: any[]): Promise<any>;
    addElement(geometry: any, properties: any): Promise<any>;
    deleteElementById(id: any): Promise<any>;
    /**
     * 根据接口返回数据在场景中添加待转区
     */
    _renderElements: () => void;
    _parseSplineToArea(element: any, linebuffer: any, stopbuffer: any): void;
    _request(uri: any, data: any): Promise<any>;
    _decodeResponse: (str: any) => any;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set apiHost(arg: string);
    get apiHost(): string;
    set author(arg: any);
    get author(): any;
    get turnEditor(): TurnWaitingEditor;
}
import { TurnWaitingEditor } from "./TurnWaitingEditor";
import { BufferDataSource } from "../../dataSource/BufferDataSource";
