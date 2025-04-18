/**
 * 标签
 * ```
 * const label = new BasicLabel({
 *       scaleNum: 2,
 *       sizeAttenuation: true,
 *       center: { x: 0, y: 0 },
 *       // 画布样式
 *       style: {
 *           // 宽
 *           width: 200,
 *           // 高
 *           height: 100,
 *           // 背景图
 *           // backgroundImage: 'https://mapdata.bj.bcebos.com/images/guangzhou/q-robocop-info-mini@3x.png',
 *           // 上内边距
 *           paddingTop: 42,
 *           // 左内边距
 *           paddingLeft: 42,
 *           // 背景颜色
 *           backgroundColor: '#333',
 *           // 边框颜色
 *           borderColor: '#fff',
 *           // 边框宽度
 *           borderWidth: 2
 *       },
 *       content: [
 *           // 内容配置
 *           {
 *               // 宽
 *               width: 30,
 *               // 高
 *               height: 30,
 *               // 背景色
 *               backgroundColor: 'green',
 *               // 文字列表
 *               textList: [
 *                   {
 *                       text: '测试',
 *                       fontSize: 12,
 *                       color: '#E2EBFA',
 *                       position: [8, 3],
 *                       textAlign: 'left',
 *                       fontFamily: 'FZLTZHK--GBK1-0'
 *                   },
 *                   {
 *                       text: '123',
 *                       fontSize: 12,
 *                       color: '#E2EBFA',
 *                       position: [8, 20],
 *                       textAlign: 'left',
 *                       fontFamily: 'HyperspaceRace-Bold'
 *                   }
 *               ]
 *           },
 *           {
 *               // 宽
 *               width: 30,
 *               // 高
 *               height: 30,
 *               // 背景图
 *               backgroundImage: 'https://mapdata.bj.bcebos.com/images/yizhuang/cross-circle.png',
 *               // 文字列表
 *               textList: [
 *                   {
 *                       // iconfont编号
 *                       icon: '&#xe64c;',
 *                       fontSize: 12,
 *                       color: '#E2EBFA',
 *                       position: [8, 3],
 *                       textAlign: 'left',
 *                       // iconfont字体
 *                       fontFamily: 'NewIconFont'
 *                   }
 *               ]
 *           },
 *       ]
 *   });
 * ```
 */
export class BasicLabel extends TrafficObject {
    /**
     * @private
     * @param {*} style
     * @param {*} canvas
     * @returns
     */
    private static initBackGround;
    /**
     * @private
     * 绘制内容
     * @param {*} style
     * @param {*} contextList
     * @param {*} canvas
     * @param {*} factor
     * @returns
     */
    private static renderContent;
    /**
     * @ignore
     * @param width
     * @param height
     * @param texture
     * @returns
     */
    static getRectangle(width: any, height: any, texture: any, config?: {}): any;
    /**
     * @ignore
     * @param url
     * @param resourcePath
     * @returns
     */
    static loadImg(url: any, resourcePath?: string): Promise<any>;
    /**
     * @ignore
     */
    static getTextWidth(canvas: any, textInfo: any): any;
    /**
     * @ignore
     * @param ctx
     * @param content
     * @param factor
     * @param position
     * @returns
     */
    static drawText(ctx: any, content: any, factor: any, position: any): void;
    /**
     * @ignore
     * @param position
     * @param size
     * @returns
     */
    static addActiveArea(position: any, size: any): any;
    /**
     *
     * 利用canvas绘制矩形框
     * @param {Object} ctx canvasContainer
     * @param {number} x 左侧开始位置
     * @param {number} y 上侧开始位置
     * @param {number} w 宽度
     * @param {number} h 高度
     * @param {number} r 圆角半径
     *
     */
    static roundRect(ctx: Object, x: number, y: number, w: number, h: number, r: number): void;
    /**
     * @ignore
     * @description: 基于requestAnimationFrame的setInterval
     * @param {*} cb 执行函数
     * @param {*} range 执行间隔
     * @return {*} requestAnimationFrame
     */
    static setInterval(cb: any, range: any, setCallback: any): any;
    constructor(args: any);
    /** @private */ private _point;
    /** @private */ private _position;
    /** @private */ private _visible;
    /** @private */ private name;
    /** @private */ private matrixWorldNeedsUpdate;
    /** @private */ private mainView;
    /** @private */ private texture;
    /** @private */ private sprite;
    /** @private */ private scaleNum;
    /** @private */ private center;
    /** @private */ private offset;
    /** @private */ private sizeAttenuation;
    /** @private */ private constructionConfig;
    /** @private */ private factor;
    /** @private */ private animateId;
    /** @private */ private animationCanvas;
    /** @private */ private drawCanvas;
    /** @private */ private style;
    /** 热区列表 */ activeAreaList: any[];
    /** 是否始终朝向屏幕 */ alwaysToScreen: any;
    /** 当前模板放大倍数 */ size: number;
    /** 标签类型 */ labelType: any;
    /** 额外附加属性 */ extraProps: any;
    handleBeforeRender: () => void;
    /**
     * 计算尺寸衰减比例
     * @ignore
     * @returns {void}
     */
    computeSizeAttenuationScale(): void;
    /**
     * @ignore
     * @param args
     */
    init(args?: {}): Promise<void>;
    /**
     * 重新绘制标签内容
     * @param contextList
     */
    drawContent(contextList: any, setScaleStatus?: boolean): Promise<void>;
    /**
     * @ignore
     * @param type
     * @param time
     * @param range
     */
    startAnimation(type: any, time: any, range?: number): void;
    /**
     * @ignore
     * @param raycaster
     * @param intersects
     * @returns
     */
    raycast(raycaster: any, intersects: any): any;
    /**
     *
     * 内存释放
     *
     */
    dispose(): void;
    /**
     * @ignore
     * @param camera
     */
    faceToCamera(camera: any): void;
}
import { TrafficObject } from "./TrafficObject";
