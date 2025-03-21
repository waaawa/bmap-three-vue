/**
 * 用来绘制文字
 * ```js
 * const text = engine.add(new mapvthree.TextMesh({
 *     fillStyle: 'red',
 *     fontSize: 16,
 *     flat: false,
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * data.setAttribute('text', 'text');
 * text.dataSource = data;
 * ```
 * ![](media://text.png)
 */
export class TextMesh extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * fontSize?: number, fontFamily?: string, fillStyle?: string,
     * strokeStyle?: string, lineWidth?: number, padding?: Array<number>
     * }} parameters 传入参数对象
     * @param {number} parameters.fontSize 字号大小，默认16
     * @param {string} parameters.fontFamily 字体，默认微软雅黑
     * @param {string} parameters.fillStyle 绘制字的填充颜色
     * @param {string} parameters.strokeStyle 绘制字的描边颜色
     * @param {string} parameters.lineWidth 绘制字的描边宽度
     * @param {Array<number>} parameters.padding 绘制字方块的内边距，默认[2, 2]
     * @param {boolean} keepSize 是否保留字体大小，默认false
     */
    constructor(parameters: {
        fontSize?: number;
        fontFamily?: string;
        fillStyle?: string;
        strokeStyle?: string;
        lineWidth?: number;
        padding?: Array<number>;
    });
    /** @private */ private _fontSize;
    /** @private */ private _fontFamily;
    /** @private */ private _fillStyle;
    /** @private */ private _padding;
    /** @private */ private _strokeStyle;
    /** @private */ private _shouldStroke;
    /** @private */ private _collisionBoxCache;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** @protected */ protected cachedData: any[];
    /** @protected */ protected drawingData: any[];
    /** @protected */ protected canvas: any;
    /** @protected */ protected ctx: CanvasRenderingContext2D | null;
    /** @protected */ protected texture: any;
    /** @protected */ protected matrixAutoUpdate: boolean;
    /**
     * 绘制字的描边颜色
     */
    set strokeStyle(arg: any);
    get strokeStyle(): any;
    _lineWidth: number | undefined;
    sortByStyle: (data: any) => any;
    getStrictStyleId: (data: any) => string | 0;
    /** @internal */
    update(): void;
    /** @internal */
    updateRenderingData: () => void;
    /**
     * 字号大小
     * @param {number} value 字号
     */
    set fontSize(arg: number);
    get fontSize(): number;
    /**
     * 字体设置
     * @param {string} value 字体
     */
    set fontFamily(arg: string);
    get fontFamily(): string;
    /**
     * 绘制字的填充颜色
     * @param {string} value css颜色
     */
    set fillStyle(arg: string);
    get fillStyle(): string;
    /**
     * 绘制字的描边粗细
     */
    set lineWidth(arg: number | undefined);
    get lineWidth(): number | undefined;
    /**
     * 绘制字方块的内边距
     * @param {Array<number>} value x轴与y轴的边距
     */
    set padding(arg: number[]);
    get padding(): number[];
}
import { GeoMesh } from "../GeoMesh";
