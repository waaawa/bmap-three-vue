export class FlyLineLayer {
    /**
     *
     * @extends Object3D
     * @param {object} args 参数
     * @param {any} args.color 线的颜色。可为Vector3或Array，默认值为红色
     * @param {number} args.lineWidth 线的宽度，默认值为1
     * @param {boolean} args.sizeAttenuation 大小是否会被相机深度衰减，默认值为true
     * @param {number} args.dashArray 虚线的间隙的大小，为0时该线段为实线，大于0为虚线，范围0-1，默认值为0
     * @param {number} args.dashRatio 实线长度与间隙长度之比，dashArray大于0时有效，默认值为1
     * @param {number} args.dashOffset 虚线的线横向偏移量与贴图的横向偏移量，dashArray大于0时有效，默认值为0
     * @param {boolean} args.hasBasicLine 是否开启基础实线，dashArray大于0时有效，默认值为false
     * @param {number} args.basicLineWidth 基础线宽，开启基础实线时有效，默认值为1
     * @param {any} args.basicLineColor 基础线颜色，开启基础实线时有效，默认值为红色
     * @param {number} args.basicLineOpacity 基础线透明度，开启基础实线时有效，默认值为1
     * @param {boolean} args.basicLineTransparent 是否开启基础线透明度，默认值是由初始化时的basicLineOpacity决定，
     *        basicLineOpacity<1时为true，basicLineOpacity=1时为false
     * @param {boolean} args.basicLineDepthWrite 基础线，渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {boolean} args.basicLineSizeAttenuation 大小是否会被相机深度衰减，默认值为true
     * @param {string} args.map 纹理图片地址，默认值为null
     * @param {object} args.repeat 纹理在曲面上沿每个方向U和V重复多少次，默认值为new Vector2(1, 1)
     * @param {number} args.opacity 线的透明度，值小于1时transparent为true，值等于1时transparent为false，默认值为1
     * @param {number} args.transparent 是否开启透明度，默认值是由初始化时的opacity决定，opacity<1时为true，opacity=1时为false
     * @param {number} args.speed 虚线模式下或有纹理时可开启动画，用于控制速度，正负值控制方向，默认值为1
     * @param {boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
     * @param {boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {number} args.pointCount 抛物线分段数量。仅调用setData()方法起作用，默认值为50；
     * @param {number} args.height 抛物线高度，仅调用setData()方法起作用，默认值为10
     * @param {boolean} args.isCurve 是否开启抛物线模式。仅调用setData()方法起作用，默认值为false
     * @param {boolean} args.isCircle 是否显示端点处的底座，默认为圆形底座，默认值为false
     * @param {object} args.circleStart 起点自定义底座Mesh，仅isCircle为true时生效。默认值为new Mesh(circleGeometry, material)
     * @param {object} args.circleEnd 终点自定义底座Mesh，仅isCircle为true时生效。默认值为circleStart的clone
     * @param {boolean} args.flipX 贴图横向反转180，默认值为false
     *
     */
    constructor(args?: {
        color: any;
        lineWidth: number;
        sizeAttenuation: boolean;
        dashArray: number;
        dashRatio: number;
        dashOffset: number;
        hasBasicLine: boolean;
        basicLineWidth: number;
        basicLineColor: any;
        basicLineOpacity: number;
        basicLineTransparent: boolean;
        basicLineDepthWrite: boolean;
        basicLineSizeAttenuation: boolean;
        map: string;
        repeat: object;
        opacity: number;
        transparent: number;
        speed: number;
        depthTest: boolean;
        depthWrite: boolean;
        pointCount: number;
        height: number;
        isCurve: boolean;
        isCircle: boolean;
        circleStart: object;
        circleEnd: object;
        flipX: boolean;
    });
    size: number;
    height: number;
    color: Object;
    sizeAttenuation: boolean;
    pointCount: number;
    lineWidth: number;
    group: any;
    lineMesh: any;
    line: any;
    hasBasicLine: boolean;
    basicLineWidth: number;
    basicLineColor: Object;
    basicLineOpacity: number;
    basicLineTransparent: boolean;
    basicLineDepthWrite: boolean;
    basicLineSizeAttenuation: boolean;
    map: string | null;
    repeat: Object;
    opacity: number;
    transparent: number | boolean;
    dashArray: number;
    dashRatio: number;
    dashOffset: number;
    isBasicLineBloom: any;
    speed: number;
    depthTest: boolean;
    depthWrite: boolean;
    isCurve: boolean;
    boundingBox: any;
    isCircle: boolean;
    circleStart: object;
    circleEnd: object;
    startPoint: Object | null;
    endPoint: Object | null;
    flipX: boolean;
    /** @private */
    private afterAddToEngine;
    engine: any;
    /**
     *
     * 两个点绘制飞线,会进行插值
     *
     * @param {Object} startPoint 开始点
     * @param {Object} endPoint  结束点
     */
    setData(startPoint: Object, endPoint: Object): void;
    /**
     *
     * 根据点数组绘制飞线，不进行插值
     * @param {array} vertices 点数组[[x,y],[x,y],[x,y],[x,y],[x,y]]或者[{x:,y:},{x:,y:},{x:,y:}]
     */
    setVertices(vertices: any): false | undefined;
    /**
     *
     * 点数组生成飞线
     * @param {array} vertices 点数组[[x,y],[x,y],[x,y],[x,y],[x,y]]或者[{x:,y:},{x:,y:},{x:,y:}]
     */
    createMeshLine(points: any): void;
    /**
     *
     * 更新位置
     *
     */
    /**
     *
     * 内存释放
     *
     */
    dispose(): void;
    /**
     * 射线拾取
     */
    raycast(raycaster: any, intersects: any): void;
    meshRaycast(raycaster: any, intersects: any): void;
}
