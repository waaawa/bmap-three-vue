export class Identity3DTilesMaterialManager extends Default3DTilesMaterialManager {
    /** @private */ private _type;
    isIdentity3DTilesMaterialManager: boolean;
    material: IdentityMaterial;
    updateType(): void;
    set type(arg: number);
    get type(): number;
}
import { Default3DTilesMaterialManager } from "./Default3DTilesMaterialManager";
import { IdentityMaterial } from "./IdentityMaterial";
