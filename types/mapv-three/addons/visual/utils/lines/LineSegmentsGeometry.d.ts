export class LineSegmentsGeometry {
    isLineSegmentsGeometry: boolean;
    type: string;
    applyMatrix4(matrix: any): LineSegmentsGeometry;
    setPositions(array: any): LineSegmentsGeometry;
    setColors(array: any): LineSegmentsGeometry;
    fromWireframeGeometry(geometry: any): LineSegmentsGeometry;
    fromEdgesGeometry(geometry: any): LineSegmentsGeometry;
    fromMesh(mesh: any): LineSegmentsGeometry;
    fromLineSegments(lineSegments: any): LineSegmentsGeometry;
    computeBoundingBox(): void;
    boundingBox: any;
    computeBoundingSphere(): void;
    boundingSphere: any;
    toJSON(): void;
    applyMatrix(matrix: any): LineSegmentsGeometry;
}
