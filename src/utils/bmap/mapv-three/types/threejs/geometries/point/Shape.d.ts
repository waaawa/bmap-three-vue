export class InstancedShapeBufferGeometry extends CustomInstancedBufferGeometry {
    constructor(parameters: any);
    _shapeType: string;
    parameters: any;
    set shapeType(arg: string);
    get shapeType(): string;
    fillNoLine: (positions: any, isLines: any, adjacentPoints: any, isLineStarts: any, lineSides: any) => void;
    generateLines: (lines: any, positions: any, isLines: any, adjacentPoints: any, isLineStarts: any, lineSides: any, index: any) => void;
    applyTransformToPositions: (positions: any, matrix: any) => any[];
    dispose(): void;
}
import { CustomInstancedBufferGeometry } from "../../core/CustomInstancedBufferGeometry";
