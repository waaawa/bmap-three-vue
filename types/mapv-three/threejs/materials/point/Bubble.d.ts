export class InstancedBubbleMaterial extends InstancedEffectPointMaterial {
    isInstancedBubbleMaterial: boolean;
    depthTest: boolean;
    depthWrite: boolean;
    vertexShader: any;
    fragmentShader: any;
}
import { InstancedEffectPointMaterial } from "./EffectPoint";
