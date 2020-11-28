
var assert = require('assert');
var intDiff = require("../app");
describe("Solution", function () {
    it("should work for basic tests", function () {
        assert.equal(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
        assert.equal(intDiff([1, 1, 3, 3], 2), 4);
    });
});