const findKey = function(objects, callback) {

  for (let key in objects) {
   
    if (callback(objects[key])) {
      return key;
    }
  }
};






console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"



/*
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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
*/