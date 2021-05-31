

//letterPositions
const letterPositions = function(sentence) {
  const results = {};
  for(letters of sentence){
    results[letters] = [];
    //console.log(results[letters]);
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

module.exports = letterPositions;


//assertArraysEqual(letterPositions("hello").e, [1]);
//
