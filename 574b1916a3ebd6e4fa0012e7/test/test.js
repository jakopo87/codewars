import { assert, config } from 'chai';
config.truncateThreshold = 0;
import { describe, it } from 'mocha';
import { isOpposite } from '../app.js';

describe("isOpposite", function () {
    it("Sample Tests", function () {
        tester("ab", "AB", true);
        tester("aB", "Ab", true);
        tester("aBcd", "AbCD", true);
        tester("aBcde", "AbCD", false);
        tester("AB", "Ab", false);
        tester("Ab", "cD", false);
        tester("", "", false);
        tester("yqhhdSpovMuwv", "YQHHDsPOVmUWVh", false);
    });

    function tester(s1, s2, expected) {
        assert.strictEqual(isOpposite(s1, s2), expected, `Failed for inputs:\n- s1: "${s1}"\n- s2: "${s2}"\n`);
    };
});
