/* https://www.codewars.com/kata/matrices-i-making-an-alternating-sum/train/javascript */
// function scoreMatrix(matrix) {
//     var score = 0;
//     for (var i = 0, m = matrix.length; i < m; ++i) {
//         for (var j = 0, n = matrix[i].length; j < n; ++j) {
//             score += matrix[i][j] * Math.pow(-1, i + j);
//         }
//     }
//     return score;
// }
/* ----------------------------------------------------------------------------------- */
function scoreMatrix(matrix) {
    return matrix.reduce((row, r, i) => {
        return row + r.reduce((col, c, j) => {
            return col + c * Math.pow(-1, i + j);
        }, 0);
    }, 0);
}
console.time("test");
console.log(scoreMatrix([[1, 2, 3], [-3, -2, 1], [3, -1, 2]]), 8)
console.log(scoreMatrix([[1, 2, 3, 4], [-3, -2, 1, 1], [3, 8, -1, 2], [20, 5, 10, -4], [10, -8, -8, 4]]), -32)
console.log(scoreMatrix([[2, 3, 2, 3], [2, 3, 2, 3], [2, 3, 2, 3]]), -2)
console.timeEnd("test");