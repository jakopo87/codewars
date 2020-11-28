/* https://www.codewars.com/kata/the-sum-and-the-rest-of-certain-pairs-of-numbers-have-to-be-perfect-squares */
/* --------------------------------------------------------------------------------------------------------- */
function closestPairTonum(n) {
    for (var i = n - 1; i > 2; --i) {
        for (var j = i - 1; j > 0; --j) {
            var isSumSquared = Math.sqrt(i + j) % 1 === 0;
            var isDiffSquared = Math.sqrt(i - j) % 1 === 0;
            if (isSumSquared && isDiffSquared) {
                return [i, j];
            }
        }
    }
}
/* --------------------------------------------------------------------------------------------------------- */
console.time();
console.log(closestPairTonum(10), [5, 4]);
console.log(closestPairTonum(30), [29, 20]);
console.log(closestPairTonum(50), [45, 36]);
console.log(closestPairTonum(100), [97, 72]);
console.log(closestPairTonum(150), [149, 140]);
console.log(closestPairTonum(200), [197, 28]);
console.timeEnd();