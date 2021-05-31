const countLetters = require("../countLetters")
const assert = require('chai').assert;


describe("#countLetters", () => {
  it("returns 1 for [\"l\"]", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["l"], 1);
  });

  it("returns 2 for [\"i\"]", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["i"], 2);
  });

  it("returns 3 for [\"e\"]", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["e"], 3);
  });




});
