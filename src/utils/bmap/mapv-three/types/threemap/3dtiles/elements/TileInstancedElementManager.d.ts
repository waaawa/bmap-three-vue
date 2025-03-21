export class TileInstancedElementManager {
    _lastUpdateTime: number;
    _updateDelayTimerHander: any;
    _configVersion: number;
    _config: {
        tree: {
            enabled: boolean;
            isFoliage: boolean;
            isBox: boolean;
            scaleByZ: boolean;
            instances: {
                subtype: number;
                modelPath: string;
                itemScale: number;
                zOffset: number;
            }[];
        };
    };
    _idEnabled: boolean;
    _dataTypeEnabled: boolean;
    group: any;
    _modelMeshSingleton: PromisedSingleton;
    _generateModelMesh: (key: any) => Promise<any>;
    markNeedsUpdate: () => void;
    createInstanceComponent(mesh: any, tile: any, instanceCollectioConfig: any, instanceConfig: any): Promise<void>;
    remapBatchValueToNumber: (value: any) => any;
    parseBatchTableAttribute: (tile: any, property: any, attributeName: any) => void;
    onTileLoad: (tile: any, scene: any) => void;
    onTileDispose: (tile: any, scene: any) => void;
    onTileShow: (tile: any) => void;
    onTileHide: (tile: any) => void;
    resetTile: (tile: any) => void;
    refreshTile: (tile: any) => void;
    refreshTiles: () => void;
    getInstanceCollectioConfig(type: any): any;
    setInstanceCollectionConfig(type: any, config: any): TileInstancedElementManager;
    getInstanceConfig(type: any, subtype: any): any;
    setInstanceConfig(type: any, subtype: any, config: any): TileInstancedElementManager;
    set config(arg: {
        tree: {
            enabled: boolean;
            isFoliage: boolean;
            isBox: boolean;
            scaleByZ: boolean;
            instances: {
                subtype: number;
                modelPath: string;
                itemScale: number;
                zOffset: number;
            }[];
        };
    });
    get config(): {
        tree: {
            enabled: boolean;
            isFoliage: boolean;
            isBox: boolean;
            scaleByZ: boolean;
            instances: {
                subtype: number;
                modelPath: string;
                itemScale: number;
                zOffset: number;
            }[];
        };
    };
}
import { PromisedSingleton } from "../../../util/PromisedSingleton";
