/**
 * ![](media://realistic_material.png)
 */
export class Custom3DTilesMaterialManager extends Default3DTilesMaterialManager {
    isCustom3DTilesMaterialManager: boolean;
    addDefaultMaterials(): void;
    getTexture: (key: any, type: any, repeat: any, extraParameters: any, callback: any) => any;
    createPbrMaterial: (textureName: any, textureChannels: any, repeat: any, initParameters?: {}, extraParameters?: {}) => any;
}
import { Default3DTilesMaterialManager } from "./Default3DTilesMaterialManager";
