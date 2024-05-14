export class SequentialDataView {
    constructor(arrayBuffer) {
        this.dataView = new DataView(arrayBuffer);
        this.offset = 0;
    }
    readRawData(buffer, length) {
        while (buffer.length > 0)
            buffer.pop();
        const pos = this.offset;
        const endPos = this.offset + length;
        while ((!this.atEnd()) && (this.offset < endPos)) {
            buffer.push(this.getUint8());
        }
        return this.offset - pos;
    }
    data() {
        return this.dataView.buffer;
    }
    getPos() {
        return this.offset;
    }
    setPos(offset) {
        this.offset = offset;
    }
    size() {
        return this.dataView.byteLength;
    }
    atEnd() {
        return this.offset >= this.dataView.byteLength;
    }
    getUint8() {
        const pos = this.offset;
        this.offset += 1;
        return this.dataView.getUint8(pos);
    }
    getUint16() {
        const pos = this.offset;
        this.offset += 2;
        return this.dataView.getUint16(pos);
    }
    getUint32() {
        const pos = this.offset;
        this.offset += 4;
        return this.dataView.getUint32(pos);
    }
    getInt16() {
        const pos = this.offset;
        this.offset += 2;
        return this.dataView.getInt16(pos);
    }
    getChar() {
        return String.fromCharCode(this.getUint8());
    }
}
//# sourceMappingURL=sequential-data-view.js.map