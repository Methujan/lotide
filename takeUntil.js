const takeUntil = function(array, callback) {
  results = [];
  for(const element of array){
    if(callback(element)){
      return results;
    } else{
      results.push(element)
    }
  }
  return results;
}
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);