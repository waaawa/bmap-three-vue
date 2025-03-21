/**
 * 物体选择器，将场景中的某个物体或单体标记为选中状态
 */
export class EngineSelection {
    constructor(engine: any, options?: {});
    /**
     * @private
     */
    private _engine;
    /**
     * @private
     */
    private _boundingBoxHelper;
    /**
     * @private
     */
    private _selectedObject;
    /**
     * @private
     */
    private _transformControl;
    isSelected(object: any): boolean;
    select(object: any): void;
    deselect(object: any): void;
    get transformControl(): any;
    attachTransform(object: any): void;
    detachTransform(): void;
    dispose(): void;
}
