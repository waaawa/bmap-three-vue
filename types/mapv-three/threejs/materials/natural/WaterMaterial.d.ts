/**
 * ![](media://water_material.png)
 */
export class WaterMaterial extends CommonShaderMaterial {
    constructor(parameters?: {});
    /** @private */ private _timeScaleFactor;
    /** @private */ private _style;
    type: string;
    vertexShader: any;
    fragmentShader: any;
    isWaterMaterial: boolean;
    lights: boolean;
    fog: boolean;
    defines: {
        CUBEUV_TEXEL_WIDTH: number;
        CUBEUV_TEXEL_HEIGHT: number;
        CUBEUV_MAX_MIP: string;
    };
    /**
     * 设置水系样式，默认为lake
     * @param {'river'|'lake'|'ocean'} style 样式名称，只接受'river', 'lake', 'ocean'
     */
    set style(arg: "river" | "lake" | "ocean");
    get style(): "river" | "lake" | "ocean";
    /** @protected */
    protected onBeforeSceneRender(engine: any, scene: any, camera: any, renderState: any): void;
    set timeScaleFactor(arg: number);
    get timeScaleFactor(): number;
    normalMap: any;
    waterBedMap: any;
    dispose(): void;
}
import { CommonShaderMaterial } from "../CommonShaderMaterial";
