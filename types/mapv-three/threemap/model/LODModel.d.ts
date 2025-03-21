/**
 * lod模型文件配置
 * levels 层级数据 [{distance: 1000, hysteresis: 0.1, file: 'a/b/c.glb'}]
 */
export class LODModel {
    /**
     * LOD模型构造函数
     * @param {Object} parameters 配置参数
     * @param {number} parameters.hysteresis 缩进与拉远的缓冲参数，防止在临界点缩放时抖动，范围 0~1
     * @param {number} parameters.compressed 模型是否压缩，当压缩时自动启用KTX、MeshOpt等拓展
     * @param {Array} parameters.levels levels 层级数据 [{distance: 1000, hysteresis: 0.1, file: 'a/b/c.glb'}]
     */
    constructor(parameters: {
        hysteresis: number;
        compressed: number;
        levels: any[];
    });
    _hysteresis: number;
    _levels: any[];
    _compressed: boolean;
    _currentLevel: any;
    _currentModel: any;
    _loader: import("../../threejs/loaders/GLTFLoader").GLTFLoader;
    /**
     * 缩进与拉远的缓冲参数，防止在临界点缩放时抖动，范围 0~1
     */
    set hysteresis(arg: number);
    get hysteresis(): number;
    set levels(arg: any[]);
    get levels(): any[];
    /**
     * 模型是否压缩，当压缩时自动启用KTX、MeshOpt等拓展
     */
    set compressed(arg: boolean);
    get compressed(): boolean;
    afterAddToEngine(engine: any): void;
    _engine: any;
    _modelMeshSingleton: PromisedSingleton | undefined;
    beforeRemoveFromEngine(engine: any): void;
    /**
     * @internal
     */
    _generateModelMesh: (key: any) => Promise<any>;
    addLevel(file: any, distance?: number, hysteresis?: number): LODModel;
    removeLevel(file: any): LODModel;
    getCurrentLevel(): any;
    getCurrentModel(): any;
    getModel(level: any): Promise<any>;
    update: () => Promise<void>;
    handleLoaded(model: any): void;
    dispose(): void;
    set transform(arg: {
        translate: any;
        rotation: any;
        scale: any;
    });
    get transform(): {
        translate: any;
        rotation: any;
        scale: any;
    };
    /**
     * TODO:当模型bbox占视野bbox多大范围时，开始加载更精细的模型
     */
    set lodFactor(arg: any);
    get lodFactor(): any;
    _lodFactor: any;
}
import { PromisedSingleton } from "../../util/PromisedSingleton";
