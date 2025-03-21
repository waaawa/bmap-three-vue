/**
 * 闪动特效
 * @param {object} [args] 传参
 * @param {any} [args.color=new Color(1, 1, 1)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)",
 * "rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
 * @param {number} [args.opacity=1.0] 透明度，取值范围0.0 - 1.0，默认1.0，为1.0时transparent为false
 * @param {number} [args.side=2] 定义将要渲染哪一面，0-正面，1-背面，2-两者，默认2
 * @param {number} [args.map=null] 纹理，可以是THREE.Texture或图片的url，默认null
 * @param {number} [args.speed=1] 动画速度，默认1
 * @param {number} [args.repeat=new Vector2(1, 1)] 纹理在曲面上沿每个方向U和V重复多少次，默认new Vector2(1, 1)
 * @param {number} [args.offset=new Vector2(0, 0)] 纹理在曲面上沿每个方向U和V的偏移量，默认new Vector2(0, 0)
 * @param {number} [args.effectType=0] 特效类型，0-局部透明度改变，1-闪烁圆，默认0
 * @param {number} [args.spreadColor=new Color(1, 1, 1)] effectType为1有效，闪烁圆颜色
 * @param {number} [args.depthTest=true] 是否在渲染此材质时启用深度测试,默认为true
 * @param {number} [args.depthWrite=true] 渲染此材质是否对深度缓冲区有任何影响,默认为true
 * @returns {object} 纹理 @instance THREE.Material
*/
export function createTwinkleEffect(args?: {
    color?: any;
    opacity?: number | undefined;
    side?: number | undefined;
    map?: number | undefined;
    speed?: number | undefined;
    repeat?: number | undefined;
    offset?: number | undefined;
    effectType?: number | undefined;
    spreadColor?: number | undefined;
    depthTest?: number | undefined;
    depthWrite?: number | undefined;
} | undefined): object;
