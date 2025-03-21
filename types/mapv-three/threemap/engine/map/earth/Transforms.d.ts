export function lnglatToEcef(lng: any, lat: any, height: number | undefined, result: any): any;
export namespace Transforms {
    export { lnglatToEcef };
    export { radianToEcef };
    export function localFrameToFixedFrameGenerator(firstAxis: any, secondAxis: any): any;
    export const eastNorthUpToFixedFrame: any;
    export const northEastDownToFixedFrame: any;
    export const northUpEastToFixedFrame: any;
    export const northWestUpToFixedFrame: any;
}
declare function radianToEcef(longitude: any, latitude: any, height: number | undefined, result: any): any;
export {};
