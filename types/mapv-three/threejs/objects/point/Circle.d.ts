/**
 * ```javascript
 * const circle = engine.add(new mapvthree.Circle({
 *  color: '#f4f27a',
 *  borderWidth: 20,
 *  borderColor: '#b73145',
 *  opacity: 0.8,
 *  vertexSizes: true
 * }))
 * ```
 * ![](media://circle.png)
 */
export class Circle extends GeoInstancedMesh {
    /**
     * 构造函数
     * @param {{color?: string, size?: number, opacity?: number,
     * type?: number, borderColor?: string}} parameters 传入参数对象
     * @param {string} parameters.color 颜色
     * @param {number} parameters.size 尺寸
     * @param {number} parameters.opacity 透明度
     * @param {number} parameters.type 类型
     * @param {number} parameters.borderWidth 圆边框的宽度
     * @param {string} parameters.borderColor 圆边框的颜色
     * @param {boolean} parameters.vertexColors 根据数据指定颜色
     * @param {boolean} parameters.vertexSizes 根据数据指定大小
     */
    constructor(parameters: {
        color?: string;
        size?: number;
        opacity?: number;
        type?: number;
        borderColor?: string;
    });
    /** 圆的颜色 */ color: any;
    /** 圆的尺寸 */ size: any;
    /** 圆的透明度 */ opacity: any;
    /** 圆的边框颜色 */ borderColor: any;
    /** 圆的边框宽度 */ borderWidth: any;
}
import { GeoInstancedMesh } from "../GeoInstancedMesh";
