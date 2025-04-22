/**
 * 动态天空，根据时间有不同的光照效果，不能用于BMapGL，如果需要和百度地图叠加使用，请用[[EmptySky]] <br />
 * 需要放到[[Engine]]中生效，继承自[[EmptySky]]
 * ```javascript
 * let sky = engine.add(new mapvthree.DynamicSky());
 * sky.time = 3600 * 17.5;
 * ```
 * ![](media://dynamic_sky.png)
 */
export class UltraDynamicSky extends EmptySky {
    isUltraDynamicSky: boolean;
    /** @private */ private _rtFlipCount;
    /** @private */ private _skyNeedsUpdate;
    /** @private */ private _staticEnvMapNeedsUpdate;
    /** @private */ private _realtimeCapture;
    /** @private */ private _envMapType;
    /** @private */ private _PMREMGenerator;
    /** @private */ private _cloud;
    /** @private */ private _envRenderTarget1;
    /** @private */ private _envRenderTarget2;
    /** @private */ private _skyAtmosphere;
    name: string;
    dynamicCloud: boolean;
    /** @internal */
    initEnv(): void;
    _postPass: SkyAtmospherePass | undefined;
    /** @internal */
    updateRealtimeEnvironment: () => void;
    getTextures(): any[];
    set cloudIntensity(arg: any);
    get cloudIntensity(): any;
    set mixGrayFactor(arg: any);
    get mixGrayFactor(): any;
    set realtimeCapture(arg: boolean);
    get realtimeCapture(): boolean;
    get skyAtmosphere(): any;
    set clipUnderground(arg: boolean);
    get clipUnderground(): boolean;
    set enablePostPass(arg: any);
    get enablePostPass(): any;
    disposeEnvRenderTarget: (type: any) => void;
}
import { EmptySky } from "./EmptySky";
import { SkyAtmospherePass } from "../engine/rendering/postprocessing/SkyAtmospherePass";
