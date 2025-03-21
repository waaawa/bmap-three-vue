/**
 * 红绿灯图层
 * [demo](/bigScreen_demo/?type=trafficLayer)
 * ```
 * import { Layers } from '@baidu/v2x-visual';
import { AnimateKey } from '../../configs/config';
 * const { TrafficLightsLayer } = layers;
 * const layer = new TrafficLightsLayer();
 * MapView.add(layer);
 * // 红绿灯渲染时，可监听viewer上的updateTrafficLightGroup事件获取数据
 * // viewer.addEventListener(
 * //     'updateTrafficLightGroup',
 * //     ({ trafficLights,crossId,contentMap }) => {}
 * // );
 * ```
 */
export class TrafficLightsLayer {
    constructor(arg?: {});
    /**
     * @private
     * 已链接红绿灯动态数据的路口Id
     */
    private hasSignalRoadIds;
    /**
     * @private
     */
    private lampsMapBuffer;
    lampsMap: any;
    /**
     * @private
     */
    private lampsResetMap;
    /**
     * @private
     */
    private trafficLightZ;
    /**
     * 已渲染红绿灯的路口Id
     */
    hasLamps: any[];
    /**
     * @private
     */
    private shineTimeoutMap;
    /**
     * 是否默认开启自动连接信号灯服务
     * @default true
     */
    autoConnect: any;
    defaultMessage: any;
    name: string;
    viewer: any;
    sideMap: any;
    serviceConfig: any;
    delay: any;
    replayStatus: boolean;
    websocketMap: {};
    fetchLightKey: any;
    staticLightDataHandle: any;
    trafficLabelList: any[];
    deviceMap: any;
    /** @private */
    private afterAddToEngine;
    engine: any;
    /**
     * @private
     */
    private onBeforeScenePrepareRender;
    /**
     * 渲染默认红绿灯标识牌
     * LampStaticInfo {
           lampIds: Array<{
               lampId: string;
               phaseId: number;
           }>;
           poleLat: number;
           poleLon: number;
           roadDirection: number;
       }
     * @param {LampStaticInfo[]} lamps 红绿灯静态信息
     * @param {Object} params 红绿灯渲染配置
     * @param {number} params.z 红绿灯高度
     * @param {number} params.scaleNum 红绿灯渲染放大倍数 默认15
     * @param {number} roadId 红绿灯路口唯一ID
     * @returns
     */
    setDefaultLightGroup(lamps: any[], params: {
        z: number;
        scaleNum: number;
    } | undefined, roadId: number): void;
    /**
     * 渲染动态红绿灯数据
     * LampInfo {
           countDown: number;
           lampId: string;
           lampStatus: string;
           nextCountDown: number;
           nextLampStatus: string;
           phaseId: string;
           roadDirection: string;
           roadFlowDirection: string;
       }
     * LampGroupInfo {
           crossId: string;
           lampRealInfos: Array<LampInfo>;
           signalMachineStamp: number;
       }
     * @param {LampGroupInfo} signalInfo
     * @param {*} option
     * @returns
     */
    renderLamps(signalInfo: any, option?: any): false | undefined;
    /**
     * 更新交通灯材质
     */
    updateTrafficLightMaterial(lightList: any, name: any, mapKey?: string): void;
    /**
     * 重置一个路口的红绿灯
     * @param crossId
     */
    resetTrafficLightGroup(crossId: any): void;
    /**
     * @private
     */
    private sendMixParams;
    /**
     * @private
     */
    private addEvent;
    /**
     * @private
     */
    private connectSignalWs;
    /**
     * @private
     */
    private connectSignal;
    /**
     * @private
     */
    private connectLampReplay;
    /**
     * @private
     * 处理信号灯数据
     * @param data 信号灯数据的字符串（JSON.stringify后)
     * @param option 信号灯配置
     * @returns 处理后信号灯数数据 转化为数组后可供updateTrafficLightGroup使用
     */
    private formatLampsData;
    /**
     * @private
     * 获取红绿灯静态数据并渲染
     * @param roadId
     * @param params
     * @returns
     */
    private fetchLights;
    /**
     * 根据设备ID和灯信息渲染交通灯模型
     * @param deviceId 设备ID
     * @param lightInfo 灯信息
     * @param lightInfo.color 灯顔色
     * @param lightInfo.signalLightDirection 灯方向
     * @param lightInfo.number 灯倒计时数字
     */
    renderTrafficLightModel(deviceId: any, lightInfo: any): void;
    /**
     * @private
     * 更新一个路口的红绿灯
     * @param trafficLights 红绿灯数据
     * @param crossId 路口id
     * @returns
     */
    private updateTrafficLightGroup;
    /**
     * @private
     * 释放单红绿灯
     * @param crossId
     * @returns
     */
    private removeLightsGroup;
    /**
     * 更新红绿灯样式
     * @param params 配置
     * @param backStyle 背景样式
     * @param numStyle 数字样式
     * @param iconStyle 标签样式
     */
    updateLampStyle(params: any, backStyle: any, numStyle: any, iconStyle: any): void;
    /**
     * 灯闪烁
     * @param params
     */
    shineLamp(params: any): void;
    /**
     * 展示感应式控制信息
     * @param info 控制信息
     * @param color 颜色
     * @param option 配置
     */
    showLampControlInfo(info: any, color: string | undefined, option: any): void;
    dispose(): void;
}
