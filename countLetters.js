const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {}

  for(const letter of sentence){

    if(letter !== ' '){ // if it is not a space
      if(results[letter]){ // if there is a letter
        results[letter] += 1; // adds on to the count if it exists
      } else {
        results[letter] = 1; //makes a new count
      }
    }

  } return results
}



const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["h"], 4);




