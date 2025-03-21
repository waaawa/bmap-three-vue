export class ElementsManager {
    constructor(parent: any);
    _tileMaxLevel: number;
    _subscribedMaxLodLevel: number;
    _elementHandlers: any[];
    _objectParent: any;
    subscribedDataTypeMap: {};
    _active: boolean;
    _configVersion: number;
    registerElement(element: any): any;
    unregisterElement(element: any): void;
    shouldIgnoreTile: (tile: any) => boolean;
    parseElements: (tile: any) => void;
    getInterleavedBufferValue2: (attribute: any, index: any) => any[];
    getInterleavedBufferValue3: (attribute: any, index: any) => any[];
    findElementInMesh: (mesh: any, matchedBatchIdMap: any, matchedElementMap: any) => void;
    onTileLoad: (tile: any, scene: any) => void;
    onTileDispose: (tile: any, scene: any) => void;
    onTileShow: (tile: any) => void;
    onTileHide: (tile: any) => void;
    parseTileInfo: (tile: any) => void;
    refreshTile: (tile: any) => void;
    refreshTiles: () => void;
    tick(time: any): void;
    set subscribedMaxLodLevel(arg: number);
    get subscribedMaxLodLevel(): number;
}
