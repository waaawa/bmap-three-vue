/**
 * ![](media://default_material.png)
 */
export class Default3DTilesMaterialManager {
    /**
     * 材质存储对象
     * @private
     */
    private _materrialMap;
    /**
     * 初始化标识
     * @private
    */
    private _inited;
    is3DTilesMaterialManager: boolean;
    init(): void;
    onInit(): void;
    /**
     * 根据key获取对应的材质
     * @param key 用于查找的key值
     * @returns 返回对应的材质
     */
    getMaterialByKey(key: any): any;
    /**
     * 根据key添加材质
     * @param key 材质key
     * @param material 材质对象
     */
    addMaterialByKey(key: any, material: any): void;
    /**
     * 删除替换材质
     * @param key 材质key
     */
    removeMaterialByKey(key: any): void;
    dispose(): void;
    beforeDispose(): void;
}
