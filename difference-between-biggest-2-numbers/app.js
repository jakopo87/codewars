/* http://www.codewars.com/kata/difference-between-biggest-2-numbers */
function diffBig2(arr) {
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1)
    var max2 = Math.max.apply(null, arr);
    return Math.abs(max - max2);
}
/* ----------------------------------------------------------------- */
function diffBig2(arr) {
    var max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1)
    return max - Math.max(...arr);
}
/* ----------------------------------------------------------------- */
console.log(diffBig2([2, 1]), 1);
console.log(diffBig2([8, 3, 1]), 5);
console.log(diffBig2([1, 8, 3]), 5);