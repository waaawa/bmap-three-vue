/**
 *
 * ```javascript
 * new DoubleLine({
 *  vertices: [[0, 10, 0], [10, 10, 0], [10, 20, 0]],
 *  sizeAttenuation: false,
 *  opacity: .1,
 *  map: `./texture/line/${lineTexture[1]}`,
 *  transparent: true,
 *  hasBasicLine: true,
 *  speed: new Vector2(-4, 0),
 *  lineWidth: 20
 * })
 * ```
 */
export class DoubleLine {
    /**
     * @extends Object3D
     * @param {object} args 参数
     * @param {array} args.vertices 坐标
     * @param {any} args.color 线的颜色。vertexColors为false时，表示线为纯色，color可为Vector3或Array，默认值为红色；
     *        vertexColors为true时，表示启用顶点颜色，color为数组，默认值为白色
     * @param {string} args.vertexColors 是否使用顶点坐标，默认值false
     * @param {string} args.topColor 格式同color，仅vertexColors为true时有效，默认值为0xff0000
     * @param {string} args.bottomColor 格式同color，仅vertexColors为true时有效，默认值为0xffffff
     * @param {object} args.resolution 视口分辨率，默认值为视口宽高
     * @param {boolean} args.sizeAttenuation 大小是否会被相机深度衰减，默认值为true
     * @param {number} args.lineWidth 折线段拉伸长度，默认值为1
     * @param {number} args.opacity transparent为true时生效，线的透明度，默认值是1
     * @param {number} args.transparent 是否开启透明度，默认值为false
     * @param {boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
     * @param {boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {object} args.map 纹理图片地址或Texture类，默认值为null
     * @param {object} args.speed Vector2，x表示横向速度，y表示纵向速度，正负代表方向，默认值为Vector2(1, 1)
     * @param {object} args.mapOffset 贴图的水平和竖直偏移量。默认值为Vector2(0,0)
     * @param {object} args.repeat 纹理在曲面上沿每个方向U和V重复多少次，默认new Vector2(1, 1)
     * @param {boolean} args.hasBasicLine 是否开启基础线，默认值为false
     * @param {number} args.basicLineWidth 基础线拉伸长度，默认值为1
     * @param {any} args.basicLineColor 基础线的颜色。格式同color
     * @param {number} args.basicLineOpacity basicLineTransparent为true时生效，基础线的透明度，默认值是1
     * @param {boolean} args.basicLineTransparent 是否开启基础线透明度，默认值为false
     * @param {boolean} args.basicLineDepthWrite 基础线，渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {boolean} args.basicLineVertexColors 基础线是否使用顶点坐标，默认值false
     * @param {any} args.basicLineTopColor 基础线，格式同color，仅vertexColors为true时有效，默认值为0xff0000
     * @param {any} args.basicLineBottomColor 基础线，格式同color，仅vertexColors为true时有效，默认值为0xffffff
     */
    constructor(args?: {
        vertices: any;
        color: any;
        vertexColors: string;
        topColor: string;
        bottomColor: string;
        resolution: object;
        sizeAttenuation: boolean;
        lineWidth: number;
        opacity: number;
        transparent: number;
        depthTest: boolean;
        depthWrite: boolean;
        map: object;
        speed: object;
        mapOffset: object;
        repeat: object;
        hasBasicLine: boolean;
        basicLineWidth: number;
        basicLineColor: any;
        basicLineOpacity: number;
        basicLineTransparent: boolean;
        basicLineDepthWrite: boolean;
        basicLineVertexColors: boolean;
        basicLineTopColor: any;
        basicLineBottomColor: any;
    });
    size: number;
    vertices: any;
    color: Object;
    sizeAttenuation: boolean;
    offset: any;
    resolution: object;
    vertexColors: string | boolean;
    topColor: Object;
    bottomColor: Object;
    hasBasicLine: boolean;
    basicLineWidth: any;
    basicLineColor: Object;
    basicLineOpacity: number;
    basicLineTransparent: boolean;
    basicLineDepthWrite: boolean;
    basicLineVertexColors: boolean;
    basicLineTopColor: Object;
    basicLineBottomColor: Object;
    speed: object;
    lineWidth: number;
    repeat: object;
    mapOffset: object;
    opacity: number;
    map: object;
    transparent: number | boolean;
    depthTest: boolean;
    depthWrite: boolean;
    _geometryType: string;
    boundingBox: any;
    line: Fence | null;
    basicLine: Fence | null;
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
     * 释放内存
     *
     */
    dispose(): void;
    /**
     * 射线拾取
     */
    raycast(raycaster: any, intersects: any): void;
    meshRaycast(raycaster: any, intersects: any): void;
}
import { Fence } from "../map/Fence";
