export class SkyAtmospherePass {
    uniforms: any;
    material: any;
    needsSwap: boolean;
    fsQuad: any;
    needsDepthTexture: boolean;
    render(renderer: any, writeBuffer: any, readBuffer: any): void;
    dispose(): void;
}
