/**
 * @file 全景引擎输入数据结构定义
 * @author quda
 */
export class PanoramaData {
    /**
     * TODO: 实验属性！！！
     * 直接传入的全景图片资源
     * 单张图片使用球模型渲染
     * 六张图片使用天空盒渲染，顺序[px, nx, py, ny, pz, nz]
     */
    image: any;
    /**
     * 场景点的Id
     */
    panoId: string;
    /**
     * 内景ID，相册功能新增iid，这个iid其实是一个场景组id，对于一个场景组，存在多个场景即多个pid，
     * 切换场景而不更改场景组（panoId变化iid不变）不重新加载相册图片
     */
    iid: string;
    /**
     * 场景点的类型，内景or外景，street or inter 用于区分内景和外景
     */
    panoType: string;
    /**
     * 场景点空间位置，墨卡托坐标X（单位米）
     */
    panoX: number;
    /**
     * 场景点空间位置，墨卡托坐标Y（单位米）
     */
    panoY: number;
    /**
     * 场景点空间位置，墨卡托坐标Z（单位米）
     */
    panoZ: number;
    /**
     * 水平偏航角（角度值）
     * 承接街景sdata接口内的行车角度
     */
    heading: number;
    /**
     * 垂直视角（角度值）
     * 供街景sdata接口内的行车角度
     */
    pitch: number;
    /**
     * 当前场景初始化默认水平视角
     */
    defaultHeading: any;
    /**
     * 当前场景初始化默认垂直视角
     */
    defaultPitch: any;
    /**
     * 图片起始点与北的夹角
     */
    northDir: number;
    /**
     * 用于纠正球模型姿态的偏航角heading（角度值）
     */
    fixHeading: number;
    /**
     * 用于纠正球模型姿态的俯仰角pitch 用于纠正车行驶过程中上下坡（角度值）
     */
    fixPitch: number;
    /**
     * 用于纠正球模型姿态倾斜角roll 用于纠正车行驶过程中左右不平（角度值）
     */
    fixRoll: number;
    /**
     * 采集设备离地面的高度（单位米）
     */
    deviceHeight: number;
    /**
     * 拍摄日期
     */
    date: string;
    /**
     * 街景拍摄时间
     */
    time: string;
    /**
     * 数据提供商
     */
    provider: number;
    /**
     * 审图号
     */
    admission: string;
    /**
     * 相册数据
     * @property photos
     */
    photos: any[];
    /**
     * 当前pano点所属的道路名字
     */
    roadName: string;
    /**
     * 道路数据，每条道路是道路信息和道路上的场景点的集合
     */
    roads: any[];
    /**
     * 连接点数据
     */
    vpoints: any[];
    /**
     * 当前场景点的topo点，紧挨着当前场景的场景点数组
     * @type {Array}
     */
    topoArray: any[];
    /**
     * 街景点属于的道路
     * @property currentRoad
     */
    currentRoad: any;
    /**
     * 道路的宽度
     * @property roadWidth
     * @type {number}
     */
    roadWidth: number;
    /**
     * 获取当前道路信息
     * @return {Array} - 包含了很多道路节点的数组
     */
    getCurrentRoad: () => any[];
    /**
     * 返回一个数组 每一项为一个object
     *     {
     *         panoId:'',       // String 场景点ID
     *         topoDir:'',      // Number 拓扑朝向，角度值
     *         roadName:'',  // String  道路名称
     *         panoType:'',   // String  场景点类型
     *         panoX:'',        // Number 墨卡托坐标（单位米）
     *         panoY:'',        // Number 墨卡托坐标（单位米）
     *         cPoint:{x:'', y:''},      // link路口的连接点坐标
     *     }
     * @return  {Array} - 拓扑点数组
     */
    getTopos: () => any[];
    getRoadWidth: () => number;
}
