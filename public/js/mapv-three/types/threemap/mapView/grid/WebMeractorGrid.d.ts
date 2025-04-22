export class WebMeractorGrid extends Grid {
    _textureMaxLevel: number;
    _rootBoundingBox: any;
    getRootTile(): MapTile;
    _updateLODDistance(): void;
    _lodDistances: number[] | undefined;
    _pixelSizes: number[] | undefined;
    set textureMaxLevel(arg: number);
    get textureMaxLevel(): number;
}
import { Grid } from "./Grid";
import { MapTile } from "../geo/MapTile";
