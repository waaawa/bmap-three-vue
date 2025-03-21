export class PolygonMaterial extends CommonShaderMaterial {
    type: string;
    isPolygonMaterial: boolean;
    lights: boolean;
    fog: boolean;
    transparent: boolean;
    depthWrite: boolean;
    depthTest: boolean;
    fragmentShader: any;
    vertexShader: any;
    mapSrc: any;
    emissiveEnabled: boolean;
    emissive: number[];
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
