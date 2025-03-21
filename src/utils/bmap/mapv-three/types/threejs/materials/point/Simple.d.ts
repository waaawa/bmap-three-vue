export class SimplePointMaterial extends CommonShaderMaterial {
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isSimplePointMaterial: boolean;
    transparent: boolean;
    emissiveEnabled: boolean;
    emissive: number[];
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
