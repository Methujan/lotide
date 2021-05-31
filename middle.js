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

module.exports = middle;