export class RenderingPostProcessing {
    constructor(rendering: any);
    /**
     * 默认不开启后处理，addPass之后自动开启，也可用户手动开启
     */
    _enabled: boolean;
    _useMrt: boolean;
    _rendering: any;
    _renderComposer: any;
    _passes: any[];
    set useMrt(arg: boolean);
    get useMrt(): boolean;
    set enabled(arg: boolean);
    get enabled(): boolean;
    _init(): void;
    _postRenderTarget: any;
    render(): void;
    _setMrtUniforms(name: any, value: any): void;
    dispose(): void;
    /**
     * 插入后处理pass
     * @param {Pass} pass 后处理pass，可以通过先设置renderOrder属性，再addPass来保证插入位置
     */
    addPass(pass: any): void;
    removePass(pass: any): void;
    get composer(): any;
}
