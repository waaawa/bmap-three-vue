/**
 * 抽象类
 *
 * ```javascript
 * const direction = new BaseControl(container, enabled, engine);
 * ```
 */
export class BaseControl {
    constructor(container: any, controlParams: any, engine?: any);
    /** @private */ private _container;
    /** @private */ private _enabled;
    /** @private */ private _controlOptions;
    /** @private */ private _element;
    /** @private */ private _engine;
    /**
     * 初始化
     */
    init(): void;
    /**
     * 创建子节点
     */
    createDom(): void;
    /**
     * 释放内存
     */
    dispose(): void;
    /**
     * 事件解绑
     */
    onDispose(): void;
    /**
     * 父节点
     */
    get container(): any;
    /**
     * 子节点
     */
    get element(): any;
    /**
     * element显示与隐藏
     */
    set enabled(arg: boolean);
    /**
     * 获取element显示与隐藏状态
     */
    get enabled(): boolean;
}
