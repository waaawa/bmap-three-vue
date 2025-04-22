/**
 * 纹理宽度渐变线的上升下降动画
 * @param {object} [args] 传参
 * @param {any} [args.color=new Color(1, 1, 1)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)","rgb(100%, 0%, 0%)",
 * 'skyblue',"hsl(0, 100%, 50%)"等格式
 * @param {number} [args.opacity=1.0] 透明度，取值范围0.0 - 1.0，默认1.0，为1.0时transparent为false
 * @param {number} [args.side=2] 定义将要渲染哪一面，0-正面，1-背面，2-两者，默认2
 * @param {object} [args.map=''] 纹理，可以是THREE.Texture或图片的url，默认null
 * @param {number} [args.mapSpeed=0] map的横向速度，大于0时相对于xoz面顺时针旋转，小于0时相对于xoz面逆时针旋转，默认1
 * @param {number} [args.effectSpeed=0] 贴图附加扫描特效的速度，大于0顺时针旋转，小于0逆时针旋转，默认1
 * @param {number} [args.repeat=new Vector2(1, 1)] 纹理在曲面上沿每个方向U和V重复多少次，默认new Vector2(1, 1)
 * @param {number} [args.offset=new Vector2(0, 0)] 纹理在曲面上沿每个方向U和V的偏移量，默认new Vector2(0, 0)
 * @param {any} [args.mapColor=new Color(1, 1, 0)] 贴图颜色
 * @param {number} [args.depthTest=true] 是否在渲染此材质时启用深度测试,默认为true
 * @param {boolean} [args.transparent=opacity<1.] 是否开启透明度，默认为opacity是否小于1.
 * @param {number} [args.depthWrite=true] 渲染此材质是否对深度缓冲区有任何影响,默认为true
 * @returns {object} 纹理 @instance THREE.Material
*/
export function createLateralScan(args?: {
    color?: any;
    opacity?: number | undefined;
    side?: number | undefined;
    map?: object | undefined;
    mapSpeed?: number | undefined;
    effectSpeed?: number | undefined;
    repeat?: number | undefined;
    offset?: number | undefined;
    mapColor?: any;
    depthTest?: number | undefined;
    transparent?: boolean | undefined;
    depthWrite?: number | undefined;
} | undefined): object;
