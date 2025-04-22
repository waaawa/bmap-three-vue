export default class FillExecuter {
    constructor(feature: any, styleLayer: any, sourceLayer: any, mapboxStyle: any);
    /** @type {import('../sourceLayer').default} */
    _sourceLayer: import('../sourceLayer').default;
    /** @type {import('../style').default} */
    _mapboxStyle: import('../style').default;
    _feature: any;
    _styleLayer: any;
    _color: any;
    _colors: any[];
    _vertices: any[];
    _indices: any[];
    _normals: any[];
    execute(): void;
    getExecutedData(): {
        colors: any[];
        vertices: any[];
        indices: any[];
        normals: any[];
    };
    _getStyleValue(type: any, property: any): any;
    _getFillColor(): void;
    _loadGeometry(): void;
    _getOutLineColor(): void;
    _getFillPattern(): void;
}
