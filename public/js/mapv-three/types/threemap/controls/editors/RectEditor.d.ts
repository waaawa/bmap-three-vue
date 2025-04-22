/**
 * 矩形编辑器
 */
export class RectEditor extends Editor {
    constructor(engine: any, options?: {});
    /** @private */
    private _rectBuffer;
    /** @private */
    private _helpersBuffer;
    /** @private */ private _engine;
    /** @private */ private _options;
    /** @private */ private _rect;
    /** @private */ private _rectDataSource;
    /** @private */ private _helpers;
    /** @private */ private _helpersDataSource;
    /** @private */ private _transformIndex;
    /** @private */ private _lastDataItem;
    /** @private */
    private initRect;
    /** @private */
    private initHelpers;
    /** @private */
    private initCompletedElement;
    /** @private */
    private _handleCompleteClick;
    /** @private */
    private _handleAddClick;
    /** @private */
    private _handleTransformChanging;
    /** @private */
    private _handleTransformChanged;
    /** @private */
    private _handleCancelEdit;
    /**
     * @private
     * 添加起点
     */
    private addNode;
    /**
     * @private
     * 除了对角点，其他点的位置都需要更新
     */
    private updateNode;
    /**
     * @private
     */
    private clearObjects;
    /** @private */
    private overwriteNodes;
    dispose(): void;
    set data(arg: never[]);
    /**
     * 绘制的矩形的数据信息
     */
    get data(): never[];
}
import { Editor } from "./Editor";
