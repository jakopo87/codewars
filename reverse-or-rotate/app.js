/* http://www.codewars.com/kata/reverse-or-rotate */
// function revrot(str, sz) {
//     var result = "", max = str.length - (str.length % sz);
//     for (var i = 0; i < max; i += sz) {
//         var chunk = str.substring(i, i + sz).split("");
//         var cubeSum = chunk.map(x => Math.pow(x, 3)).reduce((s, x) => s + x);
//         if (cubeSum % 2 === 0) {
//             result += chunk.reverse().join("");
//         } else {
//             result += chunk.slice(1).join("") + chunk[0];
//         }
//     }
//     return result;
// }
/* ---------------------------------------------- */
function revrot(str, sz) {
    return (str.match(new RegExp('\\d{' + sz + '}', 'g')) || []).map(s => {
        var chunk = s.split("");
        var cubeSum = chunk.map(x => Math.pow(x, 3)).reduce((s, x) => s + x, 0);
        return cubeSum % 2 === 0 ? chunk.reverse().join("") : chunk.slice(1).join("") + chunk[0];
    }).join("");
}
/* ---------------------------------------------- */
console.log(revrot("1234", 0) === "");
console.log(revrot("", 0) === "");
console.log(revrot("1234", 5) === "");
console.log(revrot("123456987654", 6) === "234561876549");
console.log(revrot("733049910872815764", 5) === "330479108928157");
