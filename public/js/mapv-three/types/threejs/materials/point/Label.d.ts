export class LabelMaterial extends CommonShaderMaterial {
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isLabelMaterial: boolean;
    transparent: boolean;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
