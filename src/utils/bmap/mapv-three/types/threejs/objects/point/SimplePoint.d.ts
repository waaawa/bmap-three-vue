/**
 * 简单点
 * ```js
 * const point = engine.add(new mapvthree.SimplePoint({
 *     color: 'rgba(250, 90, 50, 1)',
 *     size: 50,
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * point.dataSource = data;
 * ```
 * ![](media://simple_point.png)
 */
export class SimplePoint extends GeoPoints {
    /**
     * 构造函数
     * @param {{
     * color?: string, vertexColors?: boolean, opacity?: number,
     * size?: number, vertexSizes?: boolean, emissive?: string}} parameters 传入参数对象
     * @param {string} parameters.color 点颜色
     * @param {boolean} parameters.vertexColors 是否通过数据携带颜色配置
     * @param {number} parameters.size 点尺寸
     * @param {boolean} parameters.vertexSizes 是否通过数据携带尺寸配置
     * @param {number} parameters.opacity 透明度整体系数，默认1
     * @param {string} parameters.emissive 自发光颜色
     */
    constructor(parameters: {
        color?: string;
        vertexColors?: boolean;
        opacity?: number;
        size?: number;
        vertexSizes?: boolean;
        emissive?: string;
    });
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** 点颜色 */ color: any;
    /** 是否通过数据携带颜色配置 */ vertexColors: any;
    /** 是否通过数据携带尺寸配置 */ vertexSizes: any;
    /** 透明度整体系数 */ opacity: any;
    /** 自发光颜色 */ emissive: any;
}
import { GeoPoints } from "../GeoPoints";
