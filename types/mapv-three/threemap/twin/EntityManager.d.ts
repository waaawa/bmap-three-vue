export class EntityManager {
    constructor(options: any);
    /**
     * @private
     * id和AbstractEntity的映射关系
     */
    private _entities;
    /**
     * @private
     * 存储还在队列中的时间戳
     */
    private _entityCacheTimes;
    /**
     * @private
     * 第一次push时的真实时间
     */
    private _startTime;
    /**
     * @private
     * 第一次push时的真实时间与数据时间的时间差
     */
    private _timeOffset;
    delay: any;
    twin: any;
    /**
     * 全量更新数据
     * @param {object} data 数据
     */
    push(data: object): void;
    shift(time: any): any[];
    tick(engine: any, time: any): {
        buffers?: undefined;
        modelIndexMap?: undefined;
    } | {
        buffers: {
            id: any[];
            index: number[];
            position: any[];
            translation: any[];
            rotation: any[];
            scale: any[];
            modelType: any[];
            payload: any[];
            color: any[];
        };
        modelIndexMap: {};
    };
    reset(): void;
    set startTime(arg: number);
    get startTime(): number;
    set timeOffset(arg: number);
    get timeOffset(): number;
}
