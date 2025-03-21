/**
 * 静态批量绘制模型
 */
export class InstancedModel {
    constructor(meshes: any, count: any);
    /**
     * 是否支持返回的事件参数中携带entity实体数据
     */
    isEventEntitySupported: boolean;
    /**
     * @private
     * mesh,这里的mesh需要材质数量尽可能少
     */
    private _meshes;
    /** @private */ private _idIndexMap;
    /** @private */ private _indexIdMap;
    /** @private */ private _matrixAttribute;
    /**
     * @private
     * 当前最大的索引值
     */
    private _count;
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
    clear(): void;
    /**
     * 添加数据
     * @param {*} bufferData
     * .instanceMatrix
     * .translation, .scale, .rotation
     * .id 必须要有，这是增删数据的唯一主键
     */
    setBufferData(bufferData: any): void;
    set count(arg: number);
    get count(): number;
    computeTempMatrix(bufferData: any): void;
    update(): void;
    /** @private */
    private _cleanOldMesh;
    dispose(): void;
    raycast(raycaster: any, intersects: any): void;
    set needsUpdate(arg: any);
}
