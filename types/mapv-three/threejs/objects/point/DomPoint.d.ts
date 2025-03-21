/**
 * DomPoint是基于DOM的自定义信息窗口，它继承至GeoObject，可以结合事件绑定实现弹窗组件等
 * ```js
 * function callback() {
 *  // 产生一个弹窗
 * }
 * const domPoint = engine.add(
 *  new mapvthree.DomPoints({offset: [-270, -200]})
 * );
 * domPoint.renderItem = callback;
 * const dompointDataSource = await mapvthree.GeoJSONDataSource.fromGeoJSON([]);
 * domPoint.dataSource = dompointDataSource;
 * // 绑定事件
 * engine.event.bind('click', (e) => {
 *  dompointDataSource.setData([e.entity.value]);
 *  engine.requestRender();
 * })
 * ```
 * ![](media://dom_point.png)
 */
export class DomPoints extends GeoObject {
    /**
     * @readonly
     * 是否为DomPoints类型
     */
    readonly isDomPoints: true;
    /**
     * @readonly
     * 是否渲染视椎体外的物体，为false时需要渲染
     */
    readonly frustumCulled: false;
    _visible: boolean;
    points: any[];
    nodes: any[];
    offset: number[];
    /**
     * 生成dom节点node
     */
    renderItem(value: any, callback: any): HTMLDivElement;
    /**
     * @protected
     * 根据当前object的位置来计算node的偏移
     */
    protected onBeforeScenePrepareRenderHook: (engine: any, scene: any, camera: any) => void;
    container: any;
}
import { GeoObject } from "../GeoObject";
