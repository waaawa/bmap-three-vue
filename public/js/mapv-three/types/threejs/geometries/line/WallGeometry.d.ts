export class WallGeometry {
    constructor(parameters: any);
    isWallGeometry: boolean;
    _needsUpdate: boolean;
    parameters: any;
    setData(data: any): void;
    cachedData: any;
    updateGeometry(): void;
    cachedPositions: any[] | undefined;
    set needsUpdate(arg: boolean);
    get needsUpdate(): boolean;
}
