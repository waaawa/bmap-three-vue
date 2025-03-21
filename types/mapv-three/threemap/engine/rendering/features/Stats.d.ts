export class FeatureStats extends Feature {
    _lastEnabled: boolean;
    _canvasWidth: number;
    _canvasHeight: number;
    _canvasPadding: number;
    _lastUpdateTime: number;
    _init(): void;
    _canvas: HTMLCanvasElement | undefined;
    _context: CanvasRenderingContext2D | null | undefined;
    _texture: any;
    _renderPass: AddTexturePass | undefined;
    _updateTexture(): void;
    afterRender(): void;
    dispose(): void;
}
import { Feature } from "./Feature.js";
import { AddTexturePass } from "../postprocessing/AddTexturePass";
