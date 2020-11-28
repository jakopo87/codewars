/* http://www.codewars.com/kata/adding-values-of-arrays-in-a-shifted-way */
function addingShifted(arrayOfArrays, shift) {
    var result = [];
    for (var i = 0; i < arrayOfArrays.length; ++i) {
        var b = arrayOfArrays[i];
        for (var j = 0; j < b.length; ++j) {
            var index = shift * i + j;
            result[index] = (result[index] || 0) + b[j];
        }
    }
    return result;
}
/* --------------------------------------------------------------------- */
console.time();
var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
var expected = [8, 9, 10, 11, 12, -1];
var result = addingShifted(arrayOfArrays, 0);

console.log(result, expected);

arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7]];
expected = [1, 2, 3, 11, 12, 13, 7, 7, 7];
result = addingShifted(arrayOfArrays, 3);

console.log(result, expected);

arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7], [1, 1, 1, 1, 1, 1]];
expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
result = addingShifted(arrayOfArrays, 3);

console.log(result, expected);
console.timeEnd();