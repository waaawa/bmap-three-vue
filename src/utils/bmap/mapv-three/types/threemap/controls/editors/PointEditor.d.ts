/**
 * 点编辑器
 */
export class PointEditor extends Editor {
    constructor(engine: any, options?: {});
    /** @private */
    private _pointBuffer;
    /** @private */ private _hasBeenPush;
    /** @private */ private _engine;
    /** @private */ private _options;
    /** @private */ private _point;
    /** @private */ private _pointDataSource;
    /** @private */ private _transformIndex;
    /** @private */ private _lastDataItem;
    /** @private */
    private initPoint;
    /** @private */
    private initCompleteElement;
    /** @private */
    private _handleAddClick;
    /**
     * @private
     * 切换编辑的元素
     */
    private _handleCompleteClick;
    /** @private */
    private _handleTransformChanging;
    /** @private */
    private _handleTransformChanged;
    /** @private */
    private _handleCancelEdit;
    /** @private */
    private addNode;
    /** @private */
    private updateNode;
    /**
     * @private
     */
    private clearObjects;
    dispose(): void;
    /** @private */
    private overwriteNodes;
    set data(arg: never[]);
    /**
     * 绘制的点的数据信息
     */
    get data(): never[];
}
import { Editor } from "./Editor";
