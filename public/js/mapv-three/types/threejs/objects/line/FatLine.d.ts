/**
 * 有宽度的线，可设置拐角、端头，可实现虚线，可实现线动画
 * ```js
 * const line = engine.add(new mapvthree.FatLine());
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * line.dataSource = data;
 * ```
 * ![](media://fatline.png)
 */
export class FatLine extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * lineJoin?: 'miter' | 'bevel' | 'round', lineCap?: 'butt' | 'square' | 'round', miterLimit?: number,
     * lineWidth?: number, keepSize?: boolean,
     * color?: string, vertexColors?: boolean, emissive?: string, map?: string,
     * opacity?: number, alphaTest?: number,
     * dashed?: boolean, dashArray?: number, dashOffset?: number, dashRatio?: number,
     * enbaleAnimation?: boolean, enableAnimationChaos?: boolean, animationInterval?: number,
     * animationSpeed?: number, animationTailType?: 1 | 2,
     * animationTailRatio?: number, animationTailLength?: number, animationIdle?: number
     * }} parameters 传入参数对象
     * @param {'miter' | 'bevel' | 'round'} parameters.lineJoin 线拐角的形状，参数同canvas的画线，默认miter
     * @param {'butt' | 'square' | 'round'} parameters.lineCap 端头角的形状，参数同canvas的画线，默认butt
     * @param {number} parameters.miterLimit 拐角如果是miter，则超过该长度自动变平角，默认为线宽的2倍
     * @param {number} parameters.lineWidth 线的宽度，默认是4
     * @param {number} parameters.height 线的高度
     * @param {boolean} parameters.keepSize 是否保持宽度（即按像素为单位绘制）
     * @param {string} parameters.color 线的颜色
     * @param {boolean} parameters.vertexColors 是否通过数据携带颜色配置
     * @param {string} parameters.emissive 自发光的颜色
     * @param {string} parameters.mapSrc 纹理贴图的路径
     * @param {string} parameters.mapGap 纹理贴图的间隔，间隔距离计算方式为该值乘线宽，默认50
     * @param {number} parameters.opacity 线的整体透明系数，默认为1
     * @param {number} parameters.alphaTest 开启透明剔除，透明度小于该值的部分都不渲染，默认为0
     * @param {boolean} parameters.dashed 是否渲染虚线
     * @param {number} parameters.dashArray 每段虚线（实心加空心部分）的长度
     * @param {number} parameters.dashOffset 虚线起始绘制部分的偏移
     * @param {number} parameters.dashRatio 实心部分占每段长度的占比
     * @param {boolean} parameters.enbaleAnimation 是否开启线动画
     * @param {boolean} parameters.enableAnimationChaos 是否开启不规则动画
     * @param {number} parameters.animationInterval 动画重复的间隔占拖尾部分的比例，值越大，重复之间的间隔越大，0表示不重复
     * @param {number} parameters.animationSpeed 动画速度
     * @param {number} parameters.animationTailType 动画类型，1按线长度比例，需设置`animationTailRatio`属性，2按固定长度，需设置`animationTailLength`属性
     * @param {number} parameters.animationTailRatio 拖尾动画长度比例
     * @param {number} parameters.animationTailLength 拖尾动画真实长度
     * @param {number} parameters.animationIdle 拖尾动画间隔时间，单位：毫秒
     */
    constructor(parameters: {
        lineJoin?: 'miter' | 'bevel' | 'round';
        lineCap?: 'butt' | 'square' | 'round';
        miterLimit?: number;
        lineWidth?: number;
        keepSize?: boolean;
        color?: string;
        vertexColors?: boolean;
        emissive?: string;
        map?: string;
        opacity?: number;
        alphaTest?: number;
        dashed?: boolean;
        dashArray?: number;
        dashOffset?: number;
        dashRatio?: number;
        enbaleAnimation?: boolean;
        enableAnimationChaos?: boolean;
        animationInterval?: number;
        animationSpeed?: number;
        animationTailType?: 1 | 2;
        animationTailRatio?: number;
        animationTailLength?: number;
        animationIdle?: number;
    });
    isEventEntitySupported: boolean;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** 线拐角的形状，参数同canvas的画线 */ lineJoin: any;
    /** 端头角的形状，参数同canvas的画线 */ lineCap: any;
    /** 拐角如果是miter，则超过该长度自动变平角 */ miterLimit: any;
    /** 是否保持宽度（即按像素为单位绘制） */ keepSize: any;
    /** 线的颜色 */ color: any;
    /** 是否通过数据携带颜色配置 */ vertexColors: any;
    /** 自发光的颜色 */ emissive: any;
    /** 纹理贴图的路径 */ map: any;
    /** 线的整体透明系数 */ opacity: any;
    /** 开启透明剔除，透明度小于该值的部分都不渲染，默认为0 */ alphaTest: any;
    /** 是否渲染虚线 */ dashed: any;
    /** 每段虚线（实心加空心部分）的长度 */ dashArray: any;
    /** 虚线起始绘制部分的偏移 */ dashOffset: any;
    /** 实心部分占每段长度的占比 */ dashRatio: any;
    /** 是否开启线动画 */ enbaleAnimation: any;
    /** 是否开启不规则动画 */ enableAnimationChaos: any;
    /** 动画速度 */ animationSpeed: any;
    /** 动画类型，1按线长度比例，需设置`animationTailRatio`属性，2按固定长度，需设置`animationTailLength`属性 */ animationTailType: any;
    /** 拖尾动画长度比例 */ animationTailRatio: any;
    /** 拖尾动画真实长度 */ animationTailLength: any;
    /** 拖尾动画间隔时间，单位：毫秒 */ animationIdle: any;
    set lineWidth(arg: number | undefined);
    /**
     * 线的宽度
     */
    get lineWidth(): number | undefined;
}
import { GeoMesh } from "../GeoMesh";
