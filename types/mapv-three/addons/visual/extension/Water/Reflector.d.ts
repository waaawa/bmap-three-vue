export class Reflector {
    constructor(geometry: any, options: any);
    type: string;
    material: any;
    onBeforeRender: (renderer: any, scene: any, camera: any) => void;
    getRenderTarget: () => any;
}
export namespace Reflector {
    namespace ReflectorShader {
        namespace uniforms {
            namespace color {
                const value: null;
            }
            namespace tDiffuse {
                const value_1: null;
                export { value_1 as value };
            }
            namespace textureMatrix {
                const value_2: null;
                export { value_2 as value };
            }
        }
        const vertexShader: string;
        const fragmentShader: string;
    }
}
