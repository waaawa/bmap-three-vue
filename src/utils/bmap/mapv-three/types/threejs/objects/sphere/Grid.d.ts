/**
 * ![](media://grid.png)
 */
export class Grid extends GeoInstancedMesh {
    constructor(parameters: any);
    /** 颜色 */ color: any;
    /** 柱体高度 */ height: any;
    /** 柱体的边数 */ radialSegments: any;
    /** 顶面半径 */ radiusTop: any;
    /** 底面半径 */ radiusBottom: any;
    /** 圆柱顶底是否封闭 */ openEnded: any;
    /** 沿圆柱高的分段切片 */ heightSegments: any;
    /** 是否多色渐变 */ isMultiColor: any;
    /** 渐变柱颜色数组, heightSegments+1 */ multiColor: any;
    /** 是否为光柱(顶部渐变透明) */ isLight: any;
    /** 光柱渐变参数 */ lightPos: any;
}
import { GeoInstancedMesh } from "../GeoInstancedMesh";
