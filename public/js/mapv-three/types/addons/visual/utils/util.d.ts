export class Utils {
    static computeTransformedBoundingBox(box: any, transform: any): any;
    static mouseToRaycaster(mouse: any, camera: any, width: any, height: any): any;
    static getScaleByDepth(object: any, viewer: any, pixel: any): number;
    static projectedRadius(radius: any, camera: any, distance: any, screenWidth: any, screenHeight: any): any;
    static computeAzimuth(p1: any, p2: any, projection: any): number;
    static projectedRadiusPerspective(radius: any, fov: any, distance: any, screenHeight: any): number;
    static projectedRadiusOrtho(radius: any, matrix: any, screenWidth: any, screenHeight: any): any;
    static degreeToRadian(degree: any): any;
    static radianTodegree(radian: any): number;
    static clampRadian(radian: any): any;
    /**
     * 平滑插值
     * @param {Object} startPoint 起始点
     * @param {Object} [startPoint.position] 起始点位置
     * @param {Object} [startPoint.heading] 起始点方向,单位是角度
     * @param {Object} [startPoint.speed] 起始点速度
     * @param {Object} endPoint 终点
     * @param {Object} [endPoint.position] 终点位置
     * @param {Object} [endPoint.heading] 终点方向,单位是角度
     * @param {Object} [endPoint.speed] 终点速度
     * @param {number} duration 时长，单位秒
     * @param {number} number 插值数量
     * @returns {Array} 插值后的点数组
     */
    static densityPoint(startPoint?: {
        position?: Object | undefined;
        heading?: Object | undefined;
        speed?: Object | undefined;
    }, endPoint?: {
        position?: Object | undefined;
        heading?: Object | undefined;
        speed?: Object | undefined;
    }, duration?: number, number?: number): any[];
    /**
     * 获取目标相机
     * @param {Object} viewer 视图实例
     * @param {any} target 可以是 Vector3或者[x,y,z]或者是几何体Mesh,Polygon,Line,Point等
     * @param {Object} view 目标视线
     * @param {Number} [view.yaw=0] 平视角
     * @param {Number} [view.pitch=-0.5*PI] 俯仰角
     * @param {Number} [view.radius=0] 和目标物之间的距离
     * @returns {Object} 相机
     */
    static getCameraByTargetAndView(viewer: Object, target: any, view?: {
        yaw?: number | undefined;
        pitch?: number | undefined;
        radius?: number | undefined;
    }): Object;
    static moveTo(scene: any, endPosition: any, endTarget: any, animationDuration?: number, _isRealPosition_?: boolean): void;
    static animateTo(scene: any, endPosition: any, yaw: any, pitch: any, flyOverLongitude: boolean | undefined, animationDuration: number | undefined, onComplete: any, _isRealPosition_?: boolean): any;
    static createBackgroundTexture(width: any, height: any): any;
    /**
     * 加载gltf和glb格式的模型
     * @param {String} path 模型数据的url地址
     * @param {Function} callback 回调函数
     */
    static loadGLTFModel(path: string, callback: Function): void;
    /**
     * 根据模型数据的url地址，设置一个实例几何体
     * @param {String} path 模型数据的url地址
     * @param {Number} [count=2000] 数量
     * @param {Number} [isDynamic=false] 位置是否动态改变
     * @param {Function} callback 回调函数
     */
    static getInstancedModelByUrl(path: string, count?: number | undefined, isDynamic?: number | undefined, callback?: Function): void;
    static loadDynamicGLTFModel(path: any, callback: any): void;
    static getSkybox(hour?: number, scale?: number): any;
    static computeSkyFactor(hour: any, distance?: number): {
        turbidity: number;
        rayleigh: number;
        mieCoefficient: number;
        mieDirectionalG: number;
        luminance: number;
        inclination: number;
        azimuth: number;
        up: any;
        sunPosition: any;
    };
    /**
     * 根据鼠标位置获取三维空间中的位置
     * @param {Object} mouse 鼠标位置，{x: , y: }
     * @param {Object} camera 相机
     * @param {Boolean} [_isRealPosition_=false] 是否需要返回真实世界坐标系的位置
     * @returns {Object} 窗口坐标
     */
    static getWorldPositionByMouse(mouse: Object, camera: Object, viewer: any, _isRealPosition_?: boolean | undefined): Object;
    /**
     * 根据鼠标位置和待拾取几何体数组获取拾取物体和拾取位置
     * @param {Object} mouse 鼠标位置，{x: , y: }
     * @param {Object} camera 相机
     * @param {Object} viewer 视图
     * @param {Array} maps 物体数组
     * @param {Object} params 其他参数
     * @returns {Object} 拾取的物体
     */
    static getMouseObjectIntersection(mouse: Object, camera: Object, viewer: Object, maps: any[], params?: Object): Object;
    /**
     * geojson转building
     * @param {Object} features 解析后的geojson
     * @param {Object} style 样式
     * @param {any} [style.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
     * @param {number} [style.opacity=1.0] 透明度，取值范围0.0 - 1.0
     * @param {boolean} [style.enableEffect=false] 是否使用特殊效果
     * @param {string} [style.map=null] 纹理的url
     * @param {any} [style.topColor=null] 颜色，可以接受 0xff0000, "rgb(255, 0, 0)", "rgb(100%, 0%, 0%)", 'skyblue', "hsl(0, 100%, 50%)" 等格式
     * @param {any} [style.bottomColor=null] 颜色, 可以接受 0xff0000, "rgb(255, 0, 0)", "rgb(100%, 0%, 0%)", 'skyblue', "hsl(0, 100%, 50%)" 等格式
     * @param {any} [style.outline=null] 是否添加外轮廓
     * @param {any} [style.outlineColor=0xff0000] 颜色, 可以接受 0xff0000, "rgb(255, 0, 0)", "rgb(100%, 0%, 0%)", 'skyblue', "hsl(0, 100%, 50%)" 等格式
     * @returns {Object} building
     */
    static json2building(features: Object, style?: {
        color?: any;
        opacity?: number | undefined;
        enableEffect?: boolean | undefined;
        map?: string | undefined;
        topColor?: any;
        bottomColor?: any;
        outline?: any;
        outlineColor?: any;
    }): Object;
    /**
     * geojson转fence
     * @param {Object} features 解析后的geojson
     * @param {Object} style 样式
     * @param {any} [style.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
     * @param {number} [style.opacity=1.0] 透明度，取值范围0.0 - 1.0
     * @param {string} [style.map=null] 纹理的url
     * @param {any} [style.topColor=null] 颜色，可以接受 0xff0000, "rgb(255, 0, 0)", "rgb(100%, 0%, 0%)", 'skyblue', "hsl(0, 100%, 50%)" 等格式
     * @param {any} [style.bottomColor=null] 颜色, 可以接受 0xff0000, "rgb(255, 0, 0)", "rgb(100%, 0%, 0%)", 'skyblue', "hsl(0, 100%, 50%)" 等格式
     * @param {any} [style.direction='horizontal'] 方向
     * @param {any} [style.depth=10] 深度
     * @param {any} [style.widtg=10] 宽度
     * @returns {Object} fence
     */
    static json2fence(features: Object, style?: {
        color?: any;
        opacity?: number | undefined;
        map?: string | undefined;
        topColor?: any;
        bottomColor?: any;
        direction?: any;
        depth?: any;
        widtg?: any;
    }): Object;
    /**
     * geojson转point
     * @param {Object} features 解析后的geojson
     * @param {Object} style 样式
     * @param {any} [style.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
     * @param {number} [style.opacity=1.0] 透明度，取值范围0.0 - 1.0
     * @param {number} [style.offset=new Vector3(0.0, 0.0, 0.0)] 偏移量,可以接受[x,y,z],{x:,y:,z:}
     * @param {number} [style.size=1.0] 大小，取值范围1.0 - 20.0,接受整数
     * @param {number} [style.map=null] 纹理地址
     * @returns {Object} polygon
     */
    static json2point(features: Object, style?: {
        color?: any;
        opacity?: number | undefined;
        offset?: number | undefined;
        size?: number | undefined;
        map?: number | undefined;
    }): Object;
    /**
     * geojson转line
     * @param {Object} features 解析后的geojson
     * @param {Object} style 样式
     * @param {any} [style.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
     * @param {number} [style.opacity=1.0] 透明度，取值范围0.0 - 1.0
     * @param {number} [style.offset=new Vector3(0.0, 0.0, 0.0)] 偏移量,可以接受[x,y,z],{x:,y:,z:}
     * @param {number} [style.width=1.0] 宽度，取值范围1.0 - 20.0,接受整数
     * @param {number} [style.dashSize=0.0] 虚线的时候，实线的距离，取值范围1.0 - 10.0
     * @param {number} [style.gapSize=0.0] 虚线的时候，空隙的距离，取值范围1.0 - 10.0
     * @param {string} nameOfHeightProperty 属性中有高度时，表示高度字段的名字
     * @returns {Object} line
     */
    static json2line(features: Object, style: {
        color?: any;
        opacity?: number | undefined;
        offset?: number | undefined;
        width?: number | undefined;
        dashSize?: number | undefined;
        gapSize?: number | undefined;
    } | undefined, nameOfHeightProperty: string): Object;
    /**
     * geojson转polygon
     * @param {Object} features 解析后的geojson
     * @param {Object} style 样式
     * @param {any} [style.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
     * @param {number} [style.opacity=1.0] 透明度，取值范围0.0 - 1.0
     * @param {number} [style.offset=new Vector3(0.0, 0.0, 0.0)] 偏移量,可以接受[x,y,z],{x:,y:,z:}
     * @param {number} [style.map=null] 纹理地址
     * @returns {Object} polygon
     */
    static json2polygon(features: Object, style?: {
        color?: any;
        opacity?: number | undefined;
        offset?: number | undefined;
        map?: number | undefined;
    }): Object;
    /**
     *
     * 加载geojson文件数据
     *
     * @param { string } [feature] geojson格式数据，
     * @param { string } [options.color] 颜色，十六进制颜色，默认值#ffffff
     * @param { string } [options.width] 线宽度或者面边框宽度，默认值1
     * @param { string } [options.size] 点大小，默认值1
     * @param {number} [dashSize] 虚线的大小，是指破折号和间隙之和。默认值为 3
     * @param {number} [gapSize] 虚线间隙的大小，默认值为 1
     * @param {string} [offset] 偏移量，默认值 new Vector3(0.0, 0.0, 0.0)
     */
    /**
     * 开启天气
     * @param {Object} viewer 视图
     * @param {string} weather 天气类型，可选 'rain' 'snow'  'fog'
     * @param {Object} range 范围 new Vector3()的实例
     * @returns any
     */
    static turnOnWeather(viewer: Object, weather: string, range: Object): false | undefined;
    /**
     * 关闭天气
     * @param {*} viewer 视图
     * @param {*} weather 天气类型，可选 'rain' 'snow'  'fog'
     * @returns
     */
    static turnOffWeather(viewer: any, weather: any): false | undefined;
    /**
     *
     * @param {string} url 链接
     * @returns
     */
    static getNameByUrl(url: string): {
        name: string;
        fileType: string;
    };
    static computeTopLevelHeight(mapLayer: any, viewer: any): number | false;
    static randomValue(min: any, max: any): any;
    static randomVector3(min: any, max: any): any;
    static addRadarScan(imgURL: any): any;
    /**
     *
     * 摄像头扫描区域
     *
     * @param {*} cameraPosition
     * @param {*} target
     * @param {*} style
     * @returns
     */
    static createCameraScanArea(cameraPosition: any, target: any, style?: any): any;
    static createCarScanArea(width: any, length: any, radarOutUrl: any, radarInUrl: any, hudUrl: any): any;
    static createFence(pointArr: any, args: any): any;
    static createPlane2Points(pointX: any, pointY: any, options: any): any;
    /**
     * 碰撞检测
     * @param {Array} labels 标签数据
     * @param {Object} camera 相机
     */
    static collisionDetection(labels: any[], camera: Object): void;
    /**
     * Merges the properties of sources into destination object.
     * @param  {Object} dest   - object to extend
     * @param  {...Object} src - sources
     * @return {Object}
     * @memberOf Util
     */
    static extend(dest: Object, ...args: any[]): Object;
    static disposeObject(obj: any): void;
}
