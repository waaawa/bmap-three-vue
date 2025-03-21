export class RenderingMainNew {
    constructor(rendering: any, options: any);
    /** @private */
    private _rendering;
    /** @private
     * @type {RenderingRequirements}
    */
    private _requirements;
    /** @private */
    private _useMRT;
    /** @private
     * 初始状态为null
    */
    private _lastUseMRT;
    /** @private */
    private _sceneRendering;
    /** @private
     * @type {Features}
     */
    private _features;
    /** @private
     * @type {Postprocessings}
     */
    private _postprocessings;
    beginFrame(): void;
    render(): void;
    endFrame(): void;
    setSize(width: any, height: any): void;
    get sceneRendering(): any;
    set useFastEmissiveMethod(arg: any);
    get useFastEmissiveMethod(): any;
    get antialias(): boolean;
    get rendering(): any;
    get requirements(): RenderingRequirements;
    get features(): Features;
    get postprocessings(): Postprocessings;
}
import { RenderingRequirements } from "./RenderingRequirements";
import { Features } from "./features/Features";
import { Postprocessings } from "./postprocessing/Postprocessings";
