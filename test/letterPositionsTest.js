const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns [1] for \'hello\'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

});