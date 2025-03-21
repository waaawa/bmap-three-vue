/**
 * 裁剪面
 */
export class ClippingPlane {
    /**
     * 根据起点和终点生成一个裁剪平面
     */
    static fromPoint(startPoint: any, endPoint: any): ClippingPlane;
    constructor(normal: any, distance: any);
    isClippingPlane: boolean;
    _distance: any;
    _normal: any;
    index: number;
    set distance(arg: any);
    get distance(): any;
    set normal(arg: any);
    get normal(): any;
}
