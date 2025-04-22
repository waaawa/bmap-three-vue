export class CesiumTerrainTileLoader extends AsyncBinaryTileLoader {
    _styleUrl: string;
    _fallbackTileData: {
        mesh: {
            attributes: Float32Array;
            indices: Uint32Array;
            heights: number[];
        };
    };
    _url: any;
    _imageryTileLoader: any;
    _isTileAvailable: (tile: any) => boolean;
    getTileMaterial(tile: any): Promise<ExtendMeshStandardMaterial>;
    getBaseMaterial(materialOptions: any): ExtendMeshStandardMaterial;
    _loadMeta: () => Promise<void>;
    _layerConfig: any;
    _urlTemplate: string | undefined;
    _version: any;
    _availableTiles: any;
    onRefreshRenderedTiles(renderedTiles: any, hasDelayedTile: any): void;
}
import { AsyncBinaryTileLoader } from "./AsyncBinaryTileLoader";
import { ExtendMeshStandardMaterial } from "../../../threejs/materials/extend/ExtendMeshStandardMaterial";
