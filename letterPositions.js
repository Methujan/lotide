//eqArrays
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

//assertArraysEqual
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

//letterPositions
const letterPositions = function(sentence) {
  const results = {};
  for(letters of sentence){
    results[letters] = [];
  }
  for(let x in results){
  for(let i = 0; i < sentence.length; i++){
  
      if(x === sentence[i]){
        results[x].push(i) ;
      }
  }
}
return results;
}
console.log(letterPositions('hello'))

assertArraysEqual(letterPositions("hello").e, [1]);

