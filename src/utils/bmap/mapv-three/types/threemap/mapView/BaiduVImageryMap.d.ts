/**
 * 2.5D矢量生成的纹理瓦片图
 * ![](media://baidu_vector.png)
 */
export class BaiduVImageryMap extends QuadMap {
    /**
     * 百度矢量瓦片
     * @param {{styleUrl?: string, url?: string, height?: number,
     * displayOptions?: {base?: boolean, building?: boolean, poi?: boolean, flat?: boolean}}} options 百度矢量瓦片的属性
     */
    constructor(options?: {
        styleUrl?: string;
        url?: string;
        height?: number;
        displayOptions?: {
            base?: boolean;
            building?: boolean;
            poi?: boolean;
            flat?: boolean;
        };
    });
    /** @internal */ _labels: {};
}
import { QuadMap } from "./QuadMap";
