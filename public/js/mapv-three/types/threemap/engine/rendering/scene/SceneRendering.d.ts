export class SceneRendering {
    constructor(rendering: any);
    _lastTextureRequirementsKey: number;
    _inited: boolean;
    _useFastEmissiveMethod: boolean;
    _rendering: any;
    beginFrame(): void;
    updateRenderTargetSamples(samples: any): void;
    _onTextureRequirementsChanged(): void;
    _init(): void;
    render(): void;
    endFrame(): void;
    dispose(): void;
    set useFastEmissiveMethod(arg: boolean);
    get useFastEmissiveMethod(): boolean;
}
