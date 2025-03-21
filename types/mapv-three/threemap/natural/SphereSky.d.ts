/**
 * 球体天空盒
 */
export class SphereSky extends EmptySky {
    constructor(options?: {});
    isSphereSky: boolean;
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
    /** @internal */ _engine: any;
    createMaterial(): any;
}
import { EmptySky } from "./EmptySky";
