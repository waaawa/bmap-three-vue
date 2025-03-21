export default class BackGroundExecuter {
    constructor(styleLayer: any, zoom: any, mapboxStyle: any);
    _styleLayer: any;
    /** @type {import('../style').default} */
    _mapboxStyle: import('../style').default;
    _zoom: any;
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
    _getBgColor(): void;
    _setupBackgroundData(): void;
}
