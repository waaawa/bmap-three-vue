/**
 * ```javascript
 * new AnimatePolygon({
 *  vertices: [[0, 10, 0], [10, 10, 0], [10, 20, 0]],
 *  map: `./texture/line/${lineTexture[1]}`,
 *  transparent: true,
 *  speed: new Vector2(-4, 0),
 * })
 * ```
 */
export class AnimatePolygon {
    /**
     * @extends Object3D
     * @param {object} args 参数
     * @param {string} args.polygonType 多边形类型，polygon-多边形、circle-圆，默认为'polygon'
     * @param {array} args.vertices 多边形的顶点坐标，仅polygonType为polygon时有效
     * @param {object} args.circlePosition 圆中心点坐标，仅polygonType为circle时有效，默认值Vector3(0,0,0);
     * @param {number} args.radius 圆半径，仅polygonType为circle时有效，默认值1;
     * @param {number} args.segments 圆分段（三角面）的数量，仅polygonType为circle时有效，默认值8;
     * @param {number} args.thetaStart 圆第一个分段的起始角度，仅polygonType为circle时有效，默认值0
     * @param {number} args.thetaLength 圆扇区的中心角，仅polygonType为circle时有效，默认值Math.PI * 2;
     * @param {any} args.color 线的颜色。vertexColors为false时，表示线为纯色，color可为Vector3或Array，默认值为红色；
     *        vertexColors为true时，表示启用顶点颜色，color为数组，默认值为白色
     * @param {object} args.offset 要偏移的坐标量，默认为Vector3(0, 0, 0)
     * @param {number} args.opacity transparent为true时生效，线的透明度，默认值是1
     * @param {number} args.transparent 是否开启透明度，默认值为false
     * @param {boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
     * @param {boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {object} args.map 纹理图片地址或Texture类，默认值为null
     * @param {object} args.speed Vector2，x表示横向速度，y表示纵向速度，正负代表方向，默认值为Vector2(1, 1)
     * @param {object} args.mapOffset 贴图的水平和竖直偏移量。默认值为Vector2(0,0)
     * @param {object} args.repeat 纹理在曲面上沿每个方向U和V重复多少次，默认new Vector2(1, 1)
     */
    constructor(args?: {
        polygonType: string;
        vertices: any;
        circlePosition: object;
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
        color: any;
        offset: object;
        opacity: number;
        transparent: number;
        depthTest: boolean;
        depthWrite: boolean;
        map: object;
        speed: object;
        mapOffset: object;
        repeat: object;
    });
    polygonType: string;
    color: Object;
    offset: Object;
    vertices: any;
    circlePosition: Object;
    radius: number;
    segments: number;
    thetaStart: number;
    thetaLength: number;
    speed: Object;
    repeat: Object;
    mapOffset: object;
    map: object | null;
    opacity: number;
    transparent: number | boolean;
    depthTest: boolean;
    depthWrite: boolean;
    _geometryType: string;
    mesh: any;
    boundingBox: any;
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
    /**
     *
     * 释放内存
     *
     */
    dispose(): void;
}
