export default class SymbolExecuter {
    constructor(feature: any, styleLayer: any, sourceLayer: any, mapboxStyle: any);
    /** @type {import('../sourceLayer').default} */
    _sourceLayer: import('../sourceLayer').default;
    /** @type {import('../style').default} */
    _mapboxStyle: import('../style').default;
    _feature: any;
    _styleLayer: any;
    _textObject: {
        text: string;
    };
    _labels: any[];
    execute(): void;
    getExecutedData(): {
        labels: any[];
    };
    _getStyleValue(type: any, property: any): any;
    _parseText(): void;
    _loadGeometry(): void;
    _xyToMercator(coords: any): void;
}
