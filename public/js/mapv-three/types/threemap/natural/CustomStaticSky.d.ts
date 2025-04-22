/**
 * 自定义静态天空，需要指定天空的贴图信息
 * ![](media://custom_static_sky.png)
 */
export class CustomStaticSky extends EmptySky {
    constructor(options?: {});
    isCustomStaticSky: boolean;
    /**
     * @internal
     * cube cubeuv
     */
    _textureIsCube: boolean;
    /** @internal */ _textureIsHDR: boolean;
    /** @internal */ _textureURL: any;
    /**
     * @internal
     * 仅立方体贴图使用
     */
    _textureNames: any;
    /** @internal */ _isVerticalTexture: any;
    /** @internal */ _mesh: any;
    /** @internal */ _material: any;
    /** @internal */ _sphereGeometry: any;
    /** @internal */ _envTexture: any;
    /** @internal */ _engine: any;
    /** @internal */ _PMREMGenerator: any;
    set isVerticalTexture(arg: any);
    get isVerticalTexture(): any;
    /** @internal */
    _loadSkyTexture(): void;
    set textureURL(arg: any);
    /**
     * 自定义天空贴图url
     */
    get textureURL(): any;
}
import { EmptySky } from "./EmptySky";
