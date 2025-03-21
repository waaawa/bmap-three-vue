export class Drawer extends BaseControl {
    _drawerBtn: HTMLDivElement | undefined;
    _drawerList: HTMLDivElement | undefined;
    _drawerCheckboxs: any[] | undefined;
    addChangeListener(element: any, handler: any): void;
    _eventMap: WeakMap<object, any> | undefined;
    removeChangeListener(element: any): void;
    openDrawer(): void;
}
import { BaseControl } from "./BaseControl";
