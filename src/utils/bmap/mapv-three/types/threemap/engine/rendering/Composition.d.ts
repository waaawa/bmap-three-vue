export class RenderingComposition {
    constructor(rendering: any);
    _enabled: boolean;
    _rendering: any;
    _renderPass: any;
    _tDiffuse: any;
    _tDepth: any;
    _tNormal: any;
    _tSpecular: any;
    _tBloom: any;
    _tReflection: any;
    _useMrt: boolean;
    set useMrt(arg: boolean);
    get useMrt(): boolean;
    set enabled(arg: boolean);
    get enabled(): boolean;
    _init(): void;
    set colorAdjustEnabled(arg: any);
    get colorAdjustEnabled(): any;
    set adjustBrightnessFactor(arg: any);
    get adjustBrightnessFactor(): any;
    set adjustContrastFactor(arg: any);
    get adjustContrastFactor(): any;
    set adjustSaturationFactor(arg: any);
    get adjustSaturationFactor(): any;
    render(): void;
    dispose(): void;
    set debugTextures(arg: any);
    set tDiffuse(arg: any);
    set tDepth(arg: any);
    set tNormal(arg: any);
    set tBloom(arg: any);
    set tReflection(arg: any);
    set tSpecular(arg: any);
    set coverageIntensity(arg: any);
    get coverageIntensity(): any;
    set tCoverageIntensity(arg: any);
    get tCoverageIntensity(): any;
    get debugDimension(): any;
    get debugOffset(): any;
    set tEnv(arg: any);
    get tEnv(): any;
    set useFog(arg: any);
    get useFog(): any;
    set fogDensity(arg: any);
    get fogDensity(): any;
    set fogSkyColorStartFactor(arg: any);
    get fogSkyColorStartFactor(): any;
    set fogAltitudeBottom(arg: any);
    get fogAltitudeBottom(): any;
    set fogAltitudeTop(arg: any);
    get fogAltitudeTop(): any;
}
