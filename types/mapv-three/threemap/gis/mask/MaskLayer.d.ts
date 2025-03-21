/**
 * 主要针对2d底图或者绘制在平面上的元素,若场景中包含3D元素,可以通过指定maskLayers来对特定2D元素进行掩膜,避免影响3D元素
 * ```js
 * const maskLayer = engine.add(new mapvthree.MaskLayer());
 * maskLayer.dataSource = dataSource;
 * maskLayer.maskLayers = [box];
 * maskLayer.enabled = true;
 * ```
 */
export class MaskLayer {
    _maskElements: any[];
    _isMasked: boolean;
    _enabled: boolean;
    afterAddToEngine(engine: any): void;
    _engine: any;
    _maskPolygon: any;
    _clearPass: any;
    _maskPass: any;
    _scenePass: RenderPass | undefined;
    _skyElement: any;
    _maskSkyPass: any;
    _renderPass: RenderPass | undefined;
    _clearMaskPass: any;
    _gammaCorrectionPass: any;
    _outputPass: any;
    _maskElementsPass: RenderPass | undefined;
    beforeRemoveFromEngine(engine: any): void;
    dispose(): void;
    set dataSource(arg: any);
    get dataSource(): any;
    _dataSource: any;
    set maskLayers(arg: any[]);
    get maskLayers(): any[];
    set enabled(arg: boolean);
    get enabled(): boolean;
}
import { RenderPass } from "../../../threejs/postprocessing/RenderPass";
