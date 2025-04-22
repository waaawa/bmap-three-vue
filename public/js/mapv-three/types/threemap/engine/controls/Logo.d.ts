/**
 * logo
 *
 * ```javascript
 * const logo = new Logo(contorlContainer, enable, engine);
 * ```
 */
export class Logo extends BaseControl {
    _url: any;
    /**
     * 设置logo的图片
     */
    set url(arg: any);
    /**
     * logo的图片
     */
    get url(): any;
}
import { BaseControl } from "./BaseControl";
