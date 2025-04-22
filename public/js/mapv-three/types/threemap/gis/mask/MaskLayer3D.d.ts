export class MaskLayer3D {
    _maskElements: any[];
    _enabled: boolean;
    _maskArea: any[];
    _maskPoint: any[];
    _maskRadius: number;
    _maskWidth: number;
    _maskHeight: number;
    _shaderVersion: number;
    _type: string;
    afterAddToEngine(engine: any): void;
    _engine: any;
    /**
     * 当满足条件condition时，遍历object并执行callback
     */
    traverseWithCondition(object: any, callback: any): void;
    traverseTile: (tile: any, tileMesh?: any[]) => any[] | undefined;
    _updateUniforms(material: any): void;
    _updateUniformsInternal(uniforms: any): void;
    update: (object: any) => void;
    addAndUpdateUniforms: (object: any) => void;
    updateMapTile: (data: any) => void;
    clipMask: () => void;
    set maskArea(arg: any[]);
    get maskArea(): any[];
    set maskPoint(arg: any[]);
    /**
     * 当type为circle时为中心点
     * 当type为rect时为左下顶点
     */
    get maskPoint(): any[];
    set maskRadius(arg: number);
    get maskRadius(): number;
    set maskWidth(arg: number);
    get maskWidth(): number;
    set maskHeight(arg: number);
    get maskHeight(): number;
    set maskElements(arg: any[]);
    get maskElements(): any[];
    set type(arg: string);
    get type(): string;
    set enabled(arg: boolean);
    get enabled(): boolean;
}
