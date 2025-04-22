/**
 * 圆形编辑器
 */
export class CircleEditor extends Editor {
    constructor(engine: any, options?: {});
    /** @private */
    private _circleBuffer;
    /** @private */
    private _virtualLineBuffer;
    /** @private */
    private _helpersBuffer;
    /** @private */ private _hasBeenMove;
    /** @private */ private _engine;
    /** @private */ private _options;
    /** @private */ private _circle;
    /** @private */ private _circleDataSource;
    /** @private */ private _virtualLine;
    /** @private */ private _virtualLineDataSource;
    /** @private */ private _helpers;
    /** @private */ private _helpersDataSource;
    /** @private */ private _transformIndex;
    /** @private */ private _lastDataItem;
    /** @private */
    private initCircle;
    /** @private */
    private initvirtualLine;
    /** @private */
    private initHelper;
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
    /** @private */
    private calcLength;
    /** @private */
    private addNode;
    /**
     * @private
     * 移动圆心
     */
    private moveNode;
    /**
     * @private
     * 调整绘制圆的半径
     */
    private adjustRadius;
    dispose(): void;
    /** @private */
    private clearObjects;
    /** @private */
    private overwriteNodes;
    set data(arg: never[]);
    /**
     * 绘制的圆形的数据信息
     */
    get data(): never[];
}
import { Editor } from "./Editor";
