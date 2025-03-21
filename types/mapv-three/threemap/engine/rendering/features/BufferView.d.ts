export class FeatureBufferView extends Feature {
    _lastEnabled: boolean;
    _init(): void;
    _renderPass: AddTexturePass | undefined;
    afterRender(): void;
    dispose(): void;
}
import { Feature } from "./Feature.js";
import { AddTexturePass } from "../postprocessing/AddTexturePass";
