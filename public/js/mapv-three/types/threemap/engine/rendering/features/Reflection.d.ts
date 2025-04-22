export class FeatureReflection extends Feature {
    /** @private
     * ssr
     */
    private _method;
    _lastMethod: string;
    _lastEnabled: boolean;
    _disableOldMethod(): void;
    _ssrPass: SSRPass | null | undefined;
    _enableNewMethod(): void;
    afterRender(): void;
    dispose(): void;
    set method(arg: string);
    get method(): string;
}
import { Feature } from "./Feature";
import { SSRPass } from "../postprocessing/SSRPass";
