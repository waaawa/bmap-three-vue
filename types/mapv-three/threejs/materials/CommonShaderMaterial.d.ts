/**
 * ShaderMaterial构造函数中的parameter在基础属性设置完成后设置，子类无需将parameter传给父类
 */
export class CommonShaderMaterial {
    constructor(parameters: any);
    isCommonShaderMaterial: boolean;
    setCommonUniforms: (uniforms: any) => void;
}
