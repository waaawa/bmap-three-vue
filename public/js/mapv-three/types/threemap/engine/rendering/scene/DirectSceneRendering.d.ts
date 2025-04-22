export class DirectSceneRendering extends SceneRendering {
    _emissiveRenderTarget: any;
    _tDepth: any;
    _sceneRenderTarget: any;
    _fsQuad: any;
    _isBlackColor(color: any): boolean;
    _isEmissiveMaterial(material: any): any;
    _disposeEmissiveRenderTarget(): void;
    get emissiveTexture(): any;
    get depthTexture(): any;
    get diffuseTexture(): any;
}
import { SceneRendering } from "./SceneRendering";
