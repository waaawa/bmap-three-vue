export class FeatureAntialias extends Feature {
    /** @private
     * msaa | fxaa | taa
     */
    private _method;
    _lastMethod: string;
    _lastEnabled: boolean;
    _lastUseMRT: boolean;
    _disableOldMethod(): void;
    _fxaaPass: any;
    _taaPass: TAAPass | null | undefined;
    _enableNewMethod(): void;
    afterRender(): void;
    dispose(): void;
    set method(arg: string);
    get method(): string;
}
import { Feature } from "./Feature";
import { TAAPass } from "../postprocessing/TAAPass";
