/**
 * 标签，绘制类型是三角形
 * ```js
 * const label = engine.add(new mapvthree.Label({
 *     width: 100,
 *     height: 30,
 *     background: 'http://url.png',
 *     padding: [10, 0, 0, 20]
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * data.setAttribute('text', 'text');
 * label.dataSource = data;
 * ```
 * ![](media://label.png)
 */
export class Label extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * background?: string, vertexBackgrounds?: boolean, padding?: Array<number>,
     * width?: number, height?: number, fontSize?: number | string, fillStyle?: string,
     * offset?: Array<number>, opacity?: number, keepSize?: boolean, flat?: boolean
     * }} parameters 传入参数对象
     * @param {string} parameters.background 背景图片的url
     * @param {boolean} parameters.vertexBackgrounds 是否通过数据携带背景图url
     * @param {boolean} parameters.vertexVisible 是否通过数据携带背景图url
     * @param {Array<number>} parameters.padding 文字在标签背景的内边距，默认[0, 0, 0, 0]
     * @param {number} parameters.width 标签的宽度
     * @param {number} parameters.height 标签的高度
     * @param {number | string} parameters.fontSize 字号大小，默认14，可传字符串'auto'自动设置文字大小
     * @param {string} parameters.fillStyle 绘制字的填充颜色，默认白色
     * @param {Array<number>} parameters.offset 标签的偏移，默认为[0, 0]
     * @param {number} parameters.opacity 整体透明度系数
     * @param {boolean} parameters.keepSize 是否保持大小（即按像素为单位绘制），默认开启
     * @param {boolean} parameters.flat 是否贴地扁平绘制
     * @param {boolean} parameters.boxSize 雪碧图个体最大数量，默认10
     */
    constructor(parameters: {
        background?: string;
        vertexBackgrounds?: boolean;
        padding?: Array<number>;
        width?: number;
        height?: number;
        fontSize?: number | string;
        fillStyle?: string;
        offset?: Array<number>;
        opacity?: number;
        keepSize?: boolean;
        flat?: boolean;
    });
    /** @protected */ protected isEventEntitySupported: boolean;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** @protected */ protected canvas: any;
    /** @protected */ protected ctx: CanvasRenderingContext2D | null;
    /** @protected */ protected texture: any;
    /** @protected */ protected iconUrlHash: Map<any, any>;
    /** @protected */ protected labelHash: Map<any, any>;
    /** @protected */ protected boxHash: Map<any, any>;
    /** @protected */ protected gap: number[];
    /** @private */ private _padding;
    /** @private */ private _fillStyle;
    /** @private */ private oldMapTextureRes;
    /**
     * 文字在标签背景的内边距，默认[0, 0, 0, 0]
     * @param {Array<number>} value 同css padding属性
     */
    set padding(arg: number[]);
    get padding(): number[];
    boxes: any[];
    boxSize: any;
    /**
     * @internal
     * 根据数据获取整张纹理以及相应的uv
     * @param {*} data 点数据
     * @param {*} bgPropName icon字段
     * @param {*} textPropName 文字字段
     * @returns {object} 纹理
     */
    getTextureAndHash: (data: any, background: any, bgPropName: any, textPropName: any, isDataChanged: any) => object;
    /**
     * @internal
     * @param {string | object} url 图片路径
     * @param {function} callback 回调函数
     */
    url2canvas(url: string | object, callback: Function): void;
}
import { GeoMesh } from "../GeoMesh";
