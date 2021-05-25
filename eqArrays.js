const eqArrays = function(array1, array2) {
  let result = true;
  
  if (array1.length === array2.length) {

    for (let i = 0; i < array1.length; i++) {
      
      if (array1[i] === array2[i]) {
        result = true;

      } else {
        result = false;
        return result;

      }
    }
  } else {
    result = false;
    return result;
  }

  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true) // => true
assertEqual((eqArrays([1, 2, 3], [3, 2, 1])), true) // => true

assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true) // => true
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), true) // => true


