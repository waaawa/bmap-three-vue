/**
 * ![](media://realistic_material.png)
 */
export class Realistic3DTilesMaterialManager extends Default3DTilesMaterialManager {
    isRealistic3DTilesMaterialManager: boolean;
    /** @private */ private _autoTimingLight;
    /** @private */ private _nightLightDensity;
    getTexture: (key: any, type: any, repeat: any, extraParameters: any, callback: any) => any;
    createPbrMaterial: (textureName: any, textureChannels: any, repeat: any, initParameters?: {}, extraParameters?: {}) => any;
    createBuildingMaterial: () => ExtendMeshStandardMaterial;
    addMaterials(): void;
    handleWeatherChanged: (weather: any) => void;
    handleTimeChanged: (time: any) => void;
    updateLightDensity(lightDensity: any): void;
    set autoTimingLight(arg: boolean);
    get autoTimingLight(): boolean;
    set nightLightDensity(arg: number);
    get nightLightDensity(): number;
}
import { Default3DTilesMaterialManager } from "./Default3DTilesMaterialManager";
import { ExtendMeshStandardMaterial } from "../../../threejs/materials/extend/ExtendMeshStandardMaterial";
