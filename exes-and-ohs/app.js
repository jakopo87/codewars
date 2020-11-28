/* http://www.codewars.com/kata/exes-and-ohs */
// function XO(str) {
//     return str.toLowerCase().replace(/[^xo]/g, "").split("").reduce((sum, c) => {
//         return sum + (c === "x" ? 1 : -1);
//     }, 0) === 0;
// }
/* ----------------------------------------- */
function XO(str) {
    return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
}
/* ----------------------------------------- */
console.log(XO("abcdefghijklmnopqrstuvwxyz"), true);
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);