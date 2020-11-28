/* http://www.codewars.com/kata/playing-on-a-chessboard */
function game(n) {
    return n % 2 === 0 ? [n * n / 2] : [n * n, 2];
}
/* ---------------------------------------------------- */
console.log(game(0), [0]);
console.log(game(1), [1, 2]);
console.log(game(8), [32]);