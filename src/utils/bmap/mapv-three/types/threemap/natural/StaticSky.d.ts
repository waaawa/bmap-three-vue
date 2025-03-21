/**
 * 静态天空，预置了常见的天气状态和时段状态
 * ![](media://static_sky.png)
 */
export class StaticSky extends CustomStaticSky {
    constructor();
    isStaticSky: boolean;
    /** @internal */ _phase: string;
    /** @internal */ _lastPhase: any;
    /** @internal */ _lastWeather: any;
    /** @internal */ _nightStartTime: number;
    /** @internal */ _nightEndTime: number;
    /** @internal */ _afternoonTime: number;
    /** @internal */ _duskTime: number;
    /**
     * 加载纹理用于天空，加载的纹理由天气和时间决定
     */
    loadSkyTexture(): void;
}
import { CustomStaticSky } from "./CustomStaticSky";
