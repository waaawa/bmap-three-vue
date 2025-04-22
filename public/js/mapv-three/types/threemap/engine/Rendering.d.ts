/**
 * 抽象渲染管理类，可操控渲染效果<br />
 * 该类会随[[Engine]]的初始化自动实例化，通常不需要开发者手动执行初始化调用，可以用于操控天空、泛光、阴影、色度、纹理等渲染效果
 * ```javascript
 * engine.rendering.useMRT = true;
 * engine.rendering.bloom.enabled = true;
 * engine.rendering.shadow.enabled = true;
 * ```
 */
export class EngineRendering {
    constructor(engine: any, overrideOptions?: {});
    /** @private */ private _engine;
    /** @private */ private _outputEncoding;
    /** @private */ private _enableAnimationLoop;
    /** @private */ private _animationLoopFrameTime;
    /** @private */ private _uniforms;
    /** @private */ private _main;
    /** @private */ private _shadow;
    /** @private */ private _bloom;
    /** @private */ private _ssr;
    /** @private */ private _composition;
    /** @private */ private _fog;
    /** @private */ private _label;
    /** @private */ private _colorAdjust;
    /** @private */ private _renderState;
    /** @private */ private _camera;
    /** @private */ private _canvas;
    /** @private */ private _context;
    /** @private */ private _renderer;
    /** @private */ private _scene;
    /** @private */ private _weather;
    /** @private */ private _useMRT;
    /** @private */ private _isUseMRTChanged;
    /** @private */ private _freezeUpdate;
    /** @private */ private _isRunning;
    /** @private */ private _needsRenderImmediately;
    /** @private */ private _needsRenderNext;
    /** @private */ private _beforeRenderListeners;
    /** @private */ private _prepareRenderListeners;
    /** @private */ private _startTime;
    /** @private */ private _pixelRatio;
    /** @private */ private _resolution;
    /** @private */ private _sky;
    /** @private */ private _debugShaderType;
    /** @private */ private _beforeScenePrepareRenderObjects;
    /** @private */ private _beforeSceneRenderObjects;
    /** @private */ private _onRenderModeChangedObjects;
    /** @private */ private _useClip;
    /** @private */
    private _wireframe;
    /** @private */
    private _wireframeMaterial;
    /** @private 是否自动偏移相机和场景，以使worldMatrix偏移值较小 */
    private _autoOffsetRelativeCenter;
    _contextParameters: {
        alpha: boolean;
        stencil: boolean;
        antialias: boolean;
        powerPreference: string;
        preserveDrawingBuffer: boolean;
    };
    _needsReCreateRenderer: boolean;
    _options: any;
    _useXR: any;
    _stats: RenderingStats;
    _postprocessing: RenderingPostProcessing;
    _collision: RenderingCollision;
    _animation: RenderingAnimation;
    _xr: RenderingXr;
    getInitialConfig(overrideConfig: any): any;
    /**
     * 初始化函数，创建canvas、camera、scene等对象，获得渲染器renderer
     */
    init(): void;
    objectsScene: any;
    environmentScene: any;
    _createRenderer(): void;
    /** @internal */
    handleShaderBeforeResolve: (vertexShader: any, fragmentShader: any, parameters: any) => {
        vertexShader: any;
        fragmentShader: any;
    };
    /** @internal */
    handleShaderBeforeCompile: (vertexShader: any, fragmentShader: any, parameters: any) => {
        vertexShader: any;
        fragmentShader: any;
    };
    convertMrtSupportedFragment: (fragmentShader: any) => any;
    convertNMrtSupportedFragment: (fragmentShader: any, shaderID: any) => any;
    /**
     * 添加callback函数到函数列表中，每次渲染更新时执行
     * @param {Function} callback
     */
    addBeforeRenderListener(callback: Function): void;
    /**
     * 从函数列表中移除callback函数，在渲染更新时不再执行
     * @param {Function} callback
     */
    removeBeforeRenderListener(callback: Function): void;
    /**
     * 添加callback函数到函数列表，在object.onBeforeScenePrepareRender执行之后执行
     * @param {Function} callback
     */
    addPrepareRenderListener(callback: Function): void;
    /**
     * 从函数列表中移除callback函数，在渲染更新时不再执行
     * @param {Function} callback
     */
    removePrepareRenderListener(callback: Function): void;
    /**
     * 添加scene到渲染场景中
     * @param {Object3D} scene scene为一个Object3D对象
     * @returns {Object3D}
     */
    add(scene: any): any;
    /**
     * 将scene从渲染场景中移除
     * @param {Object3D} scene scene为一个Object3D对象
     */
    remove(scene: any): void;
    /**
     * 如果对象上有onBeforeScenePrepareRender，记录object对象，每次渲染更新之前执行object上的onBeforeScenePrepareRender函数
     * @param {Object3D} object
     */
    addBeforePrepareRenderObject(object: any): void;
    /**
     * 从记录对象的列表中移除object
     * @param {Object3D} object
     */
    removeBeforePrepareRenderObject(object: any): void;
    /**
     * 如果对象上有onBeforeSceneRender，记录object对象，每次渲染更新之前执行object上的onBeforeSceneRender函数
     * @param {Object3D} object
     */
    addBeforeRenderObject(object: any): void;
    /**
     * 从记录对象的列表中移除object
     * @param {Object3D} object
     */
    removeBeforeRenderObject(object: any): void;
    addOnRenderModeChangeObject(object: any): void;
    removeOnRenderModeChangeObject(object: any): void;
    /**
     * 开启循环渲染，在每一次raf都会请求重新渲染更新场景
     */
    startRenderLoop(): void;
    /**
     * 停止循环渲染
     */
    stopRenderLoop(): void;
    /**
     * 更新地图相机
     */
    updateCamera(): void;
    /**
     * 请求一次渲染更新
     */
    requestRender(): void;
    /**
     * 渲染场景
     * @param {number} time
     */
    renderScene(time: number): void;
    _useMRTChanged: boolean | undefined;
    /**
     * 判断是否需要渲染更新，当需要重新渲染时进行一次更新操作
     * @returns
     */
    render: () => void;
    lastRenderTime: any;
    updateContextParameters(parameters: any): void;
    setResolution(resolution: any): void;
    scaleZAtCurrentPosition: () => void;
    /**
     * 释放场景中的资源，停止渲染更新操作
     */
    dispose(): void;
    get contextParameters(): {
        alpha: boolean;
        stencil: boolean;
        antialias: boolean;
        powerPreference: string;
        preserveDrawingBuffer: boolean;
    };
    /**
     * 天空实例
     */
    get sky(): any;
    /**
     * 天气实例
     */
    get weather(): any;
    set debugShaderType(arg: number);
    get debugShaderType(): number;
    get isUseMRTChanged(): boolean | undefined;
    set useMrt(arg: boolean);
    get useMrt(): boolean;
    set useMRT(arg: boolean);
    /**
     * mrt实例
     */
    get useMRT(): boolean;
    get main(): RenderingMainNew;
    /**
     * 阴影实例
     */
    get shadow(): RenderingShadow;
    /**
     * Bloom实例，用于模拟泛光效果
     */
    get bloom(): import("./rendering/features/Bloom").FeatureBloom;
    /**
     * ssr实例，用于开启屏幕空间反射来优化展示效果
     */
    get ssr(): RenderingSsr;
    get composition(): RenderingComposition;
    /**
     * 雾实例
     */
    get fog(): RenderingFog;
    get postprocessing(): RenderingPostProcessing;
    get label(): RenderingLabel;
    /**
     * 颜色调整，可以调整亮度、饱和度、对比度等值
     */
    get colorAdjust(): RenderingColorAdjust;
    /**
     * 用来保存渲染状态，如视图矩阵、相机的世界坐标等信息
     */
    get renderState(): RenderState;
    get stats(): RenderingStats;
    /**
     * 全局碰撞检测管理
     */
    get collision(): RenderingCollision;
    /**
     * 动画管理器
     */
    get animation(): RenderingAnimation;
    /**
     * WebXR管理
     */
    get xr(): RenderingXr;
    set enableAnimationLoop(arg: any);
    /**
     * 是否开启循环渲染
     */
    get enableAnimationLoop(): any;
    set animationLoopFrameTime(arg: any);
    /**
     * 循环渲染的事件间隔，默认为16ms
     */
    get animationLoopFrameTime(): any;
    set resolution(arg: any);
    /**
     * 渲染场景分辨率
     */
    get resolution(): any;
    set pixelRatio(arg: number);
    /**
     * 设备像素比，默认为window.devicePixelRatio
     */
    get pixelRatio(): number;
    set outputEncoding(arg: any);
    /**
     * 渲染器的输出编码，默认为sRGBEncoding
     */
    get outputEncoding(): any;
    /**
     * 绘图对象canvas实例
     */
    get canvas(): any;
    /**
     * 渲染器对象
     */
    get renderer(): any;
    /**
     * 相机对象
     */
    get camera(): any;
    /**
     * 场景对象
     */
    get scene(): any;
    /**
     * 全局uniforms对象，其包括time、elapsedTime、pixelRatio、zoomUnits、resolution
     */
    get uniforms(): any;
    /**
     * 是否开启线框模式
     */
    set wireframe(arg: boolean);
    get wireframe(): boolean;
    set autoOffsetRelativeCenter(arg: boolean);
    /**
     * 是否自动偏移相机和场景，以使worldMatrix偏移量较小
     */
    get autoOffsetRelativeCenter(): boolean;
    set freezeUpdate(arg: boolean);
    /**
     * 是否禁止更新
     */
    get freezeUpdate(): boolean;
}
import { RenderingStats } from "./rendering/Stats";
import { RenderingPostProcessing } from "./rendering/PostProcessing";
import { RenderingCollision } from "./rendering/Collision";
import { RenderingAnimation } from "./rendering/Animation";
import { RenderingXr } from "./rendering/Xr";
import { RenderingMainNew } from "./rendering/MainNew";
import { RenderingShadow } from "./rendering/Shadow";
import { RenderingSsr } from "./rendering/Ssr";
import { RenderingComposition } from "./rendering/Composition";
import { RenderingFog } from "./rendering/Fog";
import { RenderingLabel } from "./rendering/Label";
import { RenderingColorAdjust } from "./rendering/ColorAdjust";
import { RenderState } from "./rendering/RenderState";
