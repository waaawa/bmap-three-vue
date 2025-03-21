export class RenderingRequirements {
    constructor(rendering: any);
    needsEmissiveTexture: boolean;
    needsNormalTexture: boolean;
    needsDepthTexture: boolean;
    needsMetallicRoughTexture: boolean;
    enableStencilBuffer: boolean;
    _lastTextureRequirementsKey: number;
    _currentTextureRequirementsKey: number;
    _rendering: any;
    _renderingMain: any;
    /**
     * 重置状态
     * 重新计算需求
     */
    beginFrame(): void;
    _updateRequirements(): void;
    _resetTextureRequirements(): void;
    _updateTextureRequirementsKey(): number;
    isTextureRequirementsChanged(): boolean;
    endFrame(): void;
    get currentTextureRequirementsKey(): number;
}
