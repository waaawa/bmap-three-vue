export class Heatmap3DMaterial extends CommonShaderMaterial {
    type: string;
    isHeatmapMaterial: boolean;
    fog: boolean;
    lights: boolean;
    transparent: boolean;
    depthWrite: boolean;
    depthTest: boolean;
    fragmentShader: any;
    vertexShader: any;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
