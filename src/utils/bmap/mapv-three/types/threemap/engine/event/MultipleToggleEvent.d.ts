export class MultipleToggleEvent extends FlowEvent {
    constructor(callbacks: any, startIndex?: number);
    _currentIndex: number;
    _callbacks: any[];
}
import { FlowEvent } from "./FlowEvent";
