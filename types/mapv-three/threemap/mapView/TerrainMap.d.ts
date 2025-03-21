export class TerrainMap {
    constructor(options?: {});
    visible: boolean;
    freezeUpdate: boolean;
    /** @internal */ _engine: any;
    /** @internal */ _mapView: any;
    tileReceiveShadow: any;
    tileCastShadow: any;
    /** @protected */
    protected afterAddToEngine(engine: any): void;
    handleNodeCreated: (node: any) => void;
    handleStateChange: () => void;
    onBeforeScenePrepareRender(): void;
    get mapView(): any;
}
