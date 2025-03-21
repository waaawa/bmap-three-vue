export class TAAPass {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        opacity: {
            value: number;
        };
    };
    _accumulateIndex: number;
    material: any;
    needsSwap: boolean;
    fsQuad: any;
    render(renderer: any, writeBuffer: any, readBuffer: any): void;
    _holdRenderTarget: any;
    _sampleRenderTarget: any;
    dispose(): void;
}
