export class SSRPass {
    material: SsrMaterial;
    fsQuad: any;
    needsSwap: boolean;
    needsMetallicRoughTexture: boolean;
    needsNormalTexture: boolean;
    needsDepthTexture: boolean;
    render(renderer: any, writeBuffer: any, readBuffer: any): void;
    dispose(): void;
}
import { SsrMaterial } from "../../../../threejs/materials/engine/SsrMaterial";
