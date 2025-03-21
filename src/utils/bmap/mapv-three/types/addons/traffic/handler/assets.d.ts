export class AssetsScene {
    /**
     * @param {Object} arg - 配置参数
     * @param {string=} arg.host - 配置资产服务环境,默认为线上
     * @param {string=} arg.path - 配置资产服务Path,默认为/twin/assetApi
     * @param {number} arg.sceneId - 配置场景ID
     * @param {Object} arg.auth - 场景服务鉴权
     * @param {Object} arg.auth.ak - 鉴权ak
     * @param {Object} arg.auth.sk - 鉴权sk
     * @param {Object} arg.auth.appid - 鉴权appid
     * @param {Object} arg.auth.url - 鉴权服务地址
     * @param {Object} arg.auth.path - 鉴权服务path,默认为/twin/bff
     * @param {Object} arg.renderOption - 可选：场景渲染配置
     * @param {number} arg.renderOption.useDefaultRender - 是否默认渲染
     * @param {number} arg.renderOption.useDefaultPosition - 是否应用默认视角
     * @param {number} arg.renderOption.useDefaultPlane - 是否应用默认地面
     * @param {number} arg.renderOption.useDefaultSky - 是否应用默认天空
     * @param {number} arg.renderOption.useDefaultLight - 是否应用默认灯光
     * @param {number} arg.renderOption.minZoom - 最小生效视野等级
     * @param {string=} arg.renderOption.anchor - 区域加载锚点 mapCenter/cameraPosition
     * @param {function} arg.renderOption.anchorGetter - 区域加载锚点自定义获取方法
     * @param {number} arg.renderOption.radius - 区域加载半径 单位m
     * @param {number} arg.renderOption.center - 区域加载初始区域中心坐标
     * @param {number=} arg.renderOption.debounceTime - 区域加载防抖时间 单位ms
     * @param {string=} arg.renderOption.expireHandleType - 区域加载失效物体的处理方式 hide/dispose/show
     * @param {number=} arg.renderOption.reuseNum - 转换instancedModel的数量下限
     * @param {Object} arg.activeOption - 可选：动态信息渲染配置
     * @param {boolean} arg.activeOption.status - 可选：是否打开 默认：false
     * @param {boolean} arg.activeOption.host - 可选：动态服务host 不填为arg.host
     * @param {boolean} arg.activeOption.path - 可选：动态服务path 不填为/twin/trafficinfoplat
     * @param {number} arg.activeOption.level - 可选：格子等级 默认：17
     * @param {number} arg.tileConfig.url - 可选：格子等级 默认：17
     * @param {number} arg.tileConfig.offline - 可选：格子等级 默认：17
     */
    constructor(arg?: {
        host?: string | undefined;
        path?: string | undefined;
        sceneId: number;
        auth: {
            ak: Object;
            sk: Object;
            appid: Object;
            url: Object;
            path: Object;
        };
        renderOption: {
            useDefaultRender: number;
            useDefaultPosition: number;
            useDefaultPlane: number;
            useDefaultSky: number;
            useDefaultLight: number;
            minZoom: number;
            anchor?: string | undefined;
            anchorGetter: Function;
            radius: number;
            center: number;
            debounceTime?: number | undefined;
            expireHandleType?: string | undefined;
            reuseNum?: number | undefined;
        };
        activeOption: {
            status: boolean;
            host: boolean;
            path: boolean;
            level: number;
        };
    });
    /** @private */ private _options;
    /** @private */ private _assetsInfo;
    /** @private */ private _allModelList;
    /** @private */ private _assetsInitParams;
    /** @private */ private _assetsModelsList;
    /** @private */ private _preSubmitAssetsList;
    /** @private */ private _viewChangeListenerCall;
    /** @private */ private _viewChangeListenerType;
    /** @private */ private _viewRenderCall;
    /** @private */ private _viewRenderOption;
    /** @private */ private _viewRenderStatus;
    /** @private */ private _viewRenderSwitchStatus;
    /** @private */ private _layerHideMap;
    /** @private */ private _allAllModelVisible;
    /** @private */ private _modelInfoScrollMap;
    /** @private */ private _modelInfoMap;
    /** 所有资产模型 */ models: any[];
    /** 当前场景模式 */ mode: string;
    /** 当前编辑模式 */ editMode: string;
    /** 引擎核心 */ engine: any;
    /** 资产项目ID */ projectId: string;
    _groupDeviceInfo: any[];
    _preRenderDeviceLine: any[];
    setDeviceHidenList: any[];
    setModelMaterialMap: {};
    assetsToken: string;
    /** @private */
    private handleBeforeRender;
    /** @private */
    private afterAddToEngine;
    /** @private */
    private beforeRemoveFromEngine;
    /**
     * @private
     */
    private checkAuth;
    /** @private */
    private setLight;
    /** @private */
    private getAssetsInfo;
    paradeInfo: any;
    mapLayers: any[] | undefined;
    _modelExtraConfig: {
        allModelList: any;
        allMaterialList: any;
        modelMaterials: any;
        sceneDeviceList: any;
    } | undefined;
    _activeWs: import("../utils/ws").Ws | undefined;
    _activeConnect: any;
    /** @private */
    private addPlane;
    /** @private */
    private loadSkyBox;
    /** @private */
    private preloadModels;
    /** @private */
    private initModels;
    /**
     * @private
     * @param {Object} params  模型参数
     * @param {Function} callback  点击回调
     * @param {Function} loadCallback  组合模型加载回调
     */
    private addMesh;
    /** @private */
    private bindClick;
    /**
     * @private
     * @param {*} transformModel
     */
    private createBox;
    _box: any;
    /**
     * @private
     * 使模型进入编辑状态
     * @param {*} model
     * @param {*} info
     * @param {*} bindStatus
     */
    private editModel;
    /**
     * @private
     * 更新模型
     * @param {*} transformModel
     * @param {*} info
     */
    private updateDevice;
    /** @private */
    private genMesh;
    /**
     * @private
     * 如果没有该classType的InstanceMesh则新建，否则则更新
     * @param meshConfigList
     * @param needAddScene
     * @param extraCount
     * @returns {Promise<Array>}
     */
    private getInstancedModel;
    /** @private */
    private genInstancedModel;
    setDeviceVisible(key: any, value: any, status: any): void;
    /** @private */
    private genMeshParams;
    /** @private */
    private line2Camel;
    /**
     * 改变场景状态
     * @param {'readOnly' | 'add' | 'edit'} type 场景类型
     */
    changeSceneMode(type: 'readOnly' | 'add' | 'edit'): void;
    /**
     * 切换编辑模式（主子模型）
     * @param {*} editType 'device' or 'subModel'
     * TODO: 子模型模式暂不支持，待开发
     */
    changeEditMode(editType: any): void;
    /**
     * 关闭编辑控制器
     */
    closeEditor(): void;
    /**
     * @private
     * @param {*} deviceInfo
     * @param {*} modelConfig
     * @returns
     */
    private genModelInfo;
    /**
     * @private
     * @param {*} point
     * @param {*} config
     * @param {*} option
     * @returns
     */
    private createModel;
    /**
     * 开启新增预览
     * @param {*} info 模型表信息
     * @param {*} tile 路网3DTile
     */
    openAddPreview(info: any, tile: any): Promise<void>;
    _previewModel: any;
    _addPreviewEvent: ((e: any) => void) | null | undefined;
    _tile: any;
    /**
     * 关闭新增预览
     */
    closeAddPreview(): void;
    /**
     * 新增点位
     * @param {*} point 点位
     * @param {*} config 模型信息
     * @param {*} defaultEdit 是否默认开启编辑器
     * @returns {Object} 新增信息
     */
    addDevice(point: any, config: any, defaultEdit?: any): Object;
    /**
     * 通过参数更新点位
     * @param {*} deviceInfo 模型表信息（通过点击回调可以获取）
     * @param {Object} info 调整参数信息
     * @param {Number} info.x 经度
     * @param {Number} info.y 纬度
     * @param {Number} info.z 高度
     * @param {Number} info.rotateX x轴旋转角度
     * @param {Number} info.rotateY y轴旋转角度
     * @param {Number} info.rotateZ z轴旋转角度
     * @param {Number} info.scaleX x轴缩放值
     * @param {Number} info.scaleY y轴缩放值
     * @param {Number} info.scaleZ z轴缩放值
     */
    editDeviceByParams(deviceInfo: any, info: {
        x: number;
        y: number;
        z: number;
        rotateX: number;
        rotateY: number;
        rotateZ: number;
        scaleX: number;
        scaleY: number;
        scaleZ: number;
    }): void;
    /**
     * 新增/更新点位信息
     * @param {*} deviceInfo 需要更新的模型
     */
    submitDeviceInfo(deviceInfo: any): Promise<void>;
    /**
     * 删除点位
     * @param {*} model 需要删除的模型
     */
    deleteDevice(model: any): void;
    /**
     * @private
     * 打开视野加载
     */
    private openViewRenderSceneModel;
    handleAreaRender(): Promise<void>;
    handleActiveDevice(id: any, type: any, info: any): void;
    /**
     * 更改去预加载开关状态
     * @param status
     */
    switchViewRender(status: any): void;
    /**
     * 改变区域加载策略
     * @param type 'debounce' or 'throttle'
     * @param callBack
     */
    changeViewRender(type: any, option: any): void;
    /**
     * 高亮模型
     * @param info 模型信息
     * @param color 颜色
     * @param status 高亮/去高亮
     */
    lightModelColor(info: any, color: any, status?: boolean): void;
    /**
     * 通过Layer改变模型显隐
     * @param {*} layer Layer_id
     * @param {*} showStatus 显示状态
     */
    changeModelVisibleByLayer(layer: any, showStatus: any): any[];
    /**
     * 改变所有点位模型的显示状态
     * @param {*} status 显示状态
     */
    changeAllModelVisible(status: any): void;
    /**
     * 为模型贴图
     * @param info 模型信息（模型或者模型名称）
     * @param imgs [ [ 点位下标， 贴图文字信息 ] ]
     */
    setMaterialMapByInfo(info: any, contextInfoList: any): Promise<void>;
    /** @private */
    private drawMaterial;
    /** @private */
    private setInfoScroll;
    /**
     * 为模型贴图
     * @param info 模型信息（模型或者模型名称）
     * @param imgs [ [ 点位下标， 图片链接 ] ]
     */
    setMaterialMap(info: any, imgs: any): void;
    /**
     * 执行模型帧动画
     * @param info 模型信息（模型或者模型名称）
     * @param index 下标（一般为0）
     * @param start 开始帧
     * @param end 结束帧
     * @param fps 帧率（一般为60）
     */
    setFrameAction(info: any, index: any, start: any, end: any, fps: any): void;
    /**
     * @ignore
     */
    clearImgInterval(info: any): void;
    /**
     * 设置贴图轮播
     * @param {*} info 模型信息（模型或者模型名称）
     * @param {Object} option 图片配置
     * @param {*} option.imageList 图片列表 [url, url]
     * @param {*} option.duration 轮播时间 单位s 默认1s
     * @param {*} option.splitImage 整张图切割（和imageList互斥）{url // 图片链接, number // 切割数量}
     * @returns
     */
    setImgInterval(info: any, option?: {
        imageList: any;
        duration: any;
        splitImage: any;
    }): Promise<void>;
    /**
     * 通过uuid拿设备信息
      * @param uuid 设备UUID
     */
    getDeviceByUUID(uuid: any): Promise<any>;
    /**
     * 恢复未保存的编辑设备初始状态
     * @param {*} deviceList 设备列表,默认不传为全部
     */
    resetEditDevice(deviceList: any): void;
    updateGroupDevice(uuid: any, status?: string, option?: {}): Promise<void>;
    getParadeList(): any;
    startParade(id: any, pathTracker: any, option?: {}): void;
    setModelMaterialByDeviceType(key: any, material: any, modelName: any): void;
    resetModelMaterial(key: any): void;
    dispose(): void;
    /**
     * @private
     * 打开場景同步
     */
    private openSceneSync;
    /**
     * @private
     */
    private onBeforeScenePrepareRender;
    set visible(arg: boolean);
    get visible(): boolean;
}
