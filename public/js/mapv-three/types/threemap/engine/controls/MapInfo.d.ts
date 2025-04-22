/**
 * MapInfo
 *
 * ```javascript
 * const mapInfo = new MapInfo(contorlContainer, enable, engine);
 * ```
 */
export class MapInfo extends BaseControl {
    _mapInfo: {
        pitch: number;
        heading: number;
        zoom: number;
        center: number[];
        mousePoint: number[];
    };
    _prefix: {
        M: string;
        C: string;
        Z: string;
        H: string;
        P: string;
    };
    _separator: string;
    _template: string;
    _enableMousePositionTracking: any;
    _eventName: string | undefined;
    eventCallback: ((e: any) => void) | undefined;
    _viewChangedCallback: (() => void) | undefined;
    /** @private */
    private update;
    updateInfoText(): void;
    set enableMousePositionTracking(arg: any);
    get enableMousePositionTracking(): any;
    set template(arg: string);
    get template(): string;
    set separator(arg: string);
    get separator(): string;
    set prefix(arg: {
        M: string;
        C: string;
        Z: string;
        H: string;
        P: string;
    });
    get prefix(): {
        M: string;
        C: string;
        Z: string;
        H: string;
        P: string;
    };
}
import { BaseControl } from "./BaseControl";
