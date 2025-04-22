/**
 * 图标
 * ```js
 * const icon = engine.add(new mapvthree.Icon({
 *     fillStyle: 'red',
 *     fontSize: 16,
 *     flat: false,
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * data.setAttribute('icon', 'icon');
 * icon.dataSource = data;
 * ```
 * ![](media://icon.png)
 */
export class Icon extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * mapSrc?: string, vertexIcons?: boolean, width?: number, height?: number,
     * offset?: Array<number>, opacity?: number, keepSize?: boolean, flat?: boolean
     * }} parameters 传入参数对象
     * @param {string} parameters.mapSrc 图标url
     * @param {boolean} parameters.vertexIcons 是否通过数据携带图标url
     * @param {boolean} parameter.vertexColors 是否通过数据携带颜色
     * @param {number} parameters.width 图标的宽度
     * @param {number} parameters.height 图标的高度
     * @param {Array<number>} parameters.offset 图标的偏移，默认为[0, 0]
     * @param {number} parameters.opacity 整体透明度系数
     * @param {boolean} parameters.keepSize 是否保持大小（即按像素为单位绘制），默认开启
     * @param {boolean} parameters.flat 是否贴地扁平绘制
     * @param {string}  parameter.color 图标颜色
     */
    constructor(parameters: {
        mapSrc?: string;
        vertexIcons?: boolean;
        width?: number;
        height?: number;
        offset?: Array<number>;
        opacity?: number;
        keepSize?: boolean;
        flat?: boolean;
    });
    /** @protected */ protected isEventEntitySupported: boolean;
    /** @private */ private _padding;
    /** @private */ private oldMapTextureRes;
    /** @protected */ protected texture: any;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** @protected */ protected canvas: any;
    /** @protected */ protected ctx: CanvasRenderingContext2D | null;
    /** @protected */ protected iconUrlHash: Map<any, any>;
    /** @protected */ protected boxHash: Map<any, any>;
    /** @protected */ protected gap: number[];
    boxes: any[];
    boxSize: any;
    originCenter: any;
    /**
     * @internal
     * 根据数据获取整张纹理以及相应的uv
     * @param {*} data 点数据
     * @param {*} texturePropName icon字段
     * @param {*} width 图片宽
     * @param {*} height 图片高
     * @returns {object} 纹理
     */
    getTextureAndHash: (data: any, texturePropName: any, width: any, height: any, isDataChanged: any) => object;
    /**
     * 绘制图片雪碧图的内边距
     * @param {Array<number>} value x轴与y轴的边距
     */
    set padding(arg: number[]);
    get padding(): number[];
    getVertexPosition(index: any, target: any): any;
    getPixelSize(position: any): number;
    /** @protected */
    protected getEntityIndexByFace(faceIndex: any, pointIndex: any): any;
    _computeIntersections: any;
}
import { GeoMesh } from "../GeoMesh";
