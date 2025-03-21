export class BaiduVectorTileLoader extends AsyncBinaryTileLoader {
    _styleUrl: string;
    /**
     * 瓦片坐标系
     * @private
     */
    private _coordType;
    set coordType(arg: string);
    get coordType(): string;
    _encodeTileUrl(str: any): string;
    _loadStyle: () => Promise<void>;
    set styleUrl(arg: string);
    get styleUrl(): string;
}
import { AsyncBinaryTileLoader } from "./AsyncBinaryTileLoader";
