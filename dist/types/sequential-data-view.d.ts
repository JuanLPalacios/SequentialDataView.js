export declare class SequentialDataView {
    dataView: DataView;
    offset: number;
    constructor(arrayBuffer: ArrayBuffer);
    readRawData(buffer: number[], length: number): number;
    data(): ArrayBuffer;
    getPos(): number;
    setPos(offset: number): void;
    size(): number;
    atEnd(): boolean;
    getUint8(): number;
    getUint16(): number;
    getUint32(): number;
    getInt16(): number;
    getChar(): string;
}
