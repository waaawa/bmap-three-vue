/**
 * 填充多边形（不含描边），可沿Z轴拉伸高度成多边形柱状体
 * ```js
 * const polygon = engine.add(new mapvthree.Polygon({
 *     vertexColors: true,
 *     extrude: true,
 *     extrudeValue: 100,
 * }));
 * let data = await mapvthree.GeoJSONDataSource.fromGeoJSON(data);
 * data.setAttribute('color', 'color');
 * polygon.dataSource = data;
 * ```
 * ![](media://polygon.png)
 */
export class Polygon extends GeoMesh {
    /**
     * 构造函数
     * @param {{
     * extrude?: boolean, extrudeValue?: number,
     * color?: string, vertexColors?: boolean, opacity?: number, emissive?: string,
     * mapSrc?: string, mapScale?:number
     * }} parameters 传入参数对象
     * @param {boolean} parameters.extrude 是否拉伸，默认否
     * @param {number} parameters.extrudeValue 拉伸高度，默认100
     * @param {boolean} parameters.vertexHeights 是否通过数据携带高度配置，默认否
     * @param {boolean} parameters.enableBottomFace 是否封闭底面
     * @param {string} parameters.color 填充颜色
     * @param {boolean} parameters.vertexColors 是否通过数据携带颜色配置，默认否
     * @param {string} parameters.emissive 自发光颜色
     * @param {number} parameters.opacity 整体透明度系数，默认1
     * @param {string} parameters.mapSrc 赋值并设置geometry.useUV=true才可使用该图片作为纹理贴图，默认''
     * @param {number} parameters.mapScale 贴图的缩放大小，仅在使用纹理贴图时有效，默认1
     * @param {number} parameters.zOffset 整体高度抬升
     * @param {number} parameter.normalOffset 沿法线方向抬升
     */
    constructor(parameters: {
        extrude?: boolean;
        extrudeValue?: number;
        color?: string;
        vertexColors?: boolean;
        opacity?: number;
        emissive?: string;
        mapSrc?: string;
        mapScale?: number;
    });
    isEventEntitySupported: boolean;
    /** @protected */ protected geometry: any;
    /** @protected */ protected material: any;
    /** boolean，是否拉伸 */
    extrude: any;
    /** number，拉伸高度 */
    extrudeValue: any;
    /** string，填充颜色 */
    color: any;
    /** boolean，是否通过数据携带颜色配置 */
    vertexColors: any;
    /** string，自发光颜色 */
    emissive: any;
    /** number，整体透明度系数 */
    opacity: any;
    /** string，赋值则使用该图片作为纹理贴图 */
    mapSrc: any;
    /** number，贴图的缩放大小，仅在使用纹理贴图时有效 */
    mapScale: any;
    /** @protected */
    protected afterGeometryUpdate(): void;
    /** @protected */
    protected getEntityIndexByFace(faceIndex: any, pointIndex: any): any;
    _computeIntersections: any;
    getVertexPosition: any;
}
import { GeoMesh } from "../GeoMesh";
