/* http://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5 */
function findSum(n) {
    var t = 0;
    for (var i = 1; i <= n; ++i) {
        t += (i % 3 === 0) || (i % 5 === 0) ? i : 0;
    }
    return t;
}
/* --------------------------------------------------------------- */
console.log(findSum(5), 8);
console.log(findSum(10), 33);
console.log(findSum(100), 2418);