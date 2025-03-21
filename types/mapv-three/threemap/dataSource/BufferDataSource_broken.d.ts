export class BufferDataSourceBroken extends AbstractDataSource {
    _expandStepSize: number;
    _attributesMap: {};
    _attributes: any[];
    _idIndexMap: {};
    _indexIdMap: {};
    _instanceMatrixArray: Float32Array;
    _instanceMatrixArraySize: number;
    _currentCount: number;
    addAttribute(name: any, itemSize?: number, Type?: Float32ArrayConstructor): void;
    addAttributes(attributes: any): void;
    expandInstanceArray: (count: any) => void;
    /**
     * 添加数据
     * @param {*} bufferData
     */
    add(bufferData: any): void;
    _rtc: any;
    copyArrayData: (target: any, targetOffset: any, source: any, sourceOffset: any, length: any) => void;
    remove(bufferData: any): void;
}
import { AbstractDataSource } from "./AbstractDataSource";
