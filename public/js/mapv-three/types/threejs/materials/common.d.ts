export namespace emissiveUniforms {
    namespace mvt_emissive {
        const value: null;
    }
    namespace mvt_emissiveIntensity {
        const value_1: number;
        export { value_1 as value };
    }
}
export namespace selectiveUniforms {
    namespace selectedObjectColor {
        const value_2: number[];
        export { value_2 as value };
    }
    namespace selectedObjectIndex {
        const value_3: number;
        export { value_3 as value };
    }
    namespace selectedObjectColorMode {
        const value_4: number;
        export { value_4 as value };
    }
}
export namespace keepSizeUniforms {
    namespace keepSize {
        const value_5: boolean;
        export { value_5 as value };
    }
    namespace zoomUnits {
        const value_6: number;
        export { value_6 as value };
    }
}
export function defineMaterialNormalProperties(obj: any, props?: any[]): void;
export function defineMaterialCloneProperties(obj: any, props?: any[]): void;
export function defineMaterialColorProperties(obj: any, props?: any[]): void;
export function defineMaterialAliasProperties(obj: any, props?: any[]): void;
export function defineMaterialBoolDefineProperties(obj: any, props?: any[]): void;
export function defineMaterialSelectiveProperties(obj: any): void;
export function defineMaterialKeepSizeProperties(obj: any): void;
export function defineMaterialEmissiveProperties(obj: any): void;
export function generateCubeUVSize(texture: any): {
    texelWidth: number;
    texelHeight: number;
    maxMip: number;
} | null;
