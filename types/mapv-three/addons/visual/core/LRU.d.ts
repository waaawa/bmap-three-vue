/**
 * lru 项
 */
export class LRUItem {
    constructor(tile: any);
    previous: any;
    next: any;
    tile: any;
}
/**
 * least recently used, 双向链
 */
export class LRU {
    oldest: any;
    newest: any;
    items: {};
    elements: number;
    numGeometries: number;
    size(): number;
    contains(tile: any): boolean;
    touch(tile: any): void;
    remove(tile: any): void;
    getLRUItem(): any;
    freeMemory(): void;
    disposeDescendants(tile: any): void;
}
