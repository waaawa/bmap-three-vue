/**
 * zoom
 *
 * ```javascript
 * const zoom = new Zoom(contorlContainer, enable, engine);
 * ```
 */
export class Zoom extends BaseControl {
    /** @private */
    private handleZoomIn;
    /** @private */
    private handleZoomOut;
    _zoomAdd: HTMLDivElement | undefined;
    _zoomSub: HTMLDivElement | undefined;
}
import { BaseControl } from "./BaseControl";
