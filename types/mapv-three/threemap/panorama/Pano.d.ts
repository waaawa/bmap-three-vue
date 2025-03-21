export class Pano {
    constructor(options: any);
    isPano: boolean;
    /**
     * 全景id
     * @internal
     */
    _sid: any;
    /**
     * 服务锁，防止同时多次触发setID导致的异常
     * @private
     * @type {boolean}
     */
    private _panoServiceLock;
    /**
     * 全景瓦片精细层级
     * @private
     * @type {number} 2 | 3 | 4 | 5
     */
    private _level;
    /**
     * 存储全景的箭头PanoArrow对象
     * @private
     */
    private linkInfos;
    /**
     * 存储全景的箭头Mesh实例
     * @private
     */
    private arrowMeshes;
    /**
     * 全景箭头url
     * @private
     */
    private topoUrl;
    options: any;
    _panoService: PanoService;
    topoArrowTexture: any;
    _group: any;
    afterAddToEngine(engine: any): void;
    _engine: any;
    _sphere: PanoSphere | undefined;
    beforeRemoveFromEngine(): void;
    setID(sid: any): Promise<void>;
    resetArrow(): void;
    /**
     * 设置道路箭头可见性
     * @public
     * @param {boolean} visible - 可见性
     */
    public setArrowVisible(visible: boolean): void;
    linkVisible: boolean | undefined;
    /**
     * 加载箭头相关纹理
     * @private
     */
    private loadArrowTextures;
    dispose(): void;
    set sid(arg: any);
    get sid(): any;
    set level(arg: number);
    get level(): number;
}
import { PanoService } from "./PanoService";
import { PanoSphere } from "./PanoSphere";
