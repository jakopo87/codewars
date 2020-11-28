/* http://www.codewars.com/kata/all-star-code-challenge-number-18 */
function strCount(str, letter) {
    return [...str].reduce((s, x) => x === letter ? s + 1 : s, 0);
}
/* -------------------------------------------------------------- */
console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);