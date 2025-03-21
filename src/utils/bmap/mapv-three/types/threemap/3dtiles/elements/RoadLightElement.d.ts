export class RoadLightElement extends AbstractElement {
    /** @protected */ protected _powerStates: Set<any>;
    /** @protected */ protected _colorStates: Map<any, any>;
    /** @protected */ protected _allPowerOn: boolean;
    /** @private */
    private _refreshPowerViewState;
    setPowerState(id: any, on: any): void;
    togglePowerState(id: any): void;
    isPowerOn(id: any): boolean;
    setColor(id: any, color: any): void;
    set allPowerOn(arg: boolean);
    get allPowerOn(): boolean;
}
import { AbstractElement } from "./AbstractElement";
