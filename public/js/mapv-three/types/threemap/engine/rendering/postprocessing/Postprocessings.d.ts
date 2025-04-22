export class Postprocessings {
    constructor(rendering: any);
    /** @private */
    private _postprocessings;
    /** @private */
    private _validCount;
    /** @private */
    private _composer;
    _samples: number;
    _rendering: any;
    beginFrame(): void;
    _updatePostprocessings(): void;
    _firstDepthTexture: any;
    _postprocessingRenderTarget1: any;
    add(postprocessing: any): void;
    remove(postprocessing: any): void;
    render(): void;
    updateReqirements(requirements: any): void;
    updateRenderTargetSamples(samples: any): void;
    endFrame(): void;
    dispose(): void;
    get renderTarget1(): any;
    get validCount(): number;
}
