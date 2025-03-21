/**
 * ![](media://hdmap_3dtiles.png)
 */
export class HDMap3DTiles extends Default3DTiles {
    isHDMap3DTiles: boolean;
    /** @private */
    private _edit;
    /** @private */
    private _turn;
    /** @private */
    private _visibility;
    get edit(): any;
    get turn(): any;
    get visibility(): any;
}
import { Default3DTiles } from "./Default3DTiles";
