export class WebMeractor4326Grid extends Grid {
    _textureMaxLevel: number;
    _rootBoundingBox00: any;
    _rootBoundingBox01: any;
    getRootTile(): MapTile4326[];
    _updateLODDistance(): void;
    _lodDistances: number[] | undefined;
    _pixelSizes: number[] | undefined;
    set textureMaxLevel(arg: number);
    get textureMaxLevel(): number;
}
import { Grid } from "./Grid";
import { MapTile4326 } from "../geo/MapTile4326";
