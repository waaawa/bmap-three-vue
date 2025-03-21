export class MRTSceneRendering extends SceneRendering {
    _textureChannelNameMap: {
        emissive: number;
        normal: number;
        metallicRough: number;
    } | undefined;
    _fragBeforeMainStart: string | undefined;
    _fragBeforeMainEnd: string | undefined;
    _mainMrt: any;
    _tDepth: any;
    _fsQuad: any;
    modifyFragmentShader(fragmentShader: any): any;
    get emissiveTexture(): any;
    get normalTexture(): any;
    get metallicRoughTexture(): any;
    get depthTexture(): any;
    get diffuseTexture(): any;
}
import { SceneRendering } from "./SceneRendering";
