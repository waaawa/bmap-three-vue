export class TrafficLightMaterial extends CommonShaderMaterial {
    constructor(parameters?: {});
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isTrafficLightMaterial: boolean;
    transparent: boolean;
    emissiveEnabled: boolean;
    update(value: any, index: any): void;
    handleSlotValue: (value: any, index: any) => void;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
