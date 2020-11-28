/* http://www.codewars.com/kata/number-climber */
function climb(n) {
    var r = [n];
    while (r[0] > 1) {
        r.unshift(Math.floor(r[0] / 2));
    }
    return r;
}
/* ------------------------------------------- */
console.log(climb(1), [1]);
console.log(climb(10), [1, 2, 5, 10]);
console.log(climb(13), [1, 3, 6, 13]);