export class BufferAnalysis {
    constructor(options?: {});
    /** @private */ private _radius;
    /** @private */ private _type;
    /** @private */ private _bufferElement;
    afterAddToEngine(engine: any): void;
    _engine: any;
    _bufferParameters: any;
    _lineParameters: any;
    editorType: any;
    _line: any;
    _options: {};
    beforeRemoveFromEngine(engine: any): void;
    clear(): void;
    build(): void;
    buffer(geojson: any, radius: any, options: any): object | undefined;
    radiansToLength(radians: any, units?: string): number;
    lengthToRadians(distance: any, units?: string): number;
    bufferFeature(geojson: any, radius: any, units: any, steps: any): object | undefined;
    coordsIsNaN(coords: any): any;
    projectCoords(coords: any, proj: any): any;
    /**
     * Un-Project coordinates to projection
     *
     * @private
     * @param {Array<any>} coords to un-project
     * @param {GeoProjection} proj D3 Geo Projection
     * @returns {Array<any>} un-projected coordinates
     */
    private unprojectCoords;
    /**
     * Define Azimuthal Equidistant projection
     *
     * @private
     * @param {Geometry|Feature<any>} geojson Base projection on center of GeoJSON
     * @returns {GeoProjection} D3 Geo Azimuthal Equidistant Projection
     */
    private defineProjection;
    get bufferData(): object | undefined;
    set data(arg: any);
    get data(): any;
    _data: any;
    set radius(arg: any);
    get radius(): any;
    set bufferType(arg: any);
    get bufferType(): any;
}
