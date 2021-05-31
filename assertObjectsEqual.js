
const eqObjects = require('./eqObjects')
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

if (eqObjects(actual, expected)) {
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
}
};

module.exports = assertObjectsEqual;

//TEST CODE
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//console.log(assertObjectsEqual(eqObjects(ab, ba), true))
