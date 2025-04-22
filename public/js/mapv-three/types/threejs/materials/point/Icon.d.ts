export class IconMaterial extends CommonShaderMaterial {
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isIconMaterial: boolean;
    transparent: boolean;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
