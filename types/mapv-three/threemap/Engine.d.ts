/**
 * 这是引擎核心入口，用来初始化渲染引擎，内部核心系统为[[EngineMap]]、[[EngineRendering]]和[[EngineEvent]]，内部控件为[[EngineControls]]
 *
 * ```javascript
 * const engine = new Engine(container, options);
 * ```
 */
export class Engine {
    /**
     *
     * @param {EngineMap | HTMLElement} container 容器对象
     * @param {object} options 配置信息，可以对rendering、event、map、contorls等主要模块进行配置
     */
    constructor(container: EngineMap | HTMLElement, options?: object);
    /** @private */ private _container;
    /** @private */ private _event;
    /** @private */ private _map;
    /** @private */ private _rendering;
    /** @private */ private _selection;
    /** @private */ private _controls;
    isEngine: boolean;
    /**
     * 将object放到渲染场景中
     * @param {Object3D} object threejs或者mapvthree的object对象
     */
    add(object: any): any;
    /**
     * 将object从渲染场景中移除
     * @param {Object3D} object threejs或者mapvthree的object对象
     */
    remove(object: any): void;
    /**
     * 发起在下一帧进行渲染的命令
     */
    requestRender(): void;
    /**
     * 添加callback函数到函数列表中
     */
    addPrepareRenderListener(callback: any): void;
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
     * 从函数列表中移除callback函数
     */
    removePrepareRenderListener(callback: any): void;
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
    /**
     * 锁定相机视野
     */
    lockCamera(): void;
    /**
     * 解锁相机视野
     */
    unlockCamera(): void;
    /**
     * mapvthree的canvas对象
     */
    get container(): HTMLElement | EngineMap;
    /**
     * mapvthree的map对象
     */
    get map(): EngineMap;
    /**
     * mapvthree的rendering对象
     */
    get rendering(): EngineRendering;
    /**
     * mapvthree的control对象
     */
    get controls(): EngineControls;
    /**
     * mapvthree的renderer对象
     */
    get renderer(): any;
    /**
     * mapvthree的场景对象
     */
    get scene(): any;
    /**
     * mapvthree的相机对象
     */
    get camera(): any;
    /**
     * mapvthree的事件对象
     */
    get event(): EngineEvent;
    /**
     * 物体选择器
     */
    get selection(): EngineSelection;
    /**
     * 释放全部资源，之后引擎实例不再可用
    */
    dispose(): void;
    /**
     * open版jsapi埋点数据统计
    */
    trackingRequest(): void;
}
import { EngineMap } from "./engine/Map";
import { EngineRendering } from "./engine/Rendering";
import { EngineControls } from "./engine/Controls";
import { EngineEvent } from "./engine/Event";
import { EngineSelection } from "./engine/Selection";
