export const TILE_STATE_CREATED: 1;
export const TILE_STATE_LOADING: 2;
export const TILE_STATE_COMPLETED: 3;
export const TILE_STATE_FAILED: 4;
export class MapTile {
    constructor(z: any, x: any, y: any);
    x: any;
    y: any;
    z: any;
    siblingIndex: number;
    _boundingBox: any;
    compeleted: boolean;
    key: string;
    state: number;
    childrenKeys: any[];
    updateBoundingBoxZ(zMin: any, zMax: any): void;
    set boundingBox(arg: any);
    get boundingBox(): any;
    center: any;
    get reverseY(): number;
    _reverseY: number | undefined;
}
