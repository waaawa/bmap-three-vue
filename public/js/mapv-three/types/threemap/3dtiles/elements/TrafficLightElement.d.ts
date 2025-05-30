/**
 * 信号灯配时表信息
 * ```js
 * {
 *    startTime: 起始时间
 *    period: 60, // 周期时间
 *    // state是一个二维数组，每个元素为时间:灯态，以下代表25秒绿灯、5秒黄灯、30秒红灯
 *    // 0代表关灯
 *    states: [[0, 3], [25, 2], [30, 1]]
 * }
 * ```
 */
export class TrafficLightElement extends AbstractElement {
    /** @internal */ _typeConfigMap: {
        110: {
            slots: number[];
            stateType: number;
        };
        111: {
            slots: number[];
        };
        112: {
            slots: number[];
        };
        113: {
            slots: number[];
        };
        xxx: {
            slots: number[];
        };
        xxx1: {
            slots: number[];
            stateType: number;
        };
    };
    /**
     * @internal
     * 保存信号灯的状态
     */
    _stateMap: Map<any, any>;
    /** @internal */ _timeTableMap: Map<any, any>;
    /** @internal */
    _refreshObjectViewState: (id: any, object: any) => void;
    /**
     * 设置信号灯状态
     * @param {*} id
     * @param {*} state 状态，枚举：1红灯，2黄灯，3绿灯
     * @param {*} number 倒数读秒数，有数字的会显示
     */
    setLightState(id: any, state: any, number?: any): void;
    /**
     * 设置信号灯的配时表
     * @param {*} id
     * @param {*} timetable
     * ```
     * {
     *      startTime: 1654863684,
     *      period: 60,
     *      states: [[0, 3], [25, 2], [30, 1]],
     * }
     */
    setTimeTable(id: any, timetable: any): void;
    getTimeTable(id: any): any;
    getLightState(id: any): any;
    getRealtimeState(id: any): {
        lightState: any;
        number: any;
    } | null;
}
import { AbstractElement } from "./AbstractElement";
