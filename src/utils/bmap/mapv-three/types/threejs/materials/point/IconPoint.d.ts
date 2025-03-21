export class IconPointMaterial extends CommonShaderMaterial {
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isIconPointMaterial: boolean;
    transparent: boolean;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
