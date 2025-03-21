export namespace MODELS {
    const BUS: null;
    const CAR: null;
    const TRACK: null;
    const BICYCLE: null;
    const PEDESTRIAN: null;
    const TRAFFIC_CONE: null;
}
export function loadGLTFModel(path: any, callback: any, option: {} | undefined, errorCallBack: any): void;
export function getInstancedModelByUrl(path: string, count?: number | undefined, isDynamic?: number | undefined, callback?: Function): void;
export function loadDynamicGLTFModel(path: any, callback: any, option: {} | undefined, errorCallBack: any): void;
export function computeTransformedBoundingBox(box: any, transform: any): any;
export function disposeObject(obj: any): void;
export function pointInArea(center: any, radius: number | undefined, position: any): boolean;
