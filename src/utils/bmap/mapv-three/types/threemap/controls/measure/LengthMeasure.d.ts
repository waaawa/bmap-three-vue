/**
 * 距离量测
 */
export class LengthMeasure extends Measure {
    constructor(engine: any, options?: {});
    /** @private */ private _editor;
    /** @private */ private _node;
    /** @private */ private _infoMarkers;
    /** @private */ private _infoMarkersDataSource;
    /** @private */ private _totalMarker;
    /** @private */ private _totalMarkerDataSource;
    /** @private 总长度 */
    private _length;
    /** @private 分段距离 */
    private _segmentLengths;
    /** @private */ private _indexOffset;
    /** @private */
    private _infoMarkersBuffer;
    /** @private */
    private _totalMarkerBuffer;
    _engine: any;
    _options: {};
    /** @private */
    private initEditor;
    /** @private */
    private initInfoMarkers;
    /**
     * 生成分段距离的标注
     * @param {number} feature 分段距离
     * @returns 分段距离的标注
     */
    createInfoMarkers: (feature: number) => HTMLDivElement;
    /**
     * 生成总长度的信息标注
     * @param {number} feature 总长度
     * @returns 总长度的信息标注
     */
    createTotalMarker: (feature: number) => HTMLDivElement;
    clearBuffer(): void;
    /**
     * 清除绘制元素
     */
    clearAll(): void;
    dispose(): void;
    /** @private */
    private get selectedIndex();
    /**
     * 总长度
     */
    get length(): number;
    get segmentLengths(): any[];
}
import { Measure } from "./Measure";
