export class BaiduVImageryTileLoader extends ImageTileLoader {
    _styleUrl: string;
    /**
     * 瓦片坐标系
     * @private
     */
    private _coordType;
    _renderTarget: any;
    _camera: any;
    _requestMap: {};
    _workerSize: number;
    _workers: any[];
    _baseZoomInfo: {
        '2': number[];
        '3': number[];
        '5': number[];
        '7': number[];
        '9': number[];
        '10': number[];
        '13': number[];
        '14': number[];
        '16': number[];
    };
    set coordType(arg: string);
    get coordType(): string;
    createWorker(): any;
    getFetchOptions(tile: any): void;
    getWorkerOptions(): {
        height: any;
        displayOptions: any;
        isAttach: any;
    };
    handleWorkerMessage: (message: any) => Promise<void>;
    handleWorkerError: (e: any) => void;
    postMessageToAll(message: any): void;
    setupRenderTarget(): void;
    _encodeTileUrl(str: any): string;
    processTileResult(result: any, tile: any): Promise<any>;
    processTileMesh(result: any, tile: any): {
        mesh: any;
        poi: {
            id: string;
            type: any;
            rotateZ: any;
            position: any;
            text: any;
            rank: any;
            fontRgba: any;
            fontSize: any;
            fontWeight: any;
            haloRgba: any;
            haloSize: number;
        }[];
    };
    isTileAvailable(): boolean;
    getFallbackTile(): null;
    _loadStyle: () => Promise<void>;
    set styleUrl(arg: string);
    get styleUrl(): string;
}
import { ImageTileLoader } from "./ImageTileLoader";
