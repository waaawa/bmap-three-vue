export class PanoArrow {
    constructor(engine: any, linkData: any, northDir: any);
    _engine: any;
    linkData: any;
    northDir: any;
    yAxisDis: number;
    material: any;
    mesh: any;
    /**
     * 初始化箭头网格
     */
    initMesh(): any;
    createArrowMaterial(): any;
    /**
     * 设置箭头纹理，供上层调用
     * @public
     *
     * @param {Texture} texture - 箭头纹理
     */
    public setTopoTexture(texture: any): void;
    /**
     * 设置单个箭头的显隐
     * @public
     *
     * @param {Boolean} v - 显隐
     */
    public setVisible(v: boolean): void;
    createGeometry(): any;
    /**
     * 更改箭头姿态
     * @private
     * @param {Mesh} mesh - 箭头网格对象
     */
    private changePose;
    /**
     * 根据箭头方向获取箭头文字纹理坐标
     * @param {number} deg - 箭头相对北的角度
     * @return {Array} - 纹理坐标
     */
    getTextCoord(deg: number): any[];
    dispose(): void;
}
