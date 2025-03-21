export class AreaMeasure extends Measure {
    constructor(engine: any, options?: {});
    /** @private */ private _area;
    /** @private */ private _node;
    /** @private */ private _editor;
    /** @private */ private _infoMarkers;
    /** @private */ private _infoMarkersDataSource;
    /** @private 面积的信息标注 */
    private _infoMarkersBuffer;
    _engine: any;
    _options: {};
    /** @private */
    private initEditor;
    /** @private */
    private initInfoMarkers;
    /**
     * 生成信息标注
     */
    createInfoMarkers(feature: any): HTMLDivElement;
    /** @private */
    private _movePolygonNode;
    /** @private */
    private _moveRectNode;
    /** @private */
    private _moveCircleNode;
    /** @private */
    private _adjustNode;
    /** @private */
    private setInfoMarkers;
    clearBuffer(): void;
    /**
     * 清除绘制元素
     */
    clearAll(): void;
    dispose(): void;
    /**
     * 总面积
     */
    get area(): number;
}
import { Measure } from "./Measure";
