/* http://www.codewars.com/kata/scaling-squared-strings */
// function scale(s, k, n) {
//     var result = "";
//     if (s === "") {
//         return "";
//     }
//     s.split("\n").forEach(function (l) {
//         var row = "";
//         l.split("").forEach(function (c) {
//             row += c.repeat(k);
//         });
//         for (var i = 0; i < n; ++i) {
//             result += row + "\n";
//         }
//     });
//     return result.slice(0, -1);
// }
/* ---------------------------------------------------- */
function scale(s, k, n) {
    return s
        .replace(/./g, c => c.repeat(k))
        .replace(/\w+(\n)?/g, l => (l + (l.endsWith("\n") ? "" : "\n")).repeat(n))
        .trim();
}
/* ---------------------------------------------------- */
var a = "abcd\nefgh\nijkl\nmnop";
var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3), r);
console.log(scale("", 5, 5), "");
console.log(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH");