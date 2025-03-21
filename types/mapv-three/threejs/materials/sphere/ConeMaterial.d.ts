export class ConeMaterial extends InstancedEffectPointMaterial {
    isGridMaterial: boolean;
    vertexShader: any;
    fragmentShader: any;
    side: any;
    _cachedGradient: any;
    createGradientMap(): void;
    _cachedGradientMap: any;
    updateGradientMap(): void;
    dispose(): void;
}
import { InstancedEffectPointMaterial } from "../point/EffectPoint";
