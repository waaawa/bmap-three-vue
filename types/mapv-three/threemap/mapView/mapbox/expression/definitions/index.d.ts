export default expressions;
declare const expressions: {
    '==': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    '!=': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    '>': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    '<': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    '>=': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    '<=': {
        new (lhs: any, rhs: any, collator: any): {
            type: {
                kind: string;
            };
            lhs: any;
            rhs: any;
            collator: any;
            hasUntypedArgument: boolean;
            evaluate(ctx: any): any;
            eachChild(fn: any): void;
            outputDefined(): boolean;
            serialize(): any[];
        };
        parse(args: any, context: any): any;
    };
    array: typeof Assertion;
    at: typeof At;
    boolean: typeof Assertion;
    case: typeof Case;
    coalesce: typeof Coalesce;
    collator: typeof CollatorExpression;
    format: typeof FormatExpression;
    image: typeof ImageExpression;
    in: typeof In;
    'index-of': typeof IndexOf;
    interpolate: typeof Interpolate;
    'interpolate-hcl': typeof Interpolate;
    'interpolate-lab': typeof Interpolate;
    length: typeof Length;
    let: typeof Let;
    literal: typeof Literal;
    match: typeof Match;
    number: typeof Assertion;
    'number-format': typeof NumberFormat;
    object: typeof Assertion;
    slice: typeof Slice;
    step: typeof Step;
    string: typeof Assertion;
    'to-boolean': typeof Coercion;
    'to-color': typeof Coercion;
    'to-number': typeof Coercion;
    'to-string': typeof Coercion;
    var: typeof Var;
    within: typeof Within;
};
import Assertion from "./assertion.js";
import At from "./at.js";
import Case from "./case.js";
import Coalesce from "./coalesce.js";
import CollatorExpression from "./collator.js";
import FormatExpression from "./format.js";
import ImageExpression from "./image.js";
import In from "./in.js";
import IndexOf from "./index_of.js";
import Interpolate from "./interpolate.js";
import Length from "./length.js";
import Let from "./let.js";
import Literal from "./literal.js";
import Match from "./match.js";
import NumberFormat from "./number_format.js";
import Slice from "./slice.js";
import Step from "./step.js";
import Coercion from "./coercion.js";
import Var from "./var.js";
import Within from "./within.js";
