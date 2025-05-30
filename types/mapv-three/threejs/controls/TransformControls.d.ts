/** @protected */
export class TransformControls {
    constructor(camera: any, domElement: any);
    /** @private */ private _cameraScale;
    /** @private */ private _endNorm;
    /** @private */ private _gizmo;
    /** @private */ private _getPointer;
    /** @private */ private _onPointerDown;
    /** @private */ private _onPointerHover;
    /** @private */ private _onPointerMove;
    /** @private */ private _onPointerUp;
    /** @private */ private _parentPosition;
    /** @private */ private _parentQuaternion;
    /** @private */ private _parentQuaternionInv;
    /** @private */ private _parentScale;
    /** @private */ private _plane;
    /** @private */ private _positionStart;
    /** @private */ private _quaternionStart;
    /** @private */ private _scaleStart;
    /** @private */ private _startNorm;
    /** @private */ private _worldQuaternionInv;
    /** @private */ private _worldScale;
    /** @private */ private _worldScaleStart;
    /** @private */ private _offset;
    /** @readonly */ readonly isTransformControls: any;
    visible: boolean;
    domElement: any;
    updateMatrixWorld(): void;
    pointerHover(pointer: any): void;
    axis: any;
    pointerDown(pointer: any): void;
    dragging: boolean | undefined;
    pointerMove(pointer: any): void;
    rotationAngle: any;
    pointerUp(pointer: any): void;
    dispose(): void;
    attach(object: any): TransformControls;
    object: any;
    detach(): TransformControls;
    reset(): void;
    getRaycaster(): any;
    getMode(): any;
    setMode(mode: any): void;
    mode: any;
    setTranslationSnap(translationSnap: any): void;
    translationSnap: any;
    setRotationSnap(rotationSnap: any): void;
    rotationSnap: any;
    setScaleSnap(scaleSnap: any): void;
    scaleSnap: any;
    setSize(size: any): void;
    size: any;
    setSpace(space: any): void;
    space: any;
    update(): void;
}
export class TransformControlsGizmo {
    type: string;
    gizmo: {};
    picker: {};
    helper: {};
    onBeforeScenePrepareRender(): void;
    isTransformControlsGizmo: boolean;
}
export class TransformControlsPlane {
    type: string;
    updateMatrixWorld(force: any): void;
    raycast(raycaster: any, intersects: any): void;
    isTransformControlsPlane: boolean;
}
