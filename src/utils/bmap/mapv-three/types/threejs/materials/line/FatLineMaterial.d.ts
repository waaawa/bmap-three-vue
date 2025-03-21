export class FatLineMaterial extends CommonShaderMaterial {
    type: string;
    isFatLineMaterial: boolean;
    fog: boolean;
    transparent: boolean;
    fragmentShader: any;
    vertexShader: any;
    emissiveEnabled: boolean;
    emissive: number[];
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
