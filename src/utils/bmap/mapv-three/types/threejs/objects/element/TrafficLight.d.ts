export class TrafficLight {
    constructor(geometry: any);
    isMesh: boolean;
    _slots: any[];
    _slotCount: number;
    _numberSlot: number;
    _timeTable: any;
    _channelCount: number;
    geometry: any;
    material: TrafficLightMaterial;
    set number(arg: any);
    get number(): any;
    set slots(arg: any[]);
    get slots(): any[];
    get slotCount(): number;
    get numberSlot(): number;
    _number: any;
    set timeTable(arg: any);
    get timeTable(): any;
    _lightState: any;
    set lightState(arg: any);
    get lightState(): any;
    updateState(time: any): void;
    _active: boolean | undefined;
    updateMaterial(): void;
}
import { TrafficLightMaterial } from "../../materials/element/TrafficLightMaterial";
