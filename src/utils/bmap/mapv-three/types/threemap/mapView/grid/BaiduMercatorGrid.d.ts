export class BaiduMeractorGrid extends Grid {
    _restrictedBounds: any[];
    _rootBoundingBox00: any;
    _rootBoundingBoxM10: any;
    getRootTile(): MapTile[];
    _updateLODDistance(): void;
    _lodDistances: number[] | undefined;
    _pixelSizes: number[] | undefined;
}
import { Grid } from "./Grid";
import { MapTile } from "../geo/MapTile";
