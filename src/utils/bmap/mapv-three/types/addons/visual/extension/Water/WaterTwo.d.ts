export class WaterTwo {
    constructor(geometry: any, options?: {});
    options: {};
    /** @private */
    private afterAddToEngine;
    engine: any;
    /**
     * 返回自定义的特效水纹理
     * @param {Object} [args] 传参
     */
    createWaterTwo(args?: Object | undefined): CommonShaderMaterial;
    init(): void;
    material: CommonShaderMaterial | undefined;
}
import { CommonShaderMaterial } from "../../../../threejs/materials/CommonShaderMaterial";
