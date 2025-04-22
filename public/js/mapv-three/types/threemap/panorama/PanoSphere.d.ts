export class PanoSphere {
    static TILE_URL_TEMPLATE: string;
    cdnList: string[];
    _imageCache: LRUCache;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    texture: any;
    mesh: any;
    setID(panoId: any, level: any): Promise<void>;
    /**
     * 加载当前场景缩略图纹理
     * @param {string} panoId - 全景ID
     */
    loadThumbTextures(panoId: string): Promise<any>;
    /**
     * 加载当前场景缩略图纹理
     * @param {string} panoId - 全景ID
     */
    loadTextures(panoId: string, level: any): Promise<any>;
    /**
     * 计算图块id编号
     * @public
     *
     * @param {string} id - 全景id
     * @param {number} x - 图块行号
     * @param {number} y - 图块列号
     * @param {number} zoom - 图块级别
     * @return {string} 图块编号id
     */
    public calcTileKey: (id: string, x: number, y: number, zoom: number) => string;
    /**
     * 从CDN列表中获取一个随机的作为请求地址
     * @private
     *
     * @param {Array} cdnList - cdnlist
     * @return {string} - 地址
     */
    private getCDN;
    /**
     * 生成瓦片url
     * @param {string} id - 全景id
     * @param {Object} tileCoord - 瓦片坐标 {x, y}
     * @param {number} zoom - 瓦片级别
     * @return {string} 瓦片url
     */
    getTilesUrl(id: string, tileCoord: Object, zoom: number): string;
    /**
     * 加载图片
     * 发起图片请求，并缓存结果。如果已在缓存内，则从缓存中获取。
     * @private
     *
     * @param {string} panoId - 全景ID
     * @param {number} tileX - 瓦片行号
     * @param {number} tileY - 瓦片列号
     * @param {number} zoom - 瓦片级别
     * @return {Promise} - 图片加载的回调
     */
    private loadImage;
    dispose(): void;
}
import { LRUCache } from "../mapView/geo/LRUCache";
