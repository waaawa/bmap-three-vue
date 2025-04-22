export class FatLineGeometry extends ShadowVolumeLineGeometry {
    constructor(parameters: any);
    isFatLineGeometry: boolean;
    parameters: any;
    _needsUpdate: boolean;
    _needsCounter: boolean;
    _flags: {
        lastFlip: number;
        started: boolean;
        normal: null;
        totalDistance: number;
    };
    setData(data: any): void;
    updateGeometry(data: any): void;
    cachedPositions: any[] | undefined;
    _segmentLines: (positions: any, uvs: any, lengths: any, totalLengths: any, widths: any, normals: any, colors: any, indices: any, last: any, cur: any, next: any, width: any, objectColor: any, index: any) => number;
    _extrusions: (positions: any, normals: any, uvs: any, lengths: any, totalLengths: any, widths: any, colors: any, point: any, normal: any, distanceRadio: any, width: any, color: any) => void;
    _flipedUV(uvs: any, distance: any, flip: any, bevel: any): void;
    set needsUpdate(arg: boolean);
    get needsUpdate(): boolean;
}
import { ShadowVolumeLineGeometry } from "../ShadowVolumLineGeometry";
