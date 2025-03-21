export default class LineExecuter {
    constructor(feature: any, styleLayer: any, sourceLayer: any, mapboxStyle: any);
    /** @type {import('../sourceLayer').default} */
    _sourceLayer: import('../sourceLayer').default;
    /** @type {import('../style').default} */
    _mapboxStyle: import('../style').default;
    _feature: any;
    _styleLayer: any;
    _color: any;
    _w: any;
    _colors: any[];
    _vertices: any[];
    _normals: any[];
    _indices: any[];
    _widths: any[];
    execute(): void;
    getExecutedData(): {
        colors: any[];
        vertices: any[];
        normals: any[];
        indices: any[];
        widths: any[];
    };
    _getStyleValue(type: any, property: any): any;
    _getLineColor(): void;
    _getLineWidth(): void;
    _loadGeometry(): void;
}
