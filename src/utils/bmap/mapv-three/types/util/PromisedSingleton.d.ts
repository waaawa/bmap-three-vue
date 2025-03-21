export class PromisedSingleton {
    _retryTimes: number;
    _queued: {};
    _cached: {};
    generate(key: any): Promise<{}>;
    get(key: any): Promise<any>;
    get keys(): string[];
}
