export class RenderingXr {
    constructor(rendering: any);
    _rendering: any;
    init(): void;
    cameraGroup: any;
    dispose(): void;
    onSessionStart: () => void;
    onSessionEnd: () => void;
}
