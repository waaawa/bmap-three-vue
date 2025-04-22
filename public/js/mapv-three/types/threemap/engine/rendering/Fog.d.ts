export class RenderingFog {
    constructor(rendering: any);
    _needsCreate: boolean;
    _fogStartFactor: number;
    _rendering: any;
    _enabled: boolean;
    _density: number;
    _color: any;
    _skyColorStartFactor: number;
    _altitudeBottom: number;
    _altitudeTop: number;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set color(arg: any);
    get color(): any;
    set density(arg: number);
    get density(): number;
    set skyColorStartFactor(arg: number);
    get skyColorStartFactor(): number;
    set altitudeTop(arg: number);
    get altitudeTop(): number;
    set altitudeBottom(arg: number);
    get altitudeBottom(): number;
    createFog: () => void;
    destoryFog: () => void;
    render(): void;
}
