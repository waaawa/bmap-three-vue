export class DefaultTextMaterial extends CommonShaderMaterial {
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isDefaultTextMaterial: boolean;
    transparent: boolean;
    depthTest: boolean;
    depthWrite: boolean;
    emissiveEnabled: boolean;
    emissive: number[];
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
