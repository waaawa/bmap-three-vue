export class InstancedActiveCircleMaterial extends InstancedEffectPointMaterial {
    isCircleMaterial: boolean;
    depthTest: boolean;
    depthWrite: boolean;
    vertexShader: any;
    fragmentShader: any;
    emissiveEnabled: boolean;
    emissive: number[];
}
import { InstancedEffectPointMaterial } from "./EffectPoint";
