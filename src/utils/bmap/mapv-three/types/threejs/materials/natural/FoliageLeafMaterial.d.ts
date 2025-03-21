/**
 * ![](media://foliage_material.png)
 */
export class FoliageLeafMaterial extends ExtendMeshStandardMaterial {
    static fromMaterial(material: any, parameters: any): FoliageLeafMaterial;
    constructor(parameters?: {});
    set windDirection(arg: any);
    get windDirection(): any;
    set windStrength(arg: any);
    get windStrength(): any;
}
import { ExtendMeshStandardMaterial } from "../extend/ExtendMeshStandardMaterial";
