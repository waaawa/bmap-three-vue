export default class ImageExpression {
    static parse(args: any, context: any): any;
    constructor(input: any);
    type: {
        kind: string;
    };
    input: any;
    evaluate(ctx: any): ResolvedImage | null;
    eachChild(fn: any): void;
    outputDefined(): boolean;
    serialize(): any[];
}
import ResolvedImage from "../types/resolved_image.js";
