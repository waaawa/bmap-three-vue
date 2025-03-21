/**
 * @file 存储每个瓦片的数据
 */
export default class SourceLayer {
    constructor(layers: {} | undefined, indexOffset: any, tileKey: any);
    _layers: {};
    _fillIndexOffset: number;
    _lineIndexOffset: number;
    tileKey: {
        x: number;
        y: number;
        z: number;
    };
    tileSize: number;
    getTileLayer(name: any): any;
    setFillIndexOffset(num: any): void;
    setLineIndexOffset(num: any): void;
    getFillIndexOffset(): number;
    getLineIndexOffset(): number;
    setLayers(layers?: {}): void;
}
