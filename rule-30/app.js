/* http://www.codewars.com/kata/rule-30 */
// function rule30(list, n) {
//     var curList = list.join("").replace(/[^10]/g, 0),
//         dict = {
//             "001": "1",
//             "010": "1",
//             "011": "1",
//             "100": "1",
//             "000": "0",
//             "101": "0",
//             "110": "0",
//             "111": "0"
//         },
//         nextList;
//     for (var m = 0; m < n; ++m) {
//         curList = `0${curList}0`, nextList = "";
//         for (var i = 0; i < curList.length; ++i) {
//             var item = (curList.charAt(i - 1) || "0") + curList.charAt(i) + (curList.charAt(i + 1) || "0");
//             nextList += dict[item];
//         }
//         curList = nextList;
//     }
//     return curList.split("").map(Number);
// }
/* ------------------------------------ */
function rule30(list, n) {
    var curList = list.join("").replace(/[^10]/g, 0),
        dict = {
            "001": "1",
            "010": "1",
            "011": "1",
            "100": "1",
            "000": "0",
            "101": "0",
            "110": "0",
            "111": "0"
        },
        nextList;
    for (var m = 0; m < n; ++m) {
        curList = `00${curList}00`, nextList = "";
        for (var i = 1; i < curList.length - 1; ++i) {
            nextList += dict[curList.substr(i - 1, 3)];
        }
        curList = nextList;
    }
    return curList.split("").map(Number);
}
/* ------------------------------------ */
console.log(rule30([0], 5), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(rule30([1], 5), [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1]);
console.log(rule30([1], 1), [1, 1, 1]);
console.log(rule30([1], 2), [1, 1, 0, 0, 1]);