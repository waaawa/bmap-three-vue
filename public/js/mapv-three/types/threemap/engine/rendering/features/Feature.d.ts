export class Feature {
    constructor(rendering: any, options: any);
    enabled: boolean;
    name: string;
    _options: any;
    _rendering: any;
    beginFrame(): void;
    render(): void;
    endFrame(): void;
}
