export class CompositionPass {
    constructor({ tDiffuse, tDepth, tNormal, tMetalness, tBloom, tReflection, }: {
        tDiffuse: any;
        tDepth: any;
        tNormal: any;
        tMetalness: any;
        tBloom: any;
        tReflection: any;
    });
    material: MrtPostMaterial;
    set tBloom(arg: any);
    get tBloom(): any;
    set tReflection(arg: any);
    get tReflection(): any;
    fsQuad: any;
    renderTarget: any;
    render(renderer: any, camera: any, scene: any): void;
    dispose(): void;
}
import { MrtPostMaterial } from "../materials/engine/MrtPostMaterial";
