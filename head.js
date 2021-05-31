const assertEqual = require('./assertEqual')

const head = function(array) {
  if (array === null) {
    return undefined; // If the array is null, then return undefined

  } else {
    //console.log(array[0]); // Print the first element in the array
    return array[0]; // Return the first element in the array
  }
};

module.exports = head;
