export default Scope;
/**
 * Tracks `let` bindings during expression parsing.
 * @private
 */
declare class Scope {
    constructor(parent: any, bindings?: any[]);
    parent: any;
    bindings: any;
    concat(bindings: any): Scope;
    get(name: any): any;
    has(name: any): any;
}
