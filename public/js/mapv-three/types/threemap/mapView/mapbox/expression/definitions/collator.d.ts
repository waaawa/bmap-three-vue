export default class CollatorExpression {
    static parse(args: any, context: any): any;
    constructor(caseSensitive: any, diacriticSensitive: any, locale: any);
    type: {
        kind: string;
    };
    caseSensitive: any;
    diacriticSensitive: any;
    locale: any;
    evaluate(ctx: any): Collator;
    eachChild(fn: any): void;
    outputDefined(): boolean;
    serialize(): (string | {
        'case-sensitive': any;
        'diacritic-sensitive': any;
        locale: any;
    })[];
}
import Collator from "../types/collator.js";
