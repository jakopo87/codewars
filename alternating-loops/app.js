/* http://www.codewars.com/kata/alternating-loops */
// function combine() {
//     var result = [],
//         i = 0,
//         item = null,
//         input = [...arguments];
//     var maxLength = input.reduce((s, a) => s + a.length, 0);
//     while (result.length < maxLength) {
//         if (typeof(item = input[i++ % input.length].shift()) !== "undefined") {
//             result.push(item);
//         }
//     }
//     return result;
// }
/* ---------------------------------------------- */
function combine() {
    var result = [],
        i = 0;
    var maxLength = [...arguments].reduce((s, a) => s + a.length, 0);
    while (result.length < maxLength) {
        if (arguments[i].length > 0) {
            result.push(arguments[i].shift());
        }
        i = (i + 1) % arguments.length;
    }
    return result;
}
/* ---------------------------------------------- */
console.log(combine(['a', 'b', 'c'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 4, 5]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]), ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);