/**
 * 无厚度的墙
 * ```js
 * const wall = engine.add(new mapvthree.Wall());
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * wall.dataSource = data;
 * ```
 * ![](media://wall.png)
 */
export class Wall extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * height?: number, color?: string, vertexColors?: boolean, emissive?: string, map?: string,
     * opacity?: number, minOpacity?: number, maxOpacity?: number,
     * enbaleAnimation?: boolean, animationSpeed?: number, animationTailType?: 1 | 2 | 3,
     * animationTailRatio?: number, animationTailLength?: number, animationIdle?: number
     * }} parameters 传入参数对象
     * @param {number} parameters.height 墙的高度，默认是100
     * @param {string} parameters.color 墙的颜色
     * @param {boolean} parameters.vertexColors 是否通过数据携带颜色配置
     * @param {string} parameters.emissive 自发光的颜色
     * @param {string} parameters.map 纹理贴图的路径
     * @param {number} parameters.opacity 墙的整体透明系数，默认为1
     * @param {number} parameters.minOpacity 墙的最低透明度
     * @param {number} parameters.maxOpacity 墙的最高透明度
     * @param {boolean} parameters.enableAnimation 是否开启墙动画
     * @param {number} parameters.animationSpeed 动画速度
     * @param {number} parameters.animationTailType 动画类型，1按墙长度比例，需设置`animationTailRatio`属性，2按固定长度，需设置`animationTailLength`属性，3是垂直方向动画，4是条纹上升动画
     * @param {number} parameters.animationTailRatio 拖尾动画长度比例
     * @param {number} parameters.animationTailLength 拖尾动画真实长度
     * @param {number} parameters.animationIdle 拖尾动画间隔时间，单位：毫秒
     * @param {number} parameters.animationRatio 条纹上升动画一组实虚线中实线所占比，范围0-1之间，仅在animationTailType=4.0时生效
     * @param {number} parameters.animationBales 条纹上升动画显示组数，值大于等于1，仅在animationTailType=4.0时生效
     */
    constructor(parameters: {
        height?: number;
        color?: string;
        vertexColors?: boolean;
        emissive?: string;
        map?: string;
        opacity?: number;
        minOpacity?: number;
        maxOpacity?: number;
        enbaleAnimation?: boolean;
        animationSpeed?: number;
        animationTailType?: 1 | 2 | 3;
        animationTailRatio?: number;
        animationTailLength?: number;
        animationIdle?: number;
    });
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** 墙的高度 */ height: any;
    /** 墙的颜色 */ color: any;
    /** 是否通过数据携带颜色配置 */ vertexColors: any;
    /** 自发光的颜色 */ emissive: any;
    /** 纹理贴图的路径 */ map: any;
    /** 墙的整体透明系数 */ opacity: any;
    /** 墙的最低透明度 */ minOpacity: any;
    /** 墙的最高透明度 */ maxOpacity: any;
    /** 是否开启墙动画 */ enableAnimation: any;
    /** 动画速度 */ animationSpeed: any;
    /** 动画类型，1按墙长度比例，需设置`animationTailRatio`属性，2按固定长度，需设置`animationTailLength`属性，3是垂直方向动画，4是条纹上升动画 */ animationTailType: any;
    /** 拖尾动画长度比例 */ animationTailRatio: any;
    /** 拖尾动画真实长度 */ animationTailLength: any;
    /** 拖尾动画间隔时间，单位：毫秒 */ animationIdle: any;
    /** 条纹上升动画一组实虚线中实线所占比 */ animationRatio: any;
    /** 条纹上升动画显示组数 */ animationBales: any;
}
import { GeoMesh } from "../GeoMesh";
