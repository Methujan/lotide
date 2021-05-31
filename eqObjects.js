
const eqArrays = require('./eqArrays')

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 

    for (let i of Object.keys(object1)){
      if(Array.isArray(object1[i] && Array.isArray(object2[i]))){
        if(!eqArrays(object1[i], object2[i])){
          return false;
        }
      }
      if(object1[i] instanceof Object && object2[i] instanceof Object){
        if(!eqObjects(object1[i], object2[i])){
         return false;
        }
      }
      else {
        if (object1[i] !== object2[i]) { // compares the objects key values against each other
          return false;
        }
    }
    
} return true
};

module.exports = eqObjects;

