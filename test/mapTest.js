const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("returns [ \'g\', \'c\', \'t\', \'m\', \'t\' ] for [ \'ground\', \'control\', \'to\', \'major\', \'tom\' ]", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

});