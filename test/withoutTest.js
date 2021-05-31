const without = require('../without');
const assert = require('chai').assert;


describe("#without", () => {

  it("returns [ \'1\', \'2\', \'3\', \'4\', \'5\', \'7\',\'8\'] for [[ \'1\', \'2\', \'3\', \'4\', \'5\', \'6\', \'7\',\'8\'],[\'6\']]", () => {
    assert.deepEqual(without([1,2,3,4,5,6,7,8],[6]), [ 1, 2, 3, 4, 5, 7, 8 ]);
  });

});

