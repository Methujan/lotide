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


module.exports = eqArrays;