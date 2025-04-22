export class Features {
    constructor(rendering: any, options: any);
    _features: any[];
    _rendering: any;
    _bloom: FeatureBloom;
    _antialias: FeatureAntialias;
    _ao: FeatureAo;
    _reflection: FeatureReflection;
    _bufferView: FeatureBufferView;
    _stats: FeatureStats;
    beginFrame(): void;
    afterRender(): void;
    endFrame(): void;
    updateReqirements(requirements: any): void;
    get ao(): FeatureAo;
    get bloom(): FeatureBloom;
    get stats(): FeatureStats;
    get bufferView(): FeatureBufferView;
    get antialias(): FeatureAntialias;
    get reflection(): FeatureReflection;
    get features(): any[];
}
import { FeatureBloom } from "./Bloom";
import { FeatureAntialias } from "./Antialias";
import { FeatureAo } from "./Ao";
import { FeatureReflection } from "./Reflection";
import { FeatureBufferView } from "./BufferView";
import { FeatureStats } from "./Stats";
