/**
 * 全局碰撞检测
 * ```js
 * engine.rendering.collision.add('groupName', text);
 * ```
 */
export class RenderingCollision {
    constructor(rendering: any);
    /**
     * @private
     * 每组的object对象
     */
    private _groupObjectMap;
    /**
     * @private
     * 每组的全体对象按rank排序数据
     */
    private _groupDataMap;
    /**
     * @private
     * 每帧碰撞后更新，存的是每个对象对应的碰撞后的数据
     */
    private _objectDataMap;
    /**
     * @private
     * 重新排序数据的flag
     */
    private _needsUpdate;
    /**
     * @private
     * 参与计算碰撞的整体数据量，限制之后以提高一些性能
     */
    private _restrictCount;
    /**
     * @internal
     * 上次计算碰撞更新的时间
     */
    _lastUpdateTime: number;
    /**
     * @internal
     * 碰撞节流的延时时间
     */
    _delayUpdateTime: number;
    /**
     * @internal
     * 节流定时器句柄
     */
    _delayUpdateTimeHandler: any;
    /** @private */ private _margin;
    /** @private */ private _maxRenderDepth;
    /** @private */ private _lastZoom;
    /** @private */ private _viewMatrixWorld;
    /** @private */ private _projectionMatrix;
    /** @private */ private _viewChanged;
    _rendering: any;
    add(object: any, options?: {}, group?: string): void;
    remove(object: any, group?: string): void;
    /**
     * @internal
     */
    sortData(): void;
    /**
     * @internal
     * 每帧执行全局碰撞
     */
    update(renderState: any): void;
    /**
     * @internal
     */
    _collisionTest(): false | undefined;
    /**
     * 碰撞方块的外边距，主要影响碰撞体积
     * @param {Array<number> | number} value x轴与y轴的边距
     */
    set margin(arg: number | number[]);
    get margin(): number | number[];
    /**
     * 最大渲染深度
     */
    set maxRenderDepth(arg: any);
    /**
     * 参与计算碰撞的整体数据量，限制之后以提高一些性能
     * @param {number} value 参与计算的数据量
     */
    set restrictCount(arg: number);
    get restrictCount(): number;
    set needsUpdate(arg: boolean);
    get needsUpdate(): boolean;
}
