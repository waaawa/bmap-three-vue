export class PanoService {
    /**
     * 默认请求域名
     */
    static SERVICE_URL: string;
    constructor(pano: any);
    _cache: LRUCache;
    /**
     * 根据panoId请求全景数据
     * @param {string} panoId - 全景ID
     */
    getPanoById: (panoId: string) => Promise<any>;
    /**
     * 数据请求封装
     * @param {string} url - 请求地址
     * @return {Promise} 请求状态机
     */
    getDataByUrl(url: string): Promise<any>;
}
import { LRUCache } from "../mapView/geo/LRUCache";
