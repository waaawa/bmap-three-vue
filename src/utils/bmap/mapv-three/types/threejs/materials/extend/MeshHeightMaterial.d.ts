export class MeshHeightMaterial extends ExtendMeshStandardMaterial {
    /** @private */ private _gradient;
    /** @private */ private _cachedGradientMap;
    isMeshHeightMaterial: boolean;
    set gradient(arg: any);
    get gradient(): any;
    set noiseMap(arg: any);
    get noiseMap(): any;
    createGradientMap(): void;
    updateGradientMap(): void;
}
import { ExtendMeshStandardMaterial } from "./ExtendMeshStandardMaterial";
