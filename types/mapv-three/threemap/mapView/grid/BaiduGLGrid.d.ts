export class BaiduGLGrid extends Grid {
    _levels: number[];
    _nextLevelMap: {};
    _rootBoundingBox: any;
    getRootTile(): MapTile;
    _updateLODDistance(): void;
    _lodDistances: number[] | undefined;
    _pixelSizes: number[] | undefined;
}
import { Grid } from "./Grid";
import { MapTile } from "../geo/MapTile";
