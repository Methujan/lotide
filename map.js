const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    results.push(callback(item));
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);





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

assertArraysEqual([1,2,3], [1,2,3]);