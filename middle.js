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
  let middleArray = []; //Empty array
  let middleIndexValue = 0; // Assigning a value to the variable
  if(array1.length === 1 || array1.length === 2) {
    return middleArray //Return rempty array if the array's length is 1 or 2

  } else if(array1.length % 2 === 0) { // If the array length is even
    middleIndexValue = Math.round((array1.length - 1) / 2); //Find the middle index value
    middleArray.push(array1[middleIndexValue-1], array1[middleIndexValue]) // Push the values at the middle index before and at the middle

    
  } else {
    middleIndexValue = Math.round((array1.length - 1 ) / 2);
    middleArray.push(array1[middleIndexValue]); // Push the value at the middle index
  }
  return middleArray;
}


//TEST CODE
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6,7,8,9,10]));