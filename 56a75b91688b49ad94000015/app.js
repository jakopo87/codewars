/* http://www.codewars.com/kata/56a75b91688b49ad94000015 */
function abundantNumber(num) {
    var result = 1;
    for (var i = 2; i <= num / 2; ++i) {
        result += num % i ? 0 : i;
    }
    return result > num;
}
/* ----------------------------------------------------- */
console.log(abundantNumber(18), true);
console.log(abundantNumber(37), false);
console.log(abundantNumber(120), true);
console.log(abundantNumber(77), false);