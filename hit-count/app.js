/* http://www.codewars.com/kata/hit-count */
// function counterEffect(hitCount) {
//     return hitCount
//         .split("")
//         .map(c => [...Array(c * 1 + 1).keys()]);
// }
/* -------------------------------------- */
function counterEffect(hitCount) {
    return [...hitCount].map(c => [...Array(+c + 1).keys()]);
}
/* -------------------------------------- */
console.log(counterEffect("1250"), [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0050"), [[0], [0], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0000"), [[0], [0], [0], [0]]);