export class DynamicSkyMaterial {
    constructor(parameters: any);
    _shaderIndex: number;
    defines: {};
    uniforms: any;
    side: any;
    set shaderIndex(arg: number);
    get shaderIndex(): number;
    depthWrite: boolean;
    depthTest: boolean;
    envMap: any;
    clipping: boolean;
    vertexShader: any;
    fragmentShader: any;
    needsUpdate: boolean | undefined;
    dispose(): void;
}
