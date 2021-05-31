const without = function(source, itemsToRemove){
  let newArray = source; // Declaring a variable for the source array
  for (let i = 0; i <= source.length; i++) { // Going through elements for the length of source
    for (let x of itemsToRemove){ // Going through the elements in itemsToRemove
      if(source[i] === x){ // If an element in source and itemsToRemove have the same equal value
        let removedItem = newArray.indexOf(x); // let removedItem be the index of x in the newArray
        //console.log(removedItem);
        newArray.splice(removedItem,1); // remove the value at index x 
      }
    }
  } 
  return newArray;
}
module.exports = without;
