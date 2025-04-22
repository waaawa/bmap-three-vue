/**
 * 一组裁剪集合{@link ClippingPlaneCollection}，用于支持多区域裁剪
 */
export class MultiClippingPlaneCollection {
    constructor(engine: any, options?: {});
    _multiCollections: any[];
    _dataArrayBuffer: any;
    _lengthArrayBuffer: any;
    _dirty: boolean;
    _multiClippingPlanesTexture: any;
    _lengthTexture: any;
    _maxCollectionLength: number;
    _totalPlanesCount: number;
    _owner: boolean;
    _unionClipping: any;
    _enabled: any;
    _engine: any;
    _options: {
        edgeColor: string;
        edgeWidth: number;
    };
    set edgeColor(arg: any);
    get edgeColor(): any;
    set edgeWidth(arg: any);
    get edgeWidth(): any;
    set unionClipping(arg: any);
    /**
     * 设置为true，裁剪外部
     */
    get unionClipping(): any;
    _modelMatrix: any;
    getDefaultOptions(): {
        edgeColor: string;
        edgeWidth: number;
    };
    add(collection: any): void;
    get(index: any): any;
    contains(collection: any): boolean;
    remove(collection: any): boolean;
    removeAll(): void;
    /**
     * 更新纹理（只做float type的纹理）
     */
    update(): void;
    destroy(): void;
    get length(): number;
    get totalPlanesCount(): number;
    get texture(): any;
    get maxCollectionLength(): number;
    get lengthTexture(): any;
    _edgeWidth: any;
    _edgeColor: any;
    get edgeStyle(): any;
    get dirty(): boolean;
    set enabled(arg: any);
    get enabled(): any;
    get modelMatrix(): any;
    /**
     * modelViewMatrix的逆转置矩阵，用于将平面转换到视空间
     */
    get clippingPlanesMatrix(): any;
}
