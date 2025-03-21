export default CompoundExpression;
declare class CompoundExpression {
    static definitions: any;
    static parse(args: any, context: any): any;
    static register(registry: any, definitions: any): void;
    constructor(name: any, type: any, evaluate: any, args: any);
    name: any;
    typ: any;
    _evaluate: any;
    args: any;
    type: any;
    evaluate(ctx: any): any;
    eachChild(fn: any): void;
    outputDefined(): boolean;
    serialize(): any[];
}
