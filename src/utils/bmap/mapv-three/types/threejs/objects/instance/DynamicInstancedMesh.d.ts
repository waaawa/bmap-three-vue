/**
 * 动态批量绘制物体
 * 用于植被、地表覆盖物批量绘制，支持高效率地修改
 */
export class DynamicInstancedMesh {
    constructor(meshes: any);
    /**
     * 是否支持返回的事件参数中携带entity实体数据
     */
    isEventEntitySupported: boolean;
    /** @private */ private _initialSize;
    /** @private */ private _expandStepSize;
    /**
     * @private
     * mesh,这里的mesh需要材质数量尽可能少
     */
    private _meshes;
    /** @private */ private _attributes;
    /** @private */ private _idIndexMap;
    /** @private */ private _indexIdMap;
    /** @private */ private _instanceMatrixArraySize;
    /** @private */ private _matrixAttribute;
    /** @private */ private _colorAttribute;
    /**
     * @private
     * 当前最大的索引值
     */
    private _currentCount;
    _enableColor: boolean;
    _enableColorList: any[];
    /** @private */ private _rtc;
    _defaultMesh: any;
    set meshes(arg: any[]);
    get meshes(): any[];
    _initialized: boolean;
    updateRenderingMesh: () => void;
    /** @protected */
    protected getEntityByIndex(index: any): {
        id: any;
        index: any;
    } | null;
    has(id: any): boolean;
    resetBufferAttribute(size: any): void;
    clear(): void;
    /**
     *
     * @param {*} data
     * .instanceMatrix
     * .translation, .scale, .rotation
     * .id 必须要有，这是增删数据的唯一主键
     * @param {*} level
     */
    setBufferData(bufferData: any): void;
    setColor(id: any, color: any): void;
    expandInstanceArray: (count: any, dataExtend?: boolean) => void;
    /**
     * 添加数据
     * @param {*} bufferData
     */
    addInstances(bufferData: any): void;
    computeTempMatrix(bufferData: any, startNum: any, count: any): any;
    copyArrayData: (target: any, targetOffset: any, source: any, sourceOffset: any, length: any) => void;
    removeInstance(id: any): void;
    removeInstances(bufferData: any): void;
    update(): void;
    dispose(): void;
    raycast(raycaster: any, intersects: any): void;
    set needsUpdate(arg: any);
    set enableColor(arg: boolean);
    get enableColor(): boolean;
    set enableColorList(arg: any);
}
