const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  it("return for ", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

});