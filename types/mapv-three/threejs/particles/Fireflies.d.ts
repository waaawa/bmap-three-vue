export class Fireflies {
    constructor(options?: {});
    /**
     * 粒子数量的比例
     * @private
     */
    private _countFactor;
    /** @private */ private _clock;
    /** @private */ private _color;
    /** @private */ private _engine;
    /** @private */ private _emitter;
    /** @private */ private _system;
    /** @private */ private _options;
    /**
     * @internal
     */
    afterAddToEngine(engine: any): void;
    /**
     * @internal
     */
    beforeRemoveFromEngine(): void;
    /**
     * @internal
     */
    overrideMaterialWithEmissive(material: any): void;
    /**
     * @internal
     */
    handleBeforeRender: (engine: any) => void;
    /**
     * @internal
     */
    update: () => void;
    /**
     * @internal
     */
    createSnow: () => any;
    /**
     * @internal
     */
    createEmitter: () => any;
    set countFactor(arg: number);
    get countFactor(): number;
    dispose(): void;
}
