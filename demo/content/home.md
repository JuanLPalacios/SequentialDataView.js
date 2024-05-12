# SequentialDataView.js

SequentialDataView is a wrapper for the DataView low level interface for reading and withing binary data sequentially.


## Quick Start

1. Create an `SequentialDataView` object with `new SequentialDataView(arrayBuffer)` or the async static method `SequentialDataView.fromFile(file)`.
2. User the `get[binary-data-type]` methods to parse the contents, E.g. `sequentialDataView.getUint8()`, this will progress the pointer position in the array buffer accordingly.
3. Call `sequentialDataView.pos()` to get the current pointer position or `sequentialDataView.atEnd()` to che if has reached the end of the array buffer.
4. Call `sequentialDataView.seek(pos)` to set the current pointer position to skip ahead or go back.