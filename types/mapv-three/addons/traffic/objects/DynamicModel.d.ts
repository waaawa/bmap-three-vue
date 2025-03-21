/**
 * 统一作为模型的基类
 * @param { Object } args 参数
 * @param { number } [args.rotation=[0,0,0]] [x,y,z],绕各坐标轴的旋转角，弧度制，正北方向为0，右手坐标系，默认值[0,0,0]
 * @param { number } [args.scale=[1,1,1]] [x,y,z],缩放比例，默认值[1,1,1]
 * @param { number } [args.speed=0.0] 速度，m/s, 标量，默认值0.0
 * @param {string} [args.name] 名字， 默认值 空
 * @param {any} [args.color] 颜色，默认值new THREE.Color(1.0, 1.0, 1.0), 可以接受0xff0000,"rgb(255, 0, 0)",
 * "rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
 * @param {boolean} [args.colorChangable] 颜色是否可变，默认值true
 * @param {boolean} [args.movable] 位置是否可变，默认值true
 * @param {string} [args.modelType] 模型类型，轿车，公交车，自行车等，默认值"car"，可选参数（car,bus,truck,bicycle,pedestrian,traffic_cone）,
 * 如果是自定义的模型，可以自己命名，然后配合modelUrl使用
 * @param {string} [args.modelUrl] 模型链接地址，目前支持gltf格式数据，默认值 null，如果是自定义模型类型，该值必须有
 * @param {Object} [args.text] 文字，可以在模型上添加文字，默认为 null
 * @param {Object} [args.labelOffset] 注记偏移量，默认值THREE.Vector3(0, 0, 1.0),可以接受[x,y,z]或者{x:,y:,z:}或者new THREE.Vector3()
 * @param {Object} [label] 注记几何体，{@link Label}
 * @param {string} [args.encoding] 编码规则 默认-1, 0 为LinearEncoding 线性;1为 sRGBEncoding 非线性
 */
export class DynamicModel extends TrafficObject {
    constructor(args?: {});
    _rotation: Object;
    _scale: any;
    speed: any;
    name: any;
    _geometryType: string;
    color: any;
    colorChangable: any;
    movable: any;
    opacity: any;
    modelType: any;
    modelUrl: any;
    models: any[];
    text: any;
    labelOffset: Object;
    label: any;
    loaded: boolean;
    onLoad: any;
    onError: any;
    dynamicType: any;
    animations: any;
    mixer: any;
    boundingBoxHelper: any;
    animationAction: any[];
    _display: boolean;
    enableLOD: boolean;
    minPixel: number;
    encoding: any;
    isReceiveShadow: any;
    iScastShadow: any;
    renderer: any;
    /**
     * 初始化
     */
    init(): void;
    renderOrder: number | undefined;
    initModel(): void;
    /**
     *
     * @param {Object} meshs 赋值样式
     */
    setMeshs(type: any, meshs: Object): void;
    /**
     *
     * 修改编码值
     *
     * @param {Object} mesh 几何
     * @param {string} encoding 编码值 encoding规则  LinearEncoding 0   sRGBEncoding 1
     */
    setEncoding(mesh: Object, encoding: string): void;
    stop(): void;
    play(): void;
    /**
     * 改变模型类型
     * @param {string} mt 模型类型
     *
     */
    setModelType(mt: string): void;
    /**
     * 改变标注
     * @param {string} text 文字
     */
    setText(text: string): void;
    /**
     * 设置标注的偏移量
     * @param {Object} lo 偏移
     */
    setLabelOffset(lo: Object): void;
    /**
     * 修改模型的颜色
     * @param {*} color 颜色
     */
    setColor(color: any): void;
    /**
     * 修改模型的颜色
     * @param {*} name  名称
     * @param {*} color 颜色
     */
    setNameColor(name: any, color: any): void;
    /**
     * 修改模型的可见性
     * @param {boolean} visible 颜色
     */
    setVisible(visible: boolean): void;
    visible: any;
    getBoundingBoxWorld(): any;
    boundingBox: any;
    /**
     *
     * 获取采集动画
     *
     * @param {number} index 第几个动画
     * @param {*} start 开始时间轴
     * @param {*} end 结速时间轴
     * @param {*} fps 帧数
     */
    setFrameAction(index: number, start: any, end: any, fps: any): void;
    onBeforeRender(): void;
    _visible: any;
    onAfterRender(): void;
    raycast(raycaster: any, intersects: any): {
        object: DynamicModel;
        point: any;
        distance: any;
        target: DynamicModel;
    }[] | undefined;
    /**
     * 释放内存
     */
    dispose(): void;
    children: any[] | undefined;
}
import { TrafficObject } from "./TrafficObject";
