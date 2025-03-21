export class TrafficObject {
    needTrans: boolean;
    point: any;
    /** @private */
    private afterAddToEngine;
    engine: any;
    onBeforeScenePrepareRender(): void;
    beforeRemoveFromEngine(): void;
}
