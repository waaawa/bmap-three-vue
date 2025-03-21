export class InstancedEffectModelMaterial extends InstancedEffectPointMaterial {
    isInstancedEffectModelMaterial: boolean;
    vertexShader: any;
    fragmentShader: any;
    defines: {};
    set vertexColors4(arg: boolean);
    get vertexColors4(): boolean;
    needsUpdate: boolean | undefined;
    set vertexColors3(arg: boolean);
    get vertexColors3(): boolean;
}
import { InstancedEffectPointMaterial } from "./EffectPoint";
