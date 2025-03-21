export class Editor {
    /** @protected */ protected _enabled: boolean;
    /** @protected */ protected _drawedGraph: any[];
    /** @protected */ protected _transformBox: any;
    /** @protected */ protected _trnasformIndex: any;
    /** @protected */ protected _completedDataSource: any;
    /** @protected */ protected _completedElement: any;
    /** @private */ private _selectedIndex;
    /**
     * @private
     * 绘制状态，0：未开始、1：首次绘制中、2：绘制结束、3：编辑暂停、4：编辑中
     */
    private _stage;
    /**
     * @protected
     * 是否为新增的图形(新增/编辑)
     */
    protected _isAdd: boolean;
    /**
     * @protected
     * 是否关闭z方向上的拖动编辑，默认开启
     */
    protected _is2D: boolean;
    /** @private */
    private afterAddToEngine;
    /** @protected */
    protected initObjects(): void;
    /** @protected */
    protected initEvents(): void;
    /**
     * 重置绘制状态
     */
    reset(): void;
    /**
     * 清除所有图形
     */
    clearAll(): void;
    /**
     * @protected
     */
    protected attachTransform(position: any, angleComponent?: string): void;
    /**
     * @pritected
     */
    detachTransform(): void;
    /**
     * @protected
     */
    protected _getTransformBoxState(): {
        point: any;
        position: any[];
        width: any;
        height: any;
        length: any;
        angle: any[];
    };
    /**
     * @protected
     * 清空
     */
    protected clearBuffers(): void;
    /**
     * @protected
     * 解绑所有事件
     */
    protected unbindEvents(): void;
    /**
     * @protected
     * 计算法向量值
     */
    protected _getNodeNormal(): any;
    /**
     * 编辑完成
     */
    complete(): void;
    deepClone(object: any): any;
    cancel(): void;
    _handleNodeClick(): void;
    _handleAddMove(): void;
    _handleAddFinish(): void;
    /**
     * @private
     * 图形信息
     */
    private graphInfo;
    beforeRemoveFromEngine(): void;
    /**
     * 绘制的图形的数组
     */
    get drawedGraph(): any[];
    /**
     * 选中的图形索引
     */
    get selectedIndex(): number;
    /**
     * 是否能够绘制或编辑
     */
    set enabled(arg: boolean);
    /**
     * 是否能够绘制或编辑
     */
    get enabled(): boolean;
    set is2D(arg: boolean);
    get is2D(): boolean;
    /**
     * 导出为geojson格式
     */
    exportToGeoJSON(): {
        type: string;
        features: {
            type: string;
            geometry: {
                type: any;
                coordinates: any;
            };
            properties: {};
        }[];
    };
    _getProperties(attributes: any): {};
}
