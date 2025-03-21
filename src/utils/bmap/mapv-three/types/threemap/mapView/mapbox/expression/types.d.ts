export function array(itemType: any, N: any): {
    kind: string;
    itemType: any;
    N: any;
};
export function toString(type: any): any;
/**
 * Returns null if `t` is a subtype of `expected`; otherwise returns an
 * error message.
 * @private
 */
export function checkSubtype(expected: any, t: any): string | null;
export function isValidType(provided: any, allowedTypes: any): any;
export function isValidNativeType(provided: any, allowedTypes: any): any;
export namespace NullType {
    const kind: string;
}
export namespace NumberType {
    const kind_1: string;
    export { kind_1 as kind };
}
export namespace StringType {
    const kind_2: string;
    export { kind_2 as kind };
}
export namespace BooleanType {
    const kind_3: string;
    export { kind_3 as kind };
}
export namespace ColorType {
    const kind_4: string;
    export { kind_4 as kind };
}
export namespace ObjectType {
    const kind_5: string;
    export { kind_5 as kind };
}
export namespace ValueType {
    const kind_6: string;
    export { kind_6 as kind };
}
export namespace ErrorType {
    const kind_7: string;
    export { kind_7 as kind };
}
export namespace CollatorType {
    const kind_8: string;
    export { kind_8 as kind };
}
export namespace FormattedType {
    const kind_9: string;
    export { kind_9 as kind };
}
export namespace ResolvedImageType {
    const kind_10: string;
    export { kind_10 as kind };
}
