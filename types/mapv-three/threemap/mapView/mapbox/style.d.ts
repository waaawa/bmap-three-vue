export default class MapboxStyle {
    constructor(styleJSON: any, spec: any);
    _styleJSON: any;
    _spec: any;
    zoomObject: {
        zoom: number;
    } | undefined;
    functionCache: {} | undefined;
    filterCache: {} | undefined;
    featureState: {} | undefined;
    setStyleJSON(styleJSON: any): void;
    getStyleJSON(): any;
    setSpec(spec: any): void;
    getSpec(): any;
    expressionData(rawExpression: any, propertySpec: any): any;
    getValue(layer: any, layoutOrPaint: any, property: any, zoom: any, feature: any): any;
    evaluateFilter(layerId: any, filter: any, feature: any, zoom: any): any;
}
