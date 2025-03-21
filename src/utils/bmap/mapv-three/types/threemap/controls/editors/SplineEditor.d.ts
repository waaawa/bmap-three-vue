/**
 * 样条编辑器
 */
export class SplineEditor extends Editor {
    constructor(engine: any, options?: {});
    /** @private */
    private _virtualLineBuffer;
    /** @private */
    private _splineBuffer;
    /** @private */
    private _helpersBuffer;
    /** @private */ private _engine;
    /** @private */ private _options;
    /** @private */ private _virtualLine;
    /** @private */ private _virtualLineDataSource;
    /** @private */ private _helpers;
    /** @private */ private _helpersDataSource;
    /** @private */ private _spline;
    /** @private */ private _splineDataSource;
    /** @private */ private _transformIndex;
    /** @private */ private _lastDataItem;
    /** @private */
    private initSpline;
    /** @private */
    private initVirtualLine;
    /** @private */
    private initHelpers;
    /** @private */
    private initCompeleteElement;
    /** @private */
    private _handleCompleteClick;
    /** @private */
    private _handleAddClick;
    /**
     * @private
     * 拖拽时触发
     */
    private _handleTransformChanging;
    /**
     * @private
     * 拖拽结束后触发
     */
    private _handleTransformChanged;
    /**
     * @private
     */
    private _handleCancelEdit;
    /** @private */
    private addNode;
    /** @private */
    private removeNode;
    /** @private */
    private updateNode;
    /** @private */
    private overwriteNodes;
    /** @private */
    private clearObjects;
    dispose(): void;
    /** 绘制的线数据 */
    set data(arg: never[]);
    get data(): never[];
    get length(): number;
}
import { Editor } from "./Editor";
