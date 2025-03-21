export class RenderingAnimation {
    constructor(rendering: any);
    /**
     * @private
     */
    private _rendering;
    /**
     * @private 默认动画混合器
     */
    private _mixer;
    _customMixers: any[];
    update(renderState: any): void;
    addMixer(mixer: any): void;
    removeMixer(mixer: any): void;
    get mixer(): any;
}
