export class RenderingColorAdjust {
    constructor(rendering: any);
    _needsCreate: boolean;
    _rendering: any;
    _enabled: boolean;
    _brightness: number;
    _saturation: number;
    _contrast: number;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set brightness(arg: number);
    get brightness(): number;
    set contrast(arg: number);
    get contrast(): number;
    set saturation(arg: number);
    get saturation(): number;
    updateComposition: (thisProperty: any, compositionProperty: any, value: any) => void;
    createFog: () => void;
    destory: () => void;
    render(): void;
}
