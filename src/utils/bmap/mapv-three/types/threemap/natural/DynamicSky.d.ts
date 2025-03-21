/**
 * 动态天空，根据时间有不同的光照效果，不能用于BMapGL，如果需要和百度地图叠加使用，请用[[EmptySky]] <br />
 * 需要放到[[Engine]]中生效，继承自[[EmptySky]]
 * ```javascript
 * let sky = engine.add(new mapvthree.DynamicSky());
 * sky.time = 3600 * 17.5;
 * ```
 * ![](media://dynamic_sky.png)
 */
export class DynamicSky extends EmptySky {
    isDynamicSky: boolean;
    /** @private */ private _rtFlipCount;
    /** @private */ private _envMapNeedsUpdate;
    /** @private */ private _staticEnvMapNeedsUpdate;
    /** @private */ private _realtimeCapture;
    /** @private */ private _envMapType;
    /** @private */ private _PMREMGenerator;
    /** @private */ private _envCubeRenderTarget1;
    /** @private */ private _envCubeRenderTarget2;
    /** @private */ private _envRenderTarget1;
    /** @private */ private _envRenderTarget2;
    /** @private */ private _lensflare;
    sky: Sky;
    cloudCubeTexture: any;
    nightMap: any;
    weatherMap: any;
    /**
     * @internal
     * 初始化天空，包括天空的动态材质和比例
     */
    initEnv(): void;
    envSky: any;
    /** @internal */
    updateRealtimeEnvironment: () => void;
    cubeCamera1: any;
    cubeCamera2: any;
    set cloudIntensity(arg: any);
    /**
     * 云的浓度，值为0-1之间，值越大浓度越高
     */
    get cloudIntensity(): any;
    getTextures(): any[];
    set rayleighFactor(arg: any);
    /**
     * 瑞利比
     */
    get rayleighFactor(): any;
    set mieFactor(arg: any);
    /**
     * 散射因子
     */
    get mieFactor(): any;
    set miePhase(arg: any);
    get miePhase(): any;
    set groundColor(arg: any);
    /**
     * 地面颜色
     */
    get groundColor(): any;
    set realtimeCapture(arg: boolean);
    get realtimeCapture(): boolean;
    set envMapType(arg: number);
    get envMapType(): number;
    set clipUnderground(arg: any);
    get clipUnderground(): any;
    set shaderIndex(arg: number);
    get shaderIndex(): number;
    /** @protected */
    protected disposeEnvRenderTarget: (type: any) => void;
}
import { EmptySky } from "./EmptySky";
import { Sky } from "../../threejs/objects/natural/Sky";
