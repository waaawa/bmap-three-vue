/**
 * 引擎事件系统，可通过[[Engine]].event属性访问
 * 用于对模型或虚拟实体等进行事件绑定
 * ```javascript
 * engine.event.bind('click', e => {
 *     console.log(e);
 * });
 * ```
 */
export class EngineEvent {
    static EVENT_NAME_CLICK: string;
    static EVENT_NAME_DOUBLE_CLICK: string;
    static EVENT_NAME_RIGHT_CLICK: string;
    static EVENT_NAME_RIGHT_DOUBLE_CLICK: string;
    static EVENT_NAME_MOUSE_MOVE: string;
    static EVENT_NAME_MOUSE_ENTER: string;
    static EVENT_NAME_MOUSE_LEAVE: string;
    static EVENT_NAME_POINTER_DOWN: string;
    static EVENT_NAME_POINTER_UP: string;
    /**
     *
     * @param [[Engine]] engine
     */
    constructor(engine: any);
    /**
     * @private
     * 实时拾取是否启用，根据bind事件情况内部自动计算
     */
    private _realtimePickEnabled;
    /**
     * @private
     * 鼠标拾取是否需要执行
     */
    private _mousePickNeedsUpdate;
    /**
     * @private
     * 鼠标归一化坐标
     */
    private _mouse;
    /**
     * @private
     * 鼠标原始坐标
     */
    private _mousePosition;
    /**
     * @private
     * 存储各个事件的map
     * eventName: Map({
     *     [Object]: [callback1, callback2],
     *     [Object2]: [callback21, callback22],
     *     ...
     * })
     * ...
     */
    private _eventMaps;
    /**
     * @private
     * 存储物体的各个事件
     * [Object]: {
     *     click: [callback, ...],
     *     mousemove: [callback, ...],
     * }
     * ...
     */
    private _objectEvents;
    /**
     * @private
     */
    private _raycaster;
    /**
     * @private
     */
    private _mapPlane;
    /**
     * @private
     */
    private _tempVector3;
    /**
     * @private
     */
    private _intersections;
    /**
     * @private
     */
    private _defaultEventObject;
    /**
     * @private
     * 上次pick相交的物体的参数
     */
    private _mousePickParams;
    /**
     * @private
     * 上次鼠标pick相交的物体的参数
     */
    private _lastMousePickIntersectParams;
    /** @private */ private _engine;
    /** @private */ private _pickEventNames;
    /**
     *
     * @param {Object3D} object 三维物体，继承自THREE.Object3D。可省略，省略时相当于给场景中的空区域添加事件。
     *  如click时间，如果object设置为一个立方体，则在点击立方体时触发事件，object省略时，点击空白区域触发事件。
     * @param {string} eventName 事件名称，如'click'
     * @param {Function} callback 触发事件时的回调函数，回调函数中会返回封装过的事件对象
     *
     * ### 示例
     * #### 给立方体绑定点击事件
     * ```javascript
     *    engine.event.bind(cube, 'click', e => {
     *         console.log(e)
     *    });
     * ```
     * #### 给容器绑定点击事件
     * ```javascript
     *    engine.event.bind('click', e => {
     *         console.log(e)
     *    });
     * ```
     * ### 回调函数参数说明
     * | 属性 | 含义 |
     * | --- | --- |
     * | e.point | 经纬度坐标 |
     * | e.position | 三维场景中的坐标，根据不同容器结果不同 |
     * | e.pixel | 像素坐标 |
     * | e.event | 原始事件，如浏览器点击事件，地图点击事件 |
     * | e.object  | 触发事件的物体 |
     * | e.entity  | 触发事件的具体实例，如3DTiles中的某个单体，点图层中的某个点 |
     */
    bind(object: any, eventName: string, callback: Function): void;
    /**
     * 解除object的eventName事件绑定的callback
     * @param {Object3D} object 三维物体
     * @param {string} eventName 事件名称
     * @param {Function} callback 给object绑定的触发事件时的回调函数
     */
    unbind(object: any, eventName: string, callback: Function): void;
    /**
     * 给复杂glb模型（scene）添加事件代理
     * @param {object} scene scene对象，默认的指定代理对象
     * @param {object} proxyObject 可选, 另指定事件代理对象
    */
    markEventProxy(scene: object, proxyObject: object): void;
    createMultipleToggleEvent(callbacks: any, startIndex?: number): MultipleToggleEvent;
    _executeCallbacks(callbacks: any, e: any): void;
    /**
     * @private
     */
    private _checkShouldEnableRealtimePick;
    /**
     * @private
     */
    private _raycast;
    /**
     * @private
     */
    private get3DTilesObject;
    /**
     * @private
     */
    private get3DTilesPropertiesByBatchId;
    /**
     * @private
     */
    private triggerFirstEventObject;
    /**
     * @private
     */
    private _getEventEntity;
    /**
     * @private
     */
    private _getEventProxyObject;
    /**
     * @private
     */
    private _correctHitPosition;
    /**
     * @private
     */
    private _handlePointerDown;
    /**
     * @private
     */
    private _handlePointerUp;
    /**
     * @private
     */
    private _handleClick;
    /**
     * @private
     */
    private _handleDblClick;
    /**
     * @private
     */
    private _handleRightClick;
    /**
     * @private
     */
    private _handleRightDblClick;
    /**
     * @private
     */
    private _updateMouse;
    /**
     * 请求一次射线检测，
     * 只是标记在下一帧渲染之前需要进行射线检测
     * 仅当事件列表中含有需要raycast的物体时，才会生效
     * 由地图的mousemove事件调用
     */
    requestMousemoveRaycast(e: any): void;
    /**
     * 执行射线检测，并触发鼠标pick事件，mousemove、mouseenter、mouseleave、[dragging]
     * 由rendering在渲染前调用
     * 如果没有监听鼠标的pick相关事件，则什么都不做
     */
    executeMousemoveRaycast(): void;
    /**
     * @private
     * leave触发时传递的物体时上次pick的物体
     */
    private _triggerMouseleaveEvent;
    /**
     * @private
     */
    private _isSameObjectAndEntity;
    /**
     * @private
     * 和click的逻辑同步
     */
    private _getMouseHoverIntersetion;
    dispose(): void;
}
import { MultipleToggleEvent } from "./event/MultipleToggleEvent";
