# SequentialDataView.js

[![npm](https://img.shields.io/npm/v/sequential-data-view-js)](https://www.npmjs.com/package/sequential-data-view-js)
[![license](https://img.shields.io/github/license/JuanLPalacios/sequential-data-view-js)](https://github.com/JuanLPalacios/sequential-data-view-js/blob/master/LICENSE)

SequentialDataView is a wrapper for the DataView low level interface for reading and withing binary data sequentially.


## Quick Start

1. Create an `SequentialDataView` object with `new SequentialDataView(arrayBuffer)` or the async static method `SequentialDataView.fromFile(file)`.
2. User the `get[binary-data-type]` methods to parse the contents, E.g. `sequentialDataView.getUint8()`, this will progress the pointer position in the array buffer accordingly.
3. Call `sequentialDataView.pos()` to get the current pointer position or `sequentialDataView.atEnd()` to che if has reached the end of the array buffer.
4. Call `sequentialDataView.seek(pos)` to set the current pointer position to skip ahead or go back.

```javascript [g1:JavaScript]
// Module import
const { SequentialDataView } from 'sequential-data-view-js';

// Prepare buffer to parse.
const arrayBuffer = Uint8Array.from(atob('/wFZAQBYQA=='), c => c.charCodeAt(0)).buffer;

//
const sequentialDataView = new SequentialDataView();

// Parse buffer and show result
console.log(sequentialDataView.getUint8());//255
console.log(sequentialDataView.getUint16());//345
console.log(sequentialDataView.getUint32());//600
console.log(sequentialDataView.getInt8());//64

// jump back and rad the first byte as a signed 8bit int
sequentialDataView.seek(0);
console.log(sequentialDataView.getInt8());//-123

```

```typescript [g1:TypeScript]
// Module import
const { SequentialDataView } from 'sequential-data-view-js';

// Prepare buffer to parse.
const arrayBuffer = Uint8Array.from(atob('/wFZAQBYQA=='), c => c.charCodeAt(0)).buffer;

//
const sequentialDataView = new SequentialDataView();

// Parse buffer and show result
console.log(sequentialDataView.getUint8());//255
console.log(sequentialDataView.getUint16());//345
console.log(sequentialDataView.getUint32());//600
console.log(sequentialDataView.getInt8());//64

// jump back and rad the first byte as a signed 8bit int
sequentialDataView.seek(0);
console.log(sequentialDataView.getInt8());//-123

```

## Installation

You can install `SequentialDataView.js` via npm:

```bash
npm install sequential-data-view-js
```

The npm package includes types.


## Built With

- TypeScript
- RollUp

## Author

👤 **Juan Luis Palacios**

- GitHub: [@JuanLPalacios](https://github.com/JuanLPalacios)
- Twitter: [@JuanLuisPalac20](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/juan-luis-palacios-p%C3%A9rez-95b39a228/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
