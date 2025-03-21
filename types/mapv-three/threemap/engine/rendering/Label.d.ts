export class RenderingLabel {
    constructor(rendering: any);
    _enabled: boolean;
    _rendering: any;
    set enabled(arg: boolean);
    get enabled(): boolean;
    init(): void;
    _flatDataSource: DataSource | undefined;
    _flatText: any;
    _fixDataSource: DataSource | undefined;
    _fixText: any;
    _labelDataSource: DataSource | undefined;
    _labelText: any;
    addLabel(label: any): void;
    addLabels(labels: any): void;
    removeLabel(label: any): void;
    removeLabels(labels: any): void;
    dispose(): void;
}
import { DataSource } from "../../dataSource/DataSource";
