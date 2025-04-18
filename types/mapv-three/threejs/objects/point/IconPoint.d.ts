/**
 * 图标，绘制的类型是Point
 * ```js
 * const text = engine.add(new mapvthree.IconPoint({
 *     color: 'rgba(0, 0, 0, 0)',
 *     vertexSizes: true,
 *     vertexIcons: true,
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * data.setAttribute('size', 'size').setAttribute('icon', 'icon');
 * text.dataSource = data;
 * ```
 * ![](media://iconpoint.png)
 */
export class IconPoint extends GeoPoints {
    /**
     * 构造函数
     * @param {{
     * color?: string, vertexColors?: boolean, opacity?: number,
     * size?: number, vertexSizes?: boolean, mapSrc?: string, vertexIcons?: boolean}} parameters 传入参数对象
     * @param {string} parameters.color 点颜色
     * @param {boolean} parameters.vertexColors 是否通过数据携带颜色配置
     * @param {number} parameters.size 点尺寸
     * @param {boolean} parameters.vertexSizes 是否通过数据携带尺寸配置
     * @param {string} parameters.mapSrc 图标的url路径
     * @param {boolean} parameters.vertexIcons 是否通过数据携带图标url配置
     * @param {number} parameters.opacity 透明度整体系数，默认1
     */
    constructor(parameters: {
        color?: string;
        vertexColors?: boolean;
        opacity?: number;
        size?: number;
        vertexSizes?: boolean;
        mapSrc?: string;
        vertexIcons?: boolean;
    });
    /** @private */ private canvas;
    /** @private */ private ctx;
    /** @private */ private oldMapTextureRes;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** @protected */ protected iconUrlHash: Map<any, any>;
    /** @protected */ protected boxHash: Map<any, any>;
    /** @protected */ protected gap: number[];
    /** 点颜色 */ color: any;
    /** 是否通过数据携带颜色配置 */ vertexColors: any;
    /** 是否通过数据携带尺寸配置 */ vertexSizes: any;
    /** 图标的url路径 */ mapSrc: any;
    /** 是否通过数据携带图标url配置 */ vertexIcons: any;
    /** 透明度整体系数 */ opacity: any;
    texture: any;
    boxes: any[];
    boxSize: any;
    /**
     * @internal
     * 根据数据获取整张纹理以及相应的uv
     * @param {*} data 点数据
     * @param {*} texturePropName icon字段
     * @param {*} size 点尺寸
     * @returns {object} 纹理
     */
    getTextureAndHash: (data: any, texturePropName: any, width: any, height: any, isDataChanged: any) => object;
}
import { GeoPoints } from "../GeoPoints";
