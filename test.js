function getTestData() {
  return {
    "a": 1,
    "c": {
      "a": 2,
      "b": 3,
      "c": {
        "a": 3,
        "b": [
          4,
          5,
          6
        ],
        "c": 7
      }
    },
    "d": [
      {
        "a": 1,
        "b": 2,
        "c": 3
      },
      {
        "a": 4,
        "b": 5,
        "c": 6
      }
    ]
  };
}

var deepKeyFilter = require('./');
var o;

console.log('Test 1');
o = getTestData();
console.log('Before', JSON.stringify(o, null, 2));
deepKeyFilter(o, 'b');
console.log('After', JSON.stringify(o, null, 2));

console.log('Test 2');
o = getTestData();
console.log('Before', JSON.stringify(o, null, 2));
deepKeyFilter(o, key => key === 'c');
console.log('After', JSON.stringify(o, null, 2));
