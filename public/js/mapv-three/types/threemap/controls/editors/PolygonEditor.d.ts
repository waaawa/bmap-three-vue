/**
 * 多边形编辑器
 * ```js
 * const editor = engine.add(new mapvthree.PolygonEditor(engine, {
 *      polygonColor: '#333',
 * }));
 * // 1. 开启编辑自定义绘制
 * polygon.enabled = true;
 * // 2. 数据回显
 * const data = [
 *      {
 *          point: [116.51595735991326, 39.79906856078468, 0],
 *          position: [12970497.04259632, 4836786.287580897, 0],
 *          scale: 2,
 *          angle: 2.517563424078793,
 *      },
 *      ...
 *      {
 *          point: [116.51595735991326, 39.79906856078468, 0],
 *          position: [12970497.04259632, 4836786.287580897, 0],
 *          scale: 2,
 *          angle: 2.517563424078793,
 *      },
 * ];
 * polygon.data = data;
 * polygon.enabled = true;
 * ```
 */
export class PolygonEditor extends Editor {
    constructor(engine: any, options?: {});
    /** @private */ private _polygonOpacity;
    /** @private */ private _virtualOpacity;
    /** @private */
    private _polygonBuffer;
    /** @private */
    private _strokeLineBuffer;
    /** @private */
    private _helpersBuffer;
    /** @private */ private _engine;
    /** @private */ private _options;
    /** @private */ private _polygon;
    /** @private */ private _polygonDataSource;
    /** @private */ private _strokeLine;
    /** @private */ private _strokeLineDataSource;
    /** @private */ private _helpers;
    /** @private */ private _helpersDataSource;
    /** @private */ private _transformIndex;
    /** @private */ private _lastDataItem;
    /** @private */
    private initPolygon;
    /** @private */
    private initStrokeLine;
    /** @private */
    private initHelpers;
    /** @private */
    private initCompletedElement;
    /** @private */
    private _handleCompleteClick;
    /** @private */
    private _handleAddClick;
    set stage(arg: any);
    /** @internal */
    get stage(): any;
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
    private updateNode;
    /** @private */
    private overwriteNodes;
    /** @internal */
    clearObjects(): void;
    dispose(): void;
    set data(arg: never[]);
    /** 绘制的多边形数据信息 */
    get data(): never[];
    get length(): number;
}
import { Editor } from "./Editor";
