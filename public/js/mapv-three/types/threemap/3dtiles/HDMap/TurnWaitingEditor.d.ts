export class TurnWaitingEditor extends SplineAreaEditor {
    _stopBuffer: {
        position: never[][];
        index: never[];
        payload: never[];
    };
    polygonPositions: any[];
    initStop(): void;
    _stopDataSource: BufferDataSource | undefined;
    _stop: any;
}
import { SplineAreaEditor } from "../../controls/editors/SplineAreaEditor";
import { BufferDataSource } from "../../dataSource/BufferDataSource";
