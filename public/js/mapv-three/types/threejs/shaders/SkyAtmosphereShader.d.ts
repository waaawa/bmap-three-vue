export namespace SkyAtmosphereShader {
    export namespace uniforms {
        namespace altitude {
            const value: number;
        }
        namespace transmittanceTexture {
            const value_1: null;
            export { value_1 as value };
        }
        namespace transmittanceResolution {
            const value_2: number[];
            export { value_2 as value };
        }
        namespace scatteringTexture {
            const value_3: null;
            export { value_3 as value };
        }
        namespace scatteringResolution {
            const value_4: number[];
            export { value_4 as value };
        }
        namespace viewTexture {
            const value_5: null;
            export { value_5 as value };
        }
        namespace viewResolution {
            const value_6: number[];
            export { value_6 as value };
        }
        namespace cameraDirection {
            const value_7: any;
            export { value_7 as value };
        }
        namespace viewHeight {
            const value_8: number;
            export { value_8 as value };
        }
        namespace upDirection {
            const value_9: any;
            export { value_9 as value };
        }
        namespace tWeather {
            const value_10: null;
            export { value_10 as value };
        }
        namespace mixGrayFactor {
            const value_11: number;
            export { value_11 as value };
        }
        namespace isEmissive {
            const value_12: boolean;
            export { value_12 as value };
        }
        namespace uTime {
            const value_13: null;
            export { value_13 as value };
        }
        namespace uStarVisible {
            const value_14: boolean;
            export { value_14 as value };
        }
        namespace uMoonMap {
            const value_15: null;
            export { value_15 as value };
        }
    }
    export { mainVertShader as vertexShader };
    export const fragmentShader: string;
}
export namespace SkyAtmosphereTransmittanceShader {
    export namespace uniforms_1 {
        export namespace altitude_1 {
            const value_16: number;
            export { value_16 as value };
        }
        export { altitude_1 as altitude };
        export namespace viewHeight_1 {
            const value_17: number;
            export { value_17 as value };
        }
        export { viewHeight_1 as viewHeight };
    }
    export { uniforms_1 as uniforms };
    export { bufferVertexShader as vertexShader };
    const fragmentShader_1: string;
    export { fragmentShader_1 as fragmentShader };
}
export namespace SkyAtmosphereScatteringShader {
    export namespace uniforms_2 {
        export namespace altitude_2 {
            const value_18: number;
            export { value_18 as value };
        }
        export { altitude_2 as altitude };
        export namespace transmittanceTexture_1 {
            const value_19: null;
            export { value_19 as value };
        }
        export { transmittanceTexture_1 as transmittanceTexture };
        export namespace transmittanceResolution_1 {
            const value_20: number[];
            export { value_20 as value };
        }
        export { transmittanceResolution_1 as transmittanceResolution };
        export namespace viewHeight_2 {
            const value_21: number;
            export { value_21 as value };
        }
        export { viewHeight_2 as viewHeight };
    }
    export { uniforms_2 as uniforms };
    export { bufferVertexShader as vertexShader };
    const fragmentShader_2: string;
    export { fragmentShader_2 as fragmentShader };
}
export namespace SkyAtmosphereViewShader {
    export namespace uniforms_3 {
        export namespace altitude_3 {
            const value_22: number;
            export { value_22 as value };
        }
        export { altitude_3 as altitude };
        export namespace transmittanceTexture_2 {
            const value_23: null;
            export { value_23 as value };
        }
        export { transmittanceTexture_2 as transmittanceTexture };
        export namespace transmittanceResolution_2 {
            const value_24: number[];
            export { value_24 as value };
        }
        export { transmittanceResolution_2 as transmittanceResolution };
        export namespace scatteringTexture_1 {
            const value_25: null;
            export { value_25 as value };
        }
        export { scatteringTexture_1 as scatteringTexture };
        export namespace scatteringResolution_1 {
            const value_26: number[];
            export { value_26 as value };
        }
        export { scatteringResolution_1 as scatteringResolution };
        export namespace viewHeight_3 {
            const value_27: number;
            export { value_27 as value };
        }
        export { viewHeight_3 as viewHeight };
        export namespace mixGrayFactor_1 {
            const value_28: number;
            export { value_28 as value };
        }
        export { mixGrayFactor_1 as mixGrayFactor };
    }
    export { uniforms_3 as uniforms };
    export { bufferVertexShader as vertexShader };
    const fragmentShader_3: string;
    export { fragmentShader_3 as fragmentShader };
}
export namespace SkyAtmospherePostprocessingShader {
    export namespace uniforms_4 {
        export namespace tDiffuse {
            const value_29: null;
            export { value_29 as value };
        }
        export namespace tDepth {
            const value_30: null;
            export { value_30 as value };
        }
        export namespace tNormal {
            const value_31: null;
            export { value_31 as value };
        }
        export namespace tAtmosphere {
            const value_32: null;
            export { value_32 as value };
        }
        export namespace cameraNear {
            const value_33: number;
            export { value_33 as value };
        }
        export namespace cameraFar {
            const value_34: number;
            export { value_34 as value };
        }
        export namespace projectionInverseMatrix {
            const value_35: any;
            export { value_35 as value };
        }
        export namespace viewInverseMatrix {
            const value_36: any;
            export { value_36 as value };
        }
        export namespace cameraPosition {
            const value_37: any;
            export { value_37 as value };
        }
        export namespace altitude_4 {
            const value_38: number;
            export { value_38 as value };
        }
        export { altitude_4 as altitude };
        export namespace viewHeight_4 {
            const value_39: number;
            export { value_39 as value };
        }
        export { viewHeight_4 as viewHeight };
    }
    export { uniforms_4 as uniforms };
    const fragmentShader_4: string;
    export { fragmentShader_4 as fragmentShader };
}
