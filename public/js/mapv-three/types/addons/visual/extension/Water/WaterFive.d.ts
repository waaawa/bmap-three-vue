/**
 * Work based on :
 * http://slayvin.net : Flat mirror for three.js
 * http://www.adelphi.edu/~stemkoski : An implementation of water shader based on the flat mirror
 * http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : WaterFive shader explanations in WebGL
 */
export class WaterFive {
    constructor(geometry: any, options?: {});
    options: {};
    /** @private */
    private afterAddToEngine;
    engine: any;
    init(): void;
    needsUpdate: boolean | undefined;
    material: CommonShaderMaterial | undefined;
    p: any;
    far: number | undefined;
    onBeforeRender: ((renderer: any, scene: any, camera: any) => void) | undefined;
    isWater: boolean;
}
import { CommonShaderMaterial } from "../../../../threejs/materials/CommonShaderMaterial";
