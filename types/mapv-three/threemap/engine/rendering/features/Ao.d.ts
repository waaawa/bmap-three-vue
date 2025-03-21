export class FeatureAo extends Feature {
    /** @private
     * ssao | sao
     */
    private _method;
    _ssaoKernelRadius: number;
    _ssaoMinDistance: number;
    _ssaoMaxDistance: number;
    _ssaoIntensity: number;
    _lastMethod: string;
    _lastEnabled: boolean;
    _disableOldMethod(): void;
    _ssaoPass: SSAOPass | null | undefined;
    _enableNewMethod(): void;
    afterRender(): void;
    dispose(): void;
    set method(arg: string);
    get method(): string;
    set ssaoKernelRadius(arg: number);
    get ssaoKernelRadius(): number;
    set ssaoMinDistance(arg: number);
    get ssaoMinDistance(): number;
    set ssaoMaxDistance(arg: number);
    get ssaoMaxDistance(): number;
    set ssaoIntensity(arg: number);
    get ssaoIntensity(): number;
}
import { Feature } from "./Feature";
import { SSAOPass } from "../postprocessing/SSAOPass";
