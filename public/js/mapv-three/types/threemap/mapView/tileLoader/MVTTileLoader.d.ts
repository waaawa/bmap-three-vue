export class MVTTileLoader extends AsyncBinaryTileLoader {
    tileCount: number;
    _style: any;
    _defaultStyle: any;
    _accessToken: any;
    _sourceUrl: string;
    _styleJSON: {};
    _defaultStyleJSON: {};
    /**
     * @returns {Promise}
     */
    _getStyleJSON(): Promise<any>;
    _hasBufferData(bufferData: any): any;
    _getBackgroundMesh(backgroundData: any): any;
    _getFillMesh(fillData: any): any;
    _getLineMesh(lineData: any): any;
    _setupSymbolData(symbolData: any, group: any): void;
    set accessToken(arg: any);
    get accessToken(): any;
}
import { AsyncBinaryTileLoader } from "./AsyncBinaryTileLoader";
