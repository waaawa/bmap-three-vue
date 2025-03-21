export class InstancedBallonMaterial extends InstancedEffectPointMaterial {
    isInstancedBallonMaterial: boolean;
    vertexShader: any;
    fragmentShader: any;
    textureLoader: any;
    dispose(): void;
}
import { InstancedEffectPointMaterial } from "./EffectPoint";
