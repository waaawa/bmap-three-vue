/**
 * ```javascript
 * new Polyline({
 *  linewidth: 3,
 *  flatVertices: [[0, 0, 0], [10, 0, 0], [10, 10, 0]],
 *  vertexColors: true,
 *  colors: [1, 0, 0, 1, 1, 0],
 *  dashed: true,
 *  sizeAttenuation: false,
 *  parabola: true,
 *  parabolaAxleHeight: [10],
 *  gapSize: 3,
 *  startOpacity: .5,
 * })
 * ```
 */
export class Polyline {
    /**
         *
         * @param {object} args 参数
         * @param {array} args.vertices 坐标
         * @param {boolean} args.vertexColors 是否使用顶点颜色，默认值为false
         * @param {any} args.color 线的颜色。vertexColors为false时，表示线为纯色，color可为Vector3或Array，默认值为红色；
         *        vertexColors为true时，表示启用顶点颜色，color为数组，默认值为[]
         * @param {number} args.linewidth 线的宽度，默认值为1
         * @param {boolean} args.dashed 是否开启虚线模式，默认值为false
         * @param {number} args.dashScale 线条中虚线部分的占比，dashed为true时有效，默认值为1
         * @param {number} args.dashSize 虚线的实线的大小，dashed为true时有效，默认值为1
         * @param {number} args.gapSize 虚线的间隙的大小，dashed为true时有效，默认值为1
         * @param {number} args.dashOffset 虚线的线偏移量，dashed为true时有效，默认值为0
         * @param {number} args.opacity transparent为true时生效，线的透明度，默认值是1
         * @param {number} args.transparent 是否开启opcity，默认值为true
         * @param {boolean} args.parabola 是否开启抛物线模式，该模式下将改变线段上点的z坐标，默认值为false
         * @param {any} args.parabolaAxleHeight 抛物线模式下的轴高，值为number类型时，所有抛物线的轴高均为该值；若为number数组，
         *              则线段轴高与数组内值一一对应，若数组不够则轴高为两点间长度的1/3。默认值为0
         * @param {} args.interpolationTimes 抛物线模式下，每段线间的插值量。值为number类型时，所有线段的差值均为该值；
         *           若为number数组，则每段线间的插值量与数组内值一一对应，若数组不够则为默认值。默认值为20
         * @param {any} args.offset 线的位置偏移量，默认值是[0, 0, 0]
         * @param {number} args.speed 虚线模式下开启动画时，用于控制速度，默认值为1
         * @param {boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
         * @param {boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
         * 以下为fatline独有属性
         * @param {number} args.startOpacity 线起始透明度，范围0-1，默认值1.
         * @param {number} args.endOpacity 线终止透明度，范围0-1，默认值1.
         * @param {boolean} args.sizeAttenuation 大小是否会被相机深度衰减，默认值为true
         * @param {object} args.resolution 视口分辨率，默认值为视口宽高
         * @param {boolean} args.alphaToCoverage 启用alpha to coverage. 只能在开启了MSAA的渲染环境中使用，默认为false
         * @param {boolean} args.useTexture 是否使用贴图，默认值为false不使用
         * @param {object} args.map 纹理图片地址或Texture类，仅useTexture为true时有效，默认值为null
         * @param {object} args.mapOffset 贴图的水平和竖直偏移量，仅useTexture为true时有效。默认值为Vector2(0,0)
         * @param {object} args.repeat 纹理在曲面上沿每个方向U和V重复多少次，仅useTexture为true时有效，默认new Vector2(1, 1)
         *
         */
    constructor(args?: {
        vertices: any;
        vertexColors: boolean;
        color: any;
        linewidth: number;
        dashed: boolean;
        dashScale: number;
        dashSize: number;
        gapSize: number;
        dashOffset: number;
        opacity: number;
        transparent: number;
        parabola: boolean;
        parabolaAxleHeight: any;
        interpolationTimes: any;
        offset: any;
        speed: number;
        depthTest: boolean;
        depthWrite: boolean;
        startOpacity: number;
        endOpacity: number;
        sizeAttenuation: boolean;
        resolution: object;
        alphaToCoverage: boolean;
        useTexture: boolean;
        map: object;
        mapOffset: object;
        repeat: object;
    });
    size: number;
    vertices: any;
    flatVertices: any[];
    vertexColors: boolean;
    color: any;
    linewidth: number;
    dashed: boolean;
    dashScale: number;
    dashSize: number;
    gapSize: number;
    dashOffset: number;
    opacity: number;
    offset: Object;
    parabola: boolean;
    parabolaAxleHeight: any;
    interpolationTimes: any;
    speed: number;
    transparent: number | boolean;
    depthTest: boolean;
    depthWrite: number | boolean;
    boundingBox: any;
    line: Object | null;
    _geometryType: string;
    startOpacity: any;
    endOpacity: any;
    sizeAttenuation: boolean;
    hasMapClip: any;
    resolution: object;
    alphaToCoverage: boolean;
    useTexture: boolean;
    repeat: object;
    mapOffset: object;
    map: any;
    /** @private */
    private afterAddToEngine;
    engine: any;
    /**
     *
     * 初始化
     *
     */
    init(): void;
    matrixAutoUpdate: boolean | undefined;
    /**
     * 设置几何点数组
     * @param {array} vertices 点数组
     */
    setVertices(vertices: any): void;
    /**
     *
     * 改变颜色
     *
     * @param {object} color 颜色
     *
     */
    setColor(color: object): void;
    /**
     *
     * 获取颜色
     *
     * @return {object}  color 颜色
     *
     */
    getColor(): object;
    /**
     * 设置偏移量
     * @param {any} offset 偏移量
     */
    setOffset(offset: any): void;
    /**
     * 设置抛物线的轴线控制高度
     * @param {any} height 高度
     */
    setParabolaAxleHeight(height: any): void;
    /**
     * 设置抛物线两点间的插值量
     * @param {any} num 差值量
     */
    setInterpolationTimes(num: any): void;
    /**
     * 设置宽度
     * @param {number} width 宽度
     */
    setLinewidth(width: number): void;
    /**
     * 射线拾取
     */
    raycast(raycaster: any, intersects: any): void;
    /**
     *
     * 释放内存
     *
     */
    dispose(): void;
}
