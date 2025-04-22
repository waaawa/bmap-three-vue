export class LightSphereGeometry extends CustomInstancedBufferGeometry {
    constructor(parameters: any);
    isLightSphereGeometry: boolean;
    _needsUpdate: boolean;
    type: string;
    parameters: any;
    setModelData: () => void;
    updateGeometry(): void;
    set needsUpdate(arg: boolean);
    get needsUpdate(): boolean;
}
import { CustomInstancedBufferGeometry } from "../../core/CustomInstancedBufferGeometry";
