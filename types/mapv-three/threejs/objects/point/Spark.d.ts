/**
 * 烟花，它继承自GeoLine类，通过该类可以可以利用配置产生绚烂的烟花效果
 * ```js
 * const spark = engine.add(new mapvthree.Spark({
 *     color: 0xff0cc0, // 烟花颜色
 *     height: 200, // 烟花高度
 *     speed: 0.1, // 动画速度
 *     idle: 500, // 动画的间隔时间
 *     tailLength: 80, // 动画拖尾长度
 *     emissive: new Color(0x0000ff)
 * }));
 * ```
 * ![](media://spark.png)
 */
export class Spark extends GeoLine {
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** 烟花颜色 */ color: any;
    /** 是否通过数据携带颜色配置 */ vertexColors: any;
    /** 烟花高度 */ height: any;
    /** 是否通过数据携带高度配置 */ vertexHeights: any;
    /** 动画速度 */ speed: any;
    /** 动画拖尾长度 */ tailLength: any;
    /** 动画的间隔时间，单位：毫秒 */ idle: any;
    /** 自发光 */ emissive: any;
}
import { GeoLine } from "../GeoLine";
