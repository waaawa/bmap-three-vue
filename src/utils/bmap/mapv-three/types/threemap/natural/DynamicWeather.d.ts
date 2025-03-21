/**
 * 动态天气系统，包含雨雪等等，需要基于动态天空[[DynamicSky]]
 * ```js
 * const weather = engine.add(new mapvthree.DynamicWeather(sky));
 * ```
 * ![](media://dynamic_weather.png)
 */
export class DynamicWeather {
    constructor(sky: any);
    /** @private */ private _engine;
    /** @private */ private _sky;
    /** @private */ private _snow;
    /** @private */ private _rain;
    /** @private */ private _weather;
    /** @private */ private _currentConverageTextureType;
    /** @private */ private _tCoverageIntensity;
    /** @private */ private _skyGroundColorBlue;
    /** @private */ private _skyGroundColorGray;
    /** @private */ private _weatherChangedListeners;
    /** @private */
    private _sunLightScale;
    /** @private */
    private _skyLightScale;
    transitionDuration: number;
    /** @private */
    private _transitionStartTime;
    _transitionStartState: {};
    _transitionEndState: {};
    _inTransition: boolean;
    _modifyCount: number;
    set weather(arg: string);
    /**
     * 天气实例
     */
    get weather(): string;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    /** @internal */
    handleBeforeRender: (engine: any) => void;
    /** @internal */
    getCoverageTexture(type: any): any;
    /** @internal */
    updateWeather(weather: any): void;
    set tCoverageIntensity(arg: any);
    get tCoverageIntensity(): any;
    _updateWeatherTransitionState: (ratio: any) => void;
    /** @internal */
    addWeatherChangedListener(listener: any): void;
    /** @internal */
    removeWeatherChangedListener(listener: any): void;
    /** @internal */
    beforeRemoveFromEngine: (engine: any) => void;
    set sunIntensityScale(arg: any);
    /**
     * 太阳光强度缩放值
     */
    get sunIntensityScale(): any;
    set cloudIntensity(arg: any);
    /**
     * 用于定义天空背景中云的强度
     */
    get cloudIntensity(): any;
    set skyLightIntensity(arg: any);
    /**
     * 天空光初始强度
     */
    get skyLightIntensity(): any;
    set groundColor(arg: any);
    /**
     * 地面颜色
     */
    get groundColor(): any;
    set mixGrayFactor(arg: any);
    /**
     * 天空混合灰度
     */
    get mixGrayFactor(): any;
    set coverageIntensity(arg: any);
    get coverageIntensity(): any;
    set tRelectionEnhancement(arg: any);
    get tRelectionEnhancement(): any;
    /**
     * 用于定义雾的浓度，浓度越高，场景中的事物越模糊
     */
    set fogDensity(arg: any);
    get fogDensity(): any;
    set skyLightScale(arg: number);
    /**
     * 天空光强度缩放值
     */
    get skyLightScale(): number;
    set sunLightScale(arg: number);
    /**
     * 太阳光强度缩放值
     */
    get sunLightScale(): number;
}
