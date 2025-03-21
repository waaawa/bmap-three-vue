/**
 * exportImage
 * 使用时需在引擎初始化时开启rendering的preserveDrawingBuffer，若使用BMapGL.Map或mapboxgl.Map时都需开启preserveDrawingBuffer
 *
 * ```javascript
 * const exportImage = new ExportImage(contorlContainer, enable, engine);
 * ```
 */
export class ExportImage extends BaseControl {
    /** @private */
    private handleClick;
    /**
     * 下载截图
     * @param {string} filename 下载文件名
     * @param {boolean} download 是否自动下载
     */
    screenshot: (filename: string, download: boolean) => string;
}
import { BaseControl } from "./BaseControl";
