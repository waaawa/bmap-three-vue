export class CesiumTerrain extends QuadMap {
    /** @internal */ _beforeTileRenderCallback: any[];
    /** @internal */ _labels: {};
    item: any[];
    _clippingPlanes: any;
    _multiClippingPlanes: any;
    /**
     * 获取point位置的高度
     */
    getHeight(position: any): any;
    _updateClipUniforms: (material: any) => void;
    _terrainClip: () => void;
    set multiClippingPlanes(arg: any);
    get multiClippingPlanes(): any;
}
import { QuadMap } from "./QuadMap";
