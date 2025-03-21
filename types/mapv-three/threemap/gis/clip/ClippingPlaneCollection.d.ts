/**
 * 裁剪面集合
 */
export class ClippingPlaneCollection {
    static fromPoints(engine: any, points: any, options?: {}): ClippingPlaneCollection;
    constructor(engine: any, options?: {});
    _planes: any[];
    _dirtyIndex: number;
    _multipleDirtyPlanes: boolean;
    _enabled: boolean;
    _clippingPlanesTexture: any;
    _useFloatPointTexture: boolean;
    _uint8View: any;
    _float32View: any;
    isClippingPlaneCollection: boolean;
    _engine: any;
    options: {};
    modelMatrix: any;
    getDefaultOptions(): {};
    _setIndexDirty(index: any): void;
    _packPlanesAsFloats(startIndex: any, endIndex: any): void;
    _computeTextureResolution(pixelsNeeded: any): any;
    /**
     * 更新纹理信息，第一次会更新全部纹理，后面可以进行局部更新
     */
    update(): void;
    /**
     * 获取pack裁剪面信息的texture的分辨率
     */
    getTextureResolution(): any;
    /**
     * 销毁，释放资源
     */
    destroy(): void;
    /**
     * 添加裁剪面
     */
    add(plane: any): void;
    /**
     * 移除裁剪面
     */
    remove(plane: any): boolean;
    /**
     * 移除所有裁剪面
     */
    removeAll(): void;
    /**
     * 获得裁剪面
     */
    get(index: any): any;
    get texture(): any;
    get length(): number;
    set enabled(arg: boolean);
    get enabled(): boolean;
}
