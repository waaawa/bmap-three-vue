export class MapLodLayer {
    constructor(layerConfig: any);
    config: any;
    mapRequest: MapRequest;
    loader: MapLayerLoader;
    mapLayers: any[];
    handleBeforeRender: () => void;
    /** @private */
    private afterAddToEngine;
    engine: any;
    init(): Promise<any[]>;
}
import { MapRequest } from "../index";
import { MapLayerLoader } from "../index";
