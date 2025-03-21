export function isExpression(expression: any): boolean;
export function createPropertyExpression(expression: any, propertySpec: any): any;
export function createExpression(expression: any, propertySpec: any): {
    result: string;
    value: any[];
} | {
    result: string;
    value: StyleExpression;
};
export class StyleExpression {
    constructor(expression: any, propertySpec: any);
    expression: any;
    _evaluator: EvaluationContext;
    _defaultValue: any;
    _warningHistory: any;
    _enumValues: any;
    evaluateWithoutErrorHandling(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any, featureTileCoord: any, featureDistanceData: any): any;
    evaluate(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any, featureTileCoord: any, featureDistanceData: any): any;
}
export class ZoomConstantExpression {
    constructor(kind: any, expression: any);
    kind: any;
    isStateDependent: boolean;
    _styleExpression: any;
    evaluateWithoutErrorHandling(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any): any;
    evaluate(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any): any;
}
export class ZoomDependentExpression {
    constructor(kind: any, expression: any, zoomStops: any, interpolationType: any);
    kind: any;
    zoomStops: any;
    isStateDependent: boolean;
    _styleExpression: any;
    interpolationType: any;
    evaluateWithoutErrorHandling(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any): any;
    evaluate(globals: any, feature: any, featureState: any, canonical: any, availableImages: any, formattedSection: any): any;
    interpolationFactor(input: any, lower: any, upper: any): number;
}
import EvaluationContext from "./evaluation_context.js";
