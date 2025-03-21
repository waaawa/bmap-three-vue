/**
 * 空白天空，通常和BMapGL地图混用时使用，如果使用的是空白地图，可以使用效果更好的[[DynamicSky]]
 * ![](media://emptysky.png)
 */
export class EmptySky {
    isEmptySky: boolean;
    /** @private */ private _addDefaultEnvMap;
    /** @private */ private _time;
    /** @private */ private _startTimestamp;
    /** @private */ private _timeAnimation;
    /** @private */ private _timeAnimationSpeed;
    /** @private */ private _skyLightIntensity;
    /** @private */ private _skyLightAttenuationRatio;
    /** @private */ private _sunIntensityBias;
    /** @private */ private _sunIntensityScale;
    /** @private */ private _weather;
    /** @private */ private _timeChangedListeners;
    /** @private */ private _sunDirection;
    /** @private */ private _sunLightColorDay;
    /** @private */ private _sunLightColorSunset;
    /** @private */ private _sunLightColorCurrent;
    /** @private */ private _sunRadian;
    /** @private */ private _skyLightColorDay;
    /** @private */ private _skyLightColorNight;
    /** @private */ private _groundLightColorDay;
    /** @private */ private _groundLightColorNight;
    /** @private */ private _lightNeedsUpdate;
    /** @private */ private _sunNeedsUpdate;
    /** @private */
    private _affectWorld;
    sunLight: any;
    skyLight: any;
    renderOrder: number;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    engine: any;
    beforeRemoveFromEngine(engine: any): void;
    /**
     * 设置时间，更新太阳光源位置，标记更新
     */
    set time(arg: number);
    /**
     * 获取时间
     */
    get time(): number;
    set weather(arg: string);
    /**
     * 天气
     */
    get weather(): string;
    set timeAnimation(arg: boolean);
    /**
     * 是否自动更新时间
     */
    get timeAnimation(): boolean;
    set timeAnimationSpeed(arg: number);
    /**
     * 自动更新时间的速度
     */
    get timeAnimationSpeed(): number;
    /**
     * @protected
     * 更新时间
     */
    protected tickTime(): void;
    /**
     * @protected
     * 每次渲染时，更新时间和光照
     */
    protected onBeforeScenePrepareRender(): void;
    /**
     * @protected
     * 根据太阳光的高度来更新太阳光和天空光的光照强度和颜色
     */
    protected updateLight(): void;
    sunsetRatio: number | undefined;
    /**
     * @protected
     * 更新太阳阴影
     */
    protected updateSunLightShadowCamera: () => void;
    /**
     * 添加时间变化后需要执行的监听函数listener
     * @param {Function} listener
     */
    addTimeChangedListener(listener: Function): void;
    /**
     * 从时间变化后需要执行的监听函数的列表中移除listener
     * @param {Function} listener
     */
    removeTimeChangedListener(listener: Function): void;
    /**
     * 时间变化后的回调函数
     * @param {number} time 时间，单位ms
     */
    onTimeChanged(time: number): void;
    /**
     * 天气变化后的回调函数
     */
    onWeatherChanged(weather: any): void;
    dispose(): void;
    set sunIntensityBias(arg: number);
    /**
     * 太阳光的强度偏移，在计算太阳光强度时添加该偏移量的大小
     */
    get sunIntensityBias(): number;
    set sunIntensityScale(arg: number);
    /**
     * 太阳光强度的缩放值
     */
    get sunIntensityScale(): number;
    set skyLightIntensity(arg: number);
    /**
     * 天空光初始强度，默认为0.5
     */
    get skyLightIntensity(): number;
    set skyLightAttenuationRatio(arg: number);
    /**
     * 天空光衰减比，该值用于定义天空光最小的衰减值，默认为0.2
     */
    get skyLightAttenuationRatio(): number;
    /**
     * 太阳光的位置
     */
    get sunDirection(): any;
    get affectWorld(): boolean;
}
