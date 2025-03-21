export class MeshLine {
    positions: any[];
    previous: any[];
    next: any[];
    side: any[];
    width: any[];
    indices_array: any[];
    uvs: any[];
    counters: any[];
    geometry: any;
    widthCallback: any;
    matrixWorld: any;
    setMatrixWorld(matrixWorld: any): void;
    setGeometry(g: any, c: any): void;
    raycast(): (raycaster: any, intersects: any) => void;
    compareV3(a: any, b: any): boolean;
    copyV3(a: any): any[];
    computeBoundingSphere(): void;
    boundingSphere: any;
    process(): void;
    attributes: {
        position: any;
        previous: any;
        next: any;
        side: any;
        width: any;
        uv: any;
        index: any;
        counters: any;
    } | undefined;
    /**
     * Fast method to advance the line by one position.  The oldest position is removed.
     * @param position
     */
    advance(position: any): void;
}
export class MeshLineMaterial extends CommonShaderMaterial {
    type: string;
    emissiveEnabled: boolean;
    emissive: number[];
    isMeshLineMaterial: boolean;
    copy(source: any): MeshLineMaterial;
    lineWidth: any;
    map: any;
    useMap: any;
    alphaMap: any;
    useAlphaMap: any;
    opacity: any;
    sizeAttenuation: any;
    near: any;
    far: any;
    useDash: any;
    visibility: any;
    isTrip: any;
    isMax: any;
    isEmissive: any;
    emissiveIntensity: any;
    colorTrip: any;
    alphaTest: any;
}
import { CommonShaderMaterial } from "../../../threejs/materials/CommonShaderMaterial";
