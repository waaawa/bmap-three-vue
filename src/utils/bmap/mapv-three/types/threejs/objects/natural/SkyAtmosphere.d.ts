/**
 * ![](media://sky_atomsphere.png)
 */
export class SkyAtmosphere {
    /** @internal */ _fsQuad: any;
    /** @internal */ _hasPaintedScatterBuffer: any;
    /** @internal */ _scatteringMaterial: any;
    /** @internal */ _scatteringRenderTarget: any;
    /** @internal */ _transmittanceMaterial: any;
    /** @internal */ _transmittanceRenderTarget: any;
    /** @internal */ _viewMaterial: any;
    /** @internal */ _viewRenderTarget: any;
    geometry: any;
    frustumCulled: boolean;
    material: any;
    set altitude(arg: any);
    get altitude(): any;
    onBeforeRender(renderer: any, scene: any, camera: any): void;
    updateRenderTargets(renderer: any, camera: any): void;
    dispose(): void;
    set mixGrayFactor(arg: any);
    get mixGrayFactor(): any;
}
