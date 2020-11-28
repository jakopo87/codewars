/* http://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives */
// function countPositivesSumNegatives(input) {
//     return (input || []).length === 0 ? [] : [
//         input.filter(x => x > 0).length,
//         input.filter(x => x < 0).reduce((x, s) => x + s, 0),
//     ];
// }
/* ---------------------------------------------------------------------- */
function countPositivesSumNegatives(input) {
    return (input || []).length === 0 ? [] : input.reduce((r, x) => {
        x > 0 ? r[0]++ : r[1] += x;
        return r;
    }, [0, 0]);
}
/* ---------------------------------------------------------------------- */
var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];

console.log(actual[0] == expected[0] && actual[1] == expected[1]);

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];

console.log(actual[0] == expected[0] && actual[1] == expected[1]);