const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array === null) {
    return undefined;

  } else {
    let tailedArray = array.slice(1);// returns a portion of the array starting from the index in the brackets to the end
    return tailedArray;
  }
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // Prints the everything except the first element: Prints ["Lighthouse", "Labs"]
assertEqual(words.length, 3); // original array should still have 3 elements!