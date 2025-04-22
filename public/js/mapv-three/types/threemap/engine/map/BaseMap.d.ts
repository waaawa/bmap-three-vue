/** @protected */
export class BaseMap {
    init(): void;
    parsePointToArr(input: any): number[] | null;
    projectPointArr(coordinates: any, defaultValue: any): void;
    projectGeoJSON(geoJson: any): void;
    projectCoordinates(coordinates: any): any;
    bindCanvas(): void;
    releaseCanvas(): void;
    dispose(): void;
}
