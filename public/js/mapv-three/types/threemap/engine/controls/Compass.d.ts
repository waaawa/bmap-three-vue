/**
 * compass
 *
 * ```javascript
 * const compass = new Compass(contorlContainer, enable, engine);
 * ```
 */
export class Compass extends BaseControl {
    handleUpBtnClick(): void;
    handleDownBtnClick(): void;
    handleLeftBtnClick(): void;
    handleRightBtnClick(): void;
    handleCenterBtnClick(): void;
    _up: SVGSVGElement | undefined;
    _down: SVGSVGElement | undefined;
    _left: HTMLDivElement | undefined;
    _right: HTMLDivElement | undefined;
    _compass: HTMLDivElement | undefined;
}
import { BaseControl } from "./BaseControl";
