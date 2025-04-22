export class LineSegments2 {
    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    isLineSegments2: boolean;
    type: string;
    computeLineDistances(): LineSegments2;
    raycast(raycaster: any, intersects: any): void;
}
import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";
import { LineMaterial } from "./LineMaterial.js";
