export class FeatureBloom extends Feature {
    _lastEnabled: boolean;
    _strength: number;
    _threshold: number;
    _radius: number;
    needsEmissiveTexture: boolean;
    _init(): void;
    _bloomRenderTarget: any;
    _bloomRenderPass: any;
    _bloomComposer: any;
    _texturePass: any;
    _bloomMixPass: any;
    afterRender(): void;
    dispose(): void;
    set strength(arg: number);
    get strength(): number;
    set radius(arg: number);
    get radius(): number;
    set threshold(arg: number);
    get threshold(): number;
}
import { Feature } from "./Feature.js";
