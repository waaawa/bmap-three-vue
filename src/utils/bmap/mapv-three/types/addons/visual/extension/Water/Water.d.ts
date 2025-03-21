export class Water {
    constructor(geometry: any, options: any);
    type: string;
    material: any;
    onBeforeRender: ((renderer: any, scene: any, camera: any) => void) | undefined;
}
export namespace Water {
    namespace WaterShader {
        namespace uniforms {
            namespace color {
                const type: string;
                const value: null;
            }
            namespace reflectivity {
                const type_1: string;
                export { type_1 as type };
                const value_1: number;
                export { value_1 as value };
            }
            namespace tReflectionMap {
                const type_2: string;
                export { type_2 as type };
                const value_2: null;
                export { value_2 as value };
            }
            namespace tRefractionMap {
                const type_3: string;
                export { type_3 as type };
                const value_3: null;
                export { value_3 as value };
            }
            namespace tNormalMap0 {
                const type_4: string;
                export { type_4 as type };
                const value_4: null;
                export { value_4 as value };
            }
            namespace tNormalMap1 {
                const type_5: string;
                export { type_5 as type };
                const value_5: null;
                export { value_5 as value };
            }
            namespace textureMatrix {
                const type_6: string;
                export { type_6 as type };
                const value_6: null;
                export { value_6 as value };
            }
            namespace config {
                const type_7: string;
                export { type_7 as type };
                const value_7: any;
                export { value_7 as value };
            }
        }
        const vertexShader: string;
        const fragmentShader: string;
    }
}
