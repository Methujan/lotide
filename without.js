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

const without = function(source, itemsToRemove){
  let newArray = source; // Declaring a variable for the source array
  for (let i = 0; i <= source.length; i++) { // Going through elements for the length of source
    for (let x of itemsToRemove){ // Going through the elements in itemsToRemove
      if(source[i] === x){ // If an element in source and itemsToRemove have the same equal value
        let removedItem = newArray.indexOf(x); // let removedItem be the index of x in the newArray
        console.log(removedItem);
        newArray.splice(removedItem,1); // remove the value at index x 
      }
    }
  } 
  return newArray;
}

console.log(without([1,2,3,4,5,6,7,8],[6]));