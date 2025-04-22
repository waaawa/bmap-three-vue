export default class FormatExpression {
    static parse(args: any, context: any): any;
    constructor(sections: any);
    type: {
        kind: string;
    };
    sections: any;
    evaluate(ctx: any): Formatted;
    eachChild(fn: any): void;
    outputDefined(): boolean;
    serialize(): string[];
}
import Formatted from "../types/formatted.js";
