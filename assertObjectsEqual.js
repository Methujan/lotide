const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 

    for (let i of Object.keys(object1)){
      if(Array.isArray(object1[i] && Array.isArray(object2[i]))){
        if(!eqArrays(object1[i], object2[i])){
          return false;
        }
      }
      if(object1[i] instanceof Object && object2[i] instanceof Object){
        if(!eqObjects(object1[i], object2[i])){
         return false;
        }
      }
      else {
        if (object1[i] !== object2[i]) { // compares the objects key values against each other
          return false;
        }
    }
    
} return true
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

if (eqObjects(actual, expected)) {
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
}
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true)
