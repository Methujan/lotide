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
  let newArray = [...source];
  for (let i = 0; i <= source.length; i++) {
    for (let x of itemsToRemove){
      if(source[i] === x){
        let removedItem = newArray.indexOf(x);
        newArray.splice(removedItem,1);
      }
    }
  } 
  return newArray;
}

console.log(without([1,2,3,4,5,6,7,8],[8]));