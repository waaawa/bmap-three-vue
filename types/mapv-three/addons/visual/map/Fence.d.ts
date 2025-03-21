export class Fence {
    /**
     * @param {object} args 参数
     * @param {array} args.vertices 坐标
     * @param {any} args.color 线的颜色。vertexColors为false时，表示线为纯色，color可为Vector3或Array，默认值为红色；
     *        vertexColors为true时，表示启用顶点颜色，color为数组，默认值为白色
     * @param {boolean} args.vertexColors 是否使用顶点坐标，默认值false
     * @param {any} args.topColor 格式同color，仅vertexColors为true时有效，默认值为0xff0000
     * @param {any} args.bottomColor 格式同color，仅vertexColors为true时有效，默认值为0xffffff
     * @param {number} args.startOpacity 头部透明度，仅vertexColors为true时有效，默认值为1
     * @param {number} args.endOpacity 尾部透明度，仅vertexColors为true时有效，默认值为1
     * @param {string} args.direction 传入折线段的拉伸方向，'horizontal'-横向，'vertical'-纵向，默认值为'horizontal'
     * @param {boolean} args.sizeAttenuation 大小是否会被相机深度衰减，默认值为true
     * @param {number} args.width 折线段拉伸长度，默认值为1
     * @param {number} args.opacity transparent为true时生效，线的透明度，默认值是1
     * @param {boolean} args.transparent 是否开启透明度，默认值为false
     * @param {boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
     * @param {boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {object} args.map 纹理图片地址或Texture类，默认值为null
     * @param {object} args.speed Vector2，x表示横向速度，y表示纵向速度，正负代表方向，默认值为Vector2(1, 1)
     * @param {object} args.mapOffset 贴图的水平和竖直偏移量。默认值为Vector2(0,0)
     * @param {object} args.repeat 纹理在曲面上沿每个方向U和V重复多少次，默认new Vector2(1, 1)
     */
    constructor(args?: {
        vertices: any;
        color: any;
        vertexColors: boolean;
        topColor: any;
        bottomColor: any;
        startOpacity: number;
        endOpacity: number;
        direction: string;
        sizeAttenuation: boolean;
        width: number;
        opacity: number;
        transparent: boolean;
        depthTest: boolean;
        depthWrite: boolean;
        map: object;
        speed: object;
        mapOffset: object;
        repeat: object;
    });
    size: number;
    vertices: any;
    vertexColors: boolean;
    color: Object;
    topColor: Object;
    bottomColor: Object;
    direction: string;
    sizeAttenuation: boolean;
    width: number;
    offset: any;
    opacity: number;
    resolution: any;
    speed: object;
    repeat: object;
    mapOffset: object;
    map: object | null;
    startOpacity: number;
    endOpacity: number;
    transparent: boolean;
    depthTest: boolean;
    depthWrite: boolean;
    _geometryType: string;
    verticesNum: number;
    mesh: any;
    boundingBox: any;
    uniforms: {};
    /** @private */
    private afterAddToEngine;
    engine: any;
    /**
     *
     * 初始化
     *
     */
    init(): void;
    /**
     * 设置几何点数组
     * @param {Array} vertices 点数组
     */
    setVertices(vertices: any[]): void;
    /**
     * 设置偏移量
     * @param {any} offset 偏移量
     */
    setOffset(offset: any): void;
    /**
     *
     * 动画
     *
     */
    /**
     * 射线拾取
     */
    raycast(raycaster: any, intersects: any): void;
    meshRaycast(raycaster: any, intersects: any): void;
    /**
     *
     * 释放内存
     *
     */
    dispose(): void;
}
