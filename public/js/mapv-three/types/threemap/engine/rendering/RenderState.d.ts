export class RenderState {
    _time: number;
    _viewChanged: boolean;
    _viewMatrixWorld: any;
    _viewMatrixWorldInverse: any;
    _projectionMatrix: any;
    _cameraMatrix: any;
    _cameraMatrixInverse: any;
    _cameraOffsetX: number;
    _cameraOffsetY: number;
    _frameCount: number;
    beginFrame(rendering: any, time: any): void;
    _deltaTime: number | undefined;
    _deltaSeconds: number | undefined;
    endFrame(): void;
    updateCameraOffsetState(camera: any, offsetX: any, offsetY: any): void;
    get time(): number;
    get viewChanged(): boolean;
    get viewMatrixWorld(): any;
    get viewMatrixWorldInverse(): any;
    get projectionMatrix(): any;
    get cameraMatrix(): any;
    get cameraMatrixInverse(): any;
    get cameraOffsetX(): number;
    get cameraOffsetY(): number;
    get deltaTime(): number | undefined;
    get deltaSeconds(): number | undefined;
    get frameCount(): number;
}
