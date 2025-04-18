export class ExtendMeshStandardMaterial {
    constructor(parameters: any);
    lights: boolean;
    fog: boolean;
    type: string;
    isMeshStandardMaterial: boolean;
    defines: {
        STANDARD: string;
    };
    defineMaterialNormalProperties: (obj: any, props?: any[]) => void;
    defineMaterialAliasProperties: (obj: any, props?: any[]) => void;
    uniforms: any;
    color: any;
    roughness: number;
    metalness: number;
    map: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    emissive: any;
    emissiveIntensity: number;
    emissiveMap: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: any;
    normalScale: any;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    roughnessMap: any;
    metalnessMap: any;
    alphaMap: any;
    envMap: any;
    envMapIntensity: number;
    refractionRatio: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    set vertexShaderChunks(arg: any);
    set fragmentShaderChunks(arg: any);
    vertexShader: any;
    needsUpdate: boolean | undefined;
    fragmentShader: any;
    getShaderSource: (fromSource: any, defaultChunks: any, chunks: any, shaderName: any) => any;
    setCommonUniforms: (uniforms: any) => void;
    dispose(): void;
}
