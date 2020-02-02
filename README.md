**Note:** Not maintained

# deep-key-filter
## Install
```sh
npm install --save deep-key-filter
```
## Usage
```js
var deepKeyFilter = require('deep-key-filter');
var obj = {a: 1, b: 2, c: 3};
console.log(deepKeyFilter(obj, 'b')); // Filters all 'b' keys
console.log(deepKeyFilter(obj, key => key === 'c')); // Filters all 'c' keys
```
