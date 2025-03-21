export class MapControl3D {
    constructor(map: any);
    map: any;
    currentAction: number;
    startX: any;
    startY: any;
    startCenterX: any;
    startCenterY: any;
    startPitch: any;
    startHeading: any;
    startZoom: any;
    startZoomUnits: any;
    startAtTop: any;
    mapWidth: any;
    mapHeight: any;
    startCamera: any;
    startCenter: any;
    startNdc: any;
    startPoint: any;
    startScaleX: number;
    startScaleY: number;
    startBoundX: any;
    startBoundY: any;
    _enabled: boolean;
    minPitch: number;
    maxPitch: number;
    zoomSpeed: number;
    headingSpeed: number;
    pitchSpeed: number;
    doubleClickTimer: any;
    clickInterval: number;
    _rotationMode: number;
    _buttonDown: {
        LEFT: boolean;
        MIDDLE: boolean;
        RIGHT: boolean;
    };
    _primaryStartPosition: any;
    _primaryPosition: any;
    _primaryPreviousPosition: any;
    _positions: Map<any, any>;
    _previousPositions: Map<any, any>;
    _isPinching: boolean;
    _isTouchHolding: boolean;
    _lastPinchDist: number;
    _lastSeenTouchEvent: number;
    _whichKindOfPinch: any;
    _pinchConnectPosition: {
        position1: any;
        position2: any;
    };
    _pinchActionPosition: {
        position1: any;
        position2: any;
    };
    _pinchActionTimer: any;
    _touchHoldTimer: any;
    _clickPixelTolerance: number;
    _holdPixelTolerance: number;
    set enabled(arg: any);
    init: () => void;
    initCursorAnchor: () => void;
    cursorAnchor: HTMLDivElement | undefined;
    showCursorAnchor: (x: any, y: any) => void;
    hideCursorAnchor: () => void;
    handleResize: (e: any) => void;
    fireTouchEvents: (e: any) => void;
    hasMoved: boolean | undefined;
    startDistance: any;
    fireTouchMoveEvents: (e: any) => void;
    handlePointerMove: (e: any) => void;
    handleMouseMove: (e: any) => void;
    handlePointerDown: (e: any) => void;
    handleMouseDown: (e: any) => void;
    handleMouseDragging: (e: any) => void;
    handleCameraBeforeRender(): void;
    originCamera: any;
    originMap: {
        center: any;
        pitch: any;
        heading: any;
    } | undefined;
    handlePointerUp: (e: any) => void;
    handleMouseUp: (e: any) => void;
    waitSecondClick: boolean | undefined;
    clearDoubleClickTimer: () => void;
    handleContextMenu: (e: any) => void;
    handleWheel: (e: any) => void;
    handlePan: (x: any, y: any) => void;
    handleRotate: (x: any, y: any) => void;
    handleZoom: (zoomOptions: any) => void;
    getPixelPositon(e: any): number[];
    currentPixelX: number | undefined;
    currentPixelY: number | undefined;
    ndcToPoint(pixel: any, camera: any, target: any): boolean;
    getNdc(px: any, py: any, target: any): void;
    makeHeadingSafe: (heading: any) => any;
    makePitchSafe: (pitch: any) => any;
    dispose: () => void;
}
