export { TransparentBackgroundFixedUnrealBloomPass as UnrealBloomPass };
/**
 * Thanks to https://github.com/mrdoob/three.js/issues/14104#issuecomment-429664412 for this fragmentShaderfix
 *
 * UnrealBloomPass is inspired by the bloom pass of Unreal Engine. It creates a
 * mip map chain of bloom textures and blurs them with different radii. Because
 * of the weighted combination of mips, and because larger blurs are done on
 * higher mips, this effect provides good quality and performance.
 *
 * Reference:
 * - https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */
declare class TransparentBackgroundFixedUnrealBloomPass {
    constructor(resolution: any, strength: any, radius: any, threshold: any);
    strength: any;
    radius: any;
    threshold: any;
    resolution: any;
    clearColor: any;
    renderTargetsHorizontal: any[];
    renderTargetsVertical: any[];
    nMips: number;
    renderTargetBright: any;
    highPassUniforms: any;
    materialHighPassFilter: any;
    separableBlurMaterials: any[];
    compositeMaterial: any;
    bloomTintColors: any[];
    copyUniforms: any;
    materialCopy: any;
    enabled: boolean;
    needsSwap: boolean;
    _oldClearColor: any;
    oldClearAlpha: number;
    basic: any;
    fsQuad: any;
    dispose(): void;
    setSize(width: any, height: any): void;
    render(renderer: any, writeBuffer: any, readBuffer: any, deltaTime: any, maskActive: any): void;
    getSeperableBlurMaterial(kernelRadius: any): any;
    getCompositeMaterial(nMips: any): any;
}
declare namespace TransparentBackgroundFixedUnrealBloomPass {
    const BlurDirectionX: any;
    const BlurDirectionY: any;
}
