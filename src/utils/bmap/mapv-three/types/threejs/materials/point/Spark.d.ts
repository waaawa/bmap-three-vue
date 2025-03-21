export class SparkMaterial extends CommonShaderMaterial {
    type: string;
    isSparkMaterial: boolean;
    vertexShader: any;
    fragmentShader: any;
    transparent: boolean;
    emissiveEnabled: boolean;
    emissive: number[];
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
