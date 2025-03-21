export default ParsingContext;
/**
 * State associated parsing at a given point in an expression tree.
 * @private
 */
declare class ParsingContext {
    constructor(registry: any, path: any[] | undefined, expectedType: any, scope?: Scope, errors?: any[]);
    registry: any;
    path: any[];
    key: string;
    scope: Scope;
    errors: any[];
    expectedType: any;
    /**
     * @param expr the JSON expression to parse
     * @param index the optional argument index if this expression is an argument of
     * a parent expression that's being parsed
     * @param options
     * @param options.omitTypeAnnotations set true to omit inferred type annotations.
     * Caller beware: with this option set, the parsed expression's type
     * will NOT satisfy `expectedType` if it would normally be wrapped in an inferred annotation.
     * @private
     */
    private parse;
    _parse(expr: any, options: any): any;
    /**
     * Returns a copy of this context suitable for parsing the subexpression at
     * index `index`, optionally appending to 'let' binding map.
     *
     * Note that `errors` property, intended for collecting errors while
     * parsing, is copied by reference rather than cloned.
     * @private
     */
    private concat;
    /**
     * Push a parsing (or type checking) error into the `this.errors`
     * @param error The message
     * @param keys Optionally specify the source of the error at a child
     * of the current expression at `this.key`.
     * @private
     */
    private error;
    /**
     * Returns null if `t` is a subtype of `expected`; otherwise returns an
     * error message and also pushes it to `this.errors`.
     */
    checkSubtype(expected: any, t: any): string | null;
}
import Scope from "./scope.js";
