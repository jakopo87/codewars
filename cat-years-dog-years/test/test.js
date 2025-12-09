import Test from '@codewars/test-compat';
import { describe, it } from 'mocha';

import { humanYearsCatYearsDogYears } from '../app.js';

describe("Example Tests", function () {

    it("one", function () {
        Test.assertSimilar(humanYearsCatYearsDogYears(1), [1, 15, 15]);
    });

    it("two", function () {
        Test.assertSimilar(humanYearsCatYearsDogYears(2), [2, 24, 24]);
    });

    it("ten", function () {
        Test.assertSimilar(humanYearsCatYearsDogYears(10), [10, 56, 64]);
    });

});

