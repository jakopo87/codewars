/* https://www.codewars.com/kata/integer-difference */
const intDiff = (arr, n) => {
    var count = 0;
    for (var i = 0, l = arr.length; i < l; ++i) {
        for (var j = i + 1; j < l; ++j){
            count += Math.abs(arr[i] - arr[j]) === n ? 1 : 0;
        }
    }
    return count;
}
/* ------------------------------------------------ */
module.exports = intDiff;