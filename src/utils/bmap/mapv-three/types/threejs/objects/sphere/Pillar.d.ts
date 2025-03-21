/**
 * ![](media://pillar.png)
 */
export class Pillar extends GeoInstancedMesh {
    constructor(parameters: any);
    /** 整体透明度 */ opacity: any;
    /** 柱体高度 */ height: any;
    /** 柱体边数 */ radiusSegments: any;
    /** 柱体半径 */ radius: any;
    /** 颜色渐变 */ gradient: any;
    /** 是否通过数据携带高度配置 */ vertexHeights: any;
    /** 圆柱顶底是否打开 */ openEnded: any;
}
import { GeoInstancedMesh } from "../GeoInstancedMesh";
