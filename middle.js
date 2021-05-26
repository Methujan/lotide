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

//MIDDLE FUNCTION

const middle = function(array1) {
  let middleArray = [];
  let middleIndexValue = 0;
  if(array1.length === 1 || array1.length === 2) {
    return middleArray

  } else if(array1.length % 2 === 0) {
    middleIndexValue = Math.round((array1.length - 1) / 2);
    middleArray.push(array1[middleIndexValue-1], array1[middleIndexValue])

    
  } else {
    middleIndexValue = Math.round((array1.length - 1 ) / 2);
    middleArray.push(array1[middleIndexValue]);
  }
  return middleArray;
}


//TEST CODE
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6,7,8,9,10]));