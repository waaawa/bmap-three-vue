export class BaiduTrafficVectorTileLoader extends AsyncBinaryTileLoader {
    /**
     * 瓦片坐标系
     * @private
     */
    private _coordType;
    set coordType(arg: string);
    get coordType(): string;
}
import { AsyncBinaryTileLoader } from "./AsyncBinaryTileLoader";
