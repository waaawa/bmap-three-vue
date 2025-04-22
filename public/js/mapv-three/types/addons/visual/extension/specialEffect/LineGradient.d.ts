/**
 * 纹理宽度渐变线的上升下降动画
 * @param {object} [args] 传参
 * @param {any} [args.color=new Color(0.75, 0.75, 0.75)] 颜色, 可以接受0xff0000,"rgb(255, 0, 0)",
 * "rgb(100%, 0%, 0%)",'skyblue',"hsl(0, 100%, 50%)"等格式
 * @param {number} [args.opacity=1.0] 透明度，取值范围0.0 - 1.0，默认1.0，为1.0时transparent为false
 * @param {number} [args.side=2] 定义将要渲染哪一面，0-正面，1-背面，2-两者，默认2
 * @param {number} [args.speed=0] 速度，大于0向下，小于0向上
 * @param {number} [args.gapSize=0] 空隙宽度，默认.04
 * @param {number} [args.density=0] 条纹组数，默认10
 * @param {number} [args.depthTest=true] 是否在渲染此材质时启用深度测试,默认为true
 * @param {number} [args.transparent=opacity<1.] 开启透明度
 * @param {number} [args.depthWrite=true] 渲染此材质是否对深度缓冲区有任何影响,默认为true
 * @param {number} [args.animateType=0] 0-渐变宽上升，1-等距离上升
 * @returns {object} 纹理 @instance THREE.Material
*/
export function createLineGradient(args?: {
    color?: any;
    opacity?: number | undefined;
    side?: number | undefined;
    speed?: number | undefined;
    gapSize?: number | undefined;
    density?: number | undefined;
    depthTest?: number | undefined;
    transparent?: number | undefined;
    depthWrite?: number | undefined;
    animateType?: number | undefined;
} | undefined): object;
