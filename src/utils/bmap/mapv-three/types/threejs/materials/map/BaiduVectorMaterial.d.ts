export class BaiduVectorMaterial extends CommonShaderMaterial {
    type: string;
    isBaiduVectorMaterial: boolean;
    lights: boolean;
    fog: boolean;
    depthWrite: boolean;
    depthTest: boolean;
    fragmentShader: any;
    vertexShader: any;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
