/**
 * 兼容mrt与非mrt模式下的bloom，mrt时用MultiRenderTarget，非mrt时用后处理Composer和RenderPass
 */
export class RenderingBloom {
    constructor(rendering: any);
    _rendering: any;
    _strength: number;
    _threshold: number;
    _radius: number;
    _needsSetTexture: boolean;
    _enabled: boolean;
    _renderPass: any;
    _useMrt: boolean;
    set useMrt(arg: boolean);
    get useMrt(): boolean;
    set enabled(arg: boolean);
    get enabled(): boolean;
    _init(): void;
    _bloomRenderTarget: any;
    _bloomCopyQuad: any;
    _bloomComposer: any;
    _finalPass: any;
    render(): void;
    dispose(): void;
    setPresetMaterialToEmissiveWhenNotMrt: (material: any) => void;
    getTextures(): any[];
    setSize(width: any, height: any): void;
    get tBloom(): any;
    set strength(arg: number);
    get strength(): number;
    set radius(arg: number);
    get radius(): number;
    set threshold(arg: number);
    get threshold(): number;
}
