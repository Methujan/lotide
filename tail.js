const tail = function(array) {
  if (array === null) {
    return undefined;

  } else {
    let tailedArray = array.slice(1);// returns a portion of the array starting from the index in the brackets to the end
    return tailedArray;
  }
};


module.exports = tail;