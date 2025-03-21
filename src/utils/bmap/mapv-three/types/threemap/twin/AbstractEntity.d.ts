export class AbstractEntity {
    constructor(length: any);
    id: any;
    data: any[];
    interpolateDirectThreshold: number;
    tick(engine: any, time: any): any;
    push(data: any): number | undefined;
    modelType: any;
    shift(): any;
    splice(index: any, howmany: any, ...args: any[]): any[];
    get length(): number;
    get empty(): boolean;
}
