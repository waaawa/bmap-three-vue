export default EvaluationContext;
declare class EvaluationContext {
    globals: any;
    feature: any;
    featureState: any;
    formattedSection: any;
    availableImages: any;
    canonical: any;
    featureTileCoord: any;
    featureDistanceData: any;
    _parseColorCache: any;
    id(): any;
    geometryType(): any;
    geometry(): any;
    canonicalID(): any;
    properties(): any;
    distanceFromCenter(): number;
    parseColor(input: any): any;
}
