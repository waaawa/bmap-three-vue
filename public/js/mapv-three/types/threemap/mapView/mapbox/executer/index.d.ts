export default class Executer {
    constructor(sourceLayer: any, mapboxStyle: any);
    /** @type {import('../sourceLayer').default} */
    _sourceLayer: import('../sourceLayer').default;
    _filterCache: {};
    /** @type {import('../style').default} */
    _mapboxStyle: import('../style').default;
    _background: {
        colors: never[];
        vertices: never[];
        normals: never[];
        indices: never[];
    };
    _fill: {
        colors: number;
        vertices: number;
        normals: number;
        indices: number;
    };
    _line: {
        colors: number;
        vertices: number;
        normals: number;
        indices: number;
        widths: number;
    };
    _symbol: {
        labels: never[];
    };
    /** @type {Array<object>} */
    _fillArray: Array<object>;
    /** @type {Array<object>} */
    _lineArray: Array<object>;
    /**
     * 处理feature和style 返回three需要的顶点、颜色、法向量等相关数据
     */
    execute(): void;
    getExecutedData(): {
        background: {
            colors: never[];
            vertices: never[];
            normals: never[];
            indices: never[];
        };
        fill: {
            vertices: Float32Array;
            colors: Float32Array;
            normals: Float32Array;
            indices: Uint32Array;
            widths?: undefined;
        } | {
            vertices: Float32Array;
            colors: Float32Array;
            normals: Float32Array;
            indices: Uint32Array;
            widths: Float32Array;
        } | undefined;
        line: {
            vertices: Float32Array;
            colors: Float32Array;
            normals: Float32Array;
            indices: Uint32Array;
            widths?: undefined;
        } | {
            vertices: Float32Array;
            colors: Float32Array;
            normals: Float32Array;
            indices: Uint32Array;
            widths: Float32Array;
        } | undefined;
        symbol: {
            labels: never[];
        };
    };
    _generatorBufferArray(type: any): {
        vertices: Float32Array;
        colors: Float32Array;
        normals: Float32Array;
        indices: Uint32Array;
        widths?: undefined;
    } | {
        vertices: Float32Array;
        colors: Float32Array;
        normals: Float32Array;
        indices: Uint32Array;
        widths: Float32Array;
    } | undefined;
    _mergeArray(executer: any, executedData: any): void;
    _setupBackgroundLayer(styleLayer: any, zoom: any): void;
    _getConstructor(feature: any, styleLayer: any): typeof FillExecuter | typeof LineExecuter | typeof SymbolExecuter | null;
}
import FillExecuter from "./fill";
import LineExecuter from "./line";
import SymbolExecuter from "./symbol";
