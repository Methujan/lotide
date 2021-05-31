const findKey = function(objects, callback) {

  for (let key in objects) {
   
    if (callback(objects[key])) {
      return key;
    }
  }
};

module.exports = findKey;

