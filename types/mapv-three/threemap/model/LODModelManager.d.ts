/**
 * 暂不可用
 * TODO: 定义config规格，补充解析config自动创建LODModel的过程
 */
export class LODModelManager {
    constructor(engine: any, config: any);
    _engine: any;
    _config: any;
    _lods: any[];
    _enabled: boolean;
    set enabled(arg: boolean);
    get enabled(): boolean;
    set config(arg: any);
    get config(): any;
    _i(): void;
    dispose(): void;
}
