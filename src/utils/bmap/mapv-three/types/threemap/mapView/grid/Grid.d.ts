export class Grid {
    constructor(engine: any);
    _maxLevel: number;
    _engine: any;
    getRootBoundingBox(): void;
    getDistanceByLevel(): number;
    getPixelSizeByLevel(): number;
    getNextLevel(z: any): any;
    createTileChildren(tile: any): MapTile[];
    update(): void;
    set engine(arg: any);
    get engine(): any;
    set maxLevel(arg: number);
    get maxLevel(): number;
}
import { MapTile } from "../geo/MapTile";
