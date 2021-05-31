const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
});