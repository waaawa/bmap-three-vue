/**
 *
 * 管道线
 *
 * ```javascript
 * const tubeLine = new TubeLine({
 *      path: [[-10, 0, 0], [0, 0, 0], [0, 10, 0] , [10, 0, 0]],
 *      map: lineTexture,
 *      color: 0xff0000,
 *      opacity: .9,
 *      radius: 1,
 *      radialSegments: 20,
 *  })
 *
 */
export class TubeLine {
    /**
     * @extends Object3D
     * @param {object} args 参数
     * @param {array} args.path 坐标 [[],[],[]]
     * @param {any} args.color 管道颜色。vertexColors为false时，表示线为纯色，color可为Vector3或Array，默认值为红色；
     *        vertexColors为true时，表示启用顶点颜色，color为数组，默认值为[]
     * @param {number} args.opacity transparent为true时生效，线的透明度，默认值是1
     * @param {number} args.transparent 是否开启透明度，默认值为false
     * @param {Boolean} args.depthTest 是否在渲染此材质时启用深度测试。默认值为true
     * @param {Boolean} args.depthWrite 渲染此材质是否对深度缓冲区有任何影响。默认为true
     * @param {object} args.map 纹理图片地址或Texture类，默认值为null
     * @param {object} args.segments 管道的分段数，默认值为管道段数的十倍
     * @param {object} args.radius 管道的半径，默认值为1
     * @param {object} args.radialSegments 管道横截面的分段数目，默认值为半径的10倍
     * @param {string} args.curveType 可能的值为centripetal、chordal和catmullrom，默认值为'centripetal'
     * @param {number} args.tension 张力，curveType为catmullrom时有效，默认值为0.5
     */
    constructor(args?: {
        path: any;
        color: any;
        opacity: number;
        transparent: number;
        depthTest: boolean;
        depthWrite: boolean;
        map: object;
        segments: object;
        radius: object;
        radialSegments: object;
        curveType: string;
        tension: number;
    });
    path: any;
    color: Object;
    opacity: number;
    transparent: number | boolean;
    segments: object;
    radius: object;
    radialSegments: object;
    depthTest: boolean;
    depthWrite: boolean;
    offset: Object;
    curveType: string;
    tension: number;
    map: any;
    boundingBox: any;
    mesh: any;
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
     * 设置偏移量
     * @param {any} offset 偏移量
     */
    setOffset(offset: any): void;
    /**
     * 设置几何点数组
     * @param {Array} vertices 点数组
     */
    setVertices(path: any): void;
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
