/**
 * ```javascript
 * const flyManager = engine.add(new FlyManager())
 * flyManager.flyTo({
 *  zoom: 20,
 *  center: center,
 *  pitch: 0,
 *  heading: 0
 * }, {
 *  duration: 3000,
 * })
 * ```
 */
export class FlyManager {
    /** @private */ private _engine;
    /** @private */ private _isRunning;
    /** @private */ private _animationStartTime;
    /** @private */ private _animationDuration;
    /** @private */ private _animationStartState;
    /** @private */ private _animationFinishState;
    /**
     * @protected
     */
    protected afterAddToEngine(engine: any): void;
    /**
     * @protected
     */
    protected update: (engine: any, renderState: any) => void;
    /**
     * @internal
     */
    restrictHeading: (start: any, end: any) => any;
    /**
     * 视角按照animationParams中规定的动画参数切换至params指定的区域
     * @param {object} params 视角切换的目标参数,格式例如{zoom: 14,center: [100, 20]}
     * @param {object} animationParams 视角切换的动画参数,格式例如{duration: 100}
     */
    flyTo(params: object, animationParams?: object): void;
    beforeRemoveFromEngine(): void;
}
