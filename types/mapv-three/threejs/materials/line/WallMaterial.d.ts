export class WallMaterial extends CommonShaderMaterial {
    type: string;
    isWallMaterial: boolean;
    fog: boolean;
    transparent: boolean;
    depthWrite: boolean;
    side: any;
    fragmentShader: any;
    vertexShader: any;
    emissiveEnabled: boolean;
    emissive: number[];
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
