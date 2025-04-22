export class SpecialPointMaterial extends InstancedEffectPointMaterial {
    isSpecialPointMaterial: boolean;
    vertexShader: any;
    fragmentShader: any;
    side: number;
    depthWrite: boolean;
}
import { InstancedEffectPointMaterial } from "./EffectPoint";
