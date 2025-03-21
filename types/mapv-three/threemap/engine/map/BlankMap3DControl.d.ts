export class BlankMap3DControl extends BlankMap {
    isBlankMap3D: boolean;
    _viewStateDirty: boolean;
    maxRange: any;
    range: any;
    /**
     * 快速获取中心点，直接计算和海平面的交点，省略遍历场景内元素的时间花销
     * @returns 和海平面交点的投影中心点的经纬度坐标
     */
    getCenter2D(): number[];
    /**
     * 快速获取投影中心点，直接计算和海平面的交点，省略遍历场景内元素的时间花销
     * @returns {number[]} 和海平面交点的投影中心点的投影坐标
     */
    getProjectionCenter2D(): number[];
    getCalcRange(): any;
    setRange(range: any): void;
    _cameraLookAt(camera: any, target: any, offset: any): void;
    offsetFromHeadingPitchRange(heading?: number, pitch?: number, range?: number): any;
    decomposeRotation(): {
        heading: any;
        pitch: number;
    };
    decomposeRotationFromDirection(direction: any, up: any): {
        heading: any;
        pitch: number;
    };
    lockDrag(status: any): void;
    handleEventCameraChange: () => boolean;
    _getFirstIntersectionPoint: (mouse: any) => any;
}
import { BlankMap } from "./BlankMap";
