export class Twin {
    static TWIN_REALISTIC_TEMPLATE_COLOR: {
        white: string;
        black: string;
        gray: string;
        blue: string;
        red: string;
        green: string;
        brown: string;
        yellow: string;
        orange: string;
        purple: string;
        cyanl: string;
        pink: string;
    };
    constructor(options?: {});
    /** @private */ private engine;
    /** @private */ private _dataProvider;
    /** 模型额外角度 */ _extraDir: any;
    /**
     * @private
     * modelType和model的映射关系
     */
    private _modelConfig;
    /**
     * @private
     * 模型是否完成加载
     */
    private _modelLoaded;
    /**
     * @private
     * modelType和每帧entity返回buffers的映射
     */
    private _buffers;
    /**
     * @private
     * modelType和模型实例的映射
     */
    private _instances;
    /**
     * @private
     * 除模型外的孪生虚拟实体
     */
    private _objects;
    /**
     * @private
     * 除模型外的孪生虚拟实体的 dataSource 的 attribute 映射
     */
    private _objectAttributes;
    options: {};
    set modelConfig(arg: {});
    get modelConfig(): {};
    _delay: any;
    _entityManager: EntityManager;
    _objectTracker: ObjectTracker;
    /**
     * @protected
     */
    protected afterAddToEngine(engine: any): void;
    set objects(arg: any[]);
    get objects(): any[];
    push(data: any): void;
    _isStarted: boolean | undefined;
    pause(): void;
    _isPause: boolean | undefined;
    _pauseTime: number | null | undefined;
    start(): void;
    reset(): void;
    _trackInfo: {
        id: any;
        option: {
            radius: number;
            pitch: number;
            height: number;
            inside: number;
            extraDir: any;
            insideMask: string;
        };
    } | {
        id: any;
        option: {
            radius: number;
            pitch: number;
            height: number;
            inside: number;
            extraDir: any;
        };
    } | null | undefined;
    /**
     * @private
     */
    private handleBeforeRender;
    _filterBuffer(modelIndexMap: any, model: any): {
        id: any[];
        translation: any[];
        rotation: any[];
        scale: any[];
        modelType: any[];
        color: any[];
    } | null;
    loadModelAsync(url: any): Promise<any>;
    modelClear(): void;
    getCurrentBuffers(): {};
    /**
     * 设置车辆颜色
     * @param {*} id 车辆ID
     * @param {*} color 色值
     */
    setColorById(id: any, color: any): void;
    /**
     * @protected
     */
    protected _track(): void;
    /**
     * 追踪车辆
     * @param {*} id 车辆ID
     * @param {Object} option 配置
     * @param {number} option.radius 距离
     * @param {number} option.pitch 俯仰角
     * @param {number} option.height 高度
     * @param {number} option.inside 是否车内视角
     */
    trackById(id: any, option?: {
        radius: number;
        pitch: number;
        height: number;
        inside: number;
    }): void;
    /**
     * 清除追踪
     */
    clearTrack(): void;
    dispose(): void;
    get dataProvider(): any;
    get entityManager(): EntityManager;
    set objectAttributes(arg: {});
    get objectAttributes(): {};
}
import { EntityManager } from "./EntityManager";
import { ObjectTracker } from "../animations/ObjectTracker";
