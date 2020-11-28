'use strict';
/* http://www.codewars.com/kata/strive-matching-number-1 */
function match(candidate, job) {
    if (typeof (candidate.minSalary) === "undefined" || typeof (job.maxSalary) === "undefined") {
        throw new Error();
    }
    return candidate.minSalary / 100 * 90 <= job.maxSalary;
}
/* ----------------------------------------------------- */
let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1), true);
console.log(match(candidate1, job2), false);