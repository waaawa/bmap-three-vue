export class TrafficGroup {
    needTrans: boolean;
    point: any;
    afterAddToEngine(engine: any): void;
    engine: any;
    onBeforeScenePrepareRender(): void;
    raycast(raycaster: any, intersects: any): any;
    beforeRemoveFromEngine(): void;
}
