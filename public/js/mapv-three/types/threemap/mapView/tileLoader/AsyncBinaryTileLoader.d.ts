export class AsyncBinaryTileLoader extends TileLoader {
    _requestMap: {};
    _workerSize: number;
    _workers: any[];
    createWorker(): void;
    getTileURL(z: any, x: any, y: any, tile: any): void;
    getFetchOptions(tile: any): void;
    getWorkerOptions(): void;
    handleWorkerMessage: (message: any) => Promise<void>;
    handleWorkerError: (e: any) => void;
    processTileResult(result: any, tile: any): Promise<any>;
    isTileAvailable(): boolean;
    getFallbackTile(): null;
    postMessageToAll(message: any): void;
}
import { TileLoader } from "./TileLoader";
