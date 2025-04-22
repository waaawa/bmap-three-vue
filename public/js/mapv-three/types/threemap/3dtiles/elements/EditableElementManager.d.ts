export class EditableElementManager {
    _configVersion: number;
    _deletedIds: Set<any>;
    _needsRefreshAll: boolean;
    addDeletedId(id: any): void;
    addDeletedIds(ids: any): void;
    removeDeletedId(id: any): void;
    removeDeletedIds(ids: any): void;
    hasDeletedId(id: any): boolean;
    updateEditableAttribute: (tile: any) => void;
    shouldBeHidden: (batchTable: any, batchId: any) => boolean;
    onTileLoad: (tile: any, scene: any) => void;
    onTileDispose: (tile: any, scene: any) => void;
    onTileShow: (tile: any) => void;
    onTileHide: (tile: any) => void;
    refreshTile: (tile: any) => void;
    refreshTiles: () => void;
    requestUpdate(): void;
}
