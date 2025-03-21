export class HeatmapMaterial extends CommonShaderMaterial {
    type: string;
    isHeatmapMaterial: boolean;
    fog: boolean;
    lights: boolean;
    transparent: boolean;
    fragmentShader: any;
    vertexShader: any;
    _cachedGradient: any;
    createGradientMap(): void;
    _cachedGradientMap: any;
    updateGradientMap(): void;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
