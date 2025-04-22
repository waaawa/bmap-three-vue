/**
 * 定义瓦片加载
 */
export class TileLoader {
    constructor(options?: {});
    isTileLoader: boolean;
    _ready: boolean;
    _maxLevel: number;
    _options: {};
    init(): void;
    afterInit(): void;
    loadTile(tile: any): void;
    disposeTile(tile: any): void;
    dispose(): void;
    get ready(): boolean;
    get maxLevel(): number;
}
