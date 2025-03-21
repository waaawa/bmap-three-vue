export class TimeStatsItem {
    constructor(name: any);
    _lastValue: number;
    _count: number;
    _total: number;
    _beginTime: number;
    _name: any;
    begin(time: any): void;
    end(time: any): void;
    add(value: any): void;
    get total(): number;
    get count(): number;
    get average(): number;
    get lastValue(): number;
    get name(): any;
    get beginTime(): number;
}
declare class Stats {
    _timeStatsItem: {};
    addTimeStatsItem(name: any): void;
    removeTimeStatsItem(name: any): void;
    beginTimeStatsItem(name: any, time: any): void;
    endTimeStatsItem(name: any, time: any): void;
    addTimeStatsItemValue(name: any, value: any): void;
    getSortedTimeStatsItems(): any[];
    printString(): string;
}
export { Stats as RenderingStats };
