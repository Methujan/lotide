
const findKeyByValue = function(objects, searchKey){
  console.log(Object.keys(objects))
for(const key of Object.keys(objects)){

  if(objects[key] === searchKey){
    return key;
  }
 }
};

module.exports = findKeyByValue;

//TEST CODE
//const bestTVShowsByGenre = { 
  //sci_fi: "The Expanse",
  //comedy: "Brooklyn Nine-Nine",
  //drama:  "The Wire"
//};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
