/* http://www.codewars.com/kata/wheres-wally */
function wheresWally(string) {
    var rg = /(?:\s|^)(Wally)(\b)/g;
    var result = rg.exec(string);
    return result !== null ? result.index + (result[0].startsWith(" ") ? 1 : 0) : -1;
}
/* ----------------------------------------- */
console.log(wheresWally(""), -1)
console.log(wheresWally("DWally"), -1)
console.log(wheresWally(".Wally"), -1)
console.log(wheresWally("Wally"), 0)
console.log(wheresWally("Where's Wally"), 8)
console.log(wheresWally("Hi Wally."), 3)
console.log(wheresWally("Wallyd"), -1)
console.log(wheresWally("Walley ,Wally -Wally ;Wally +Wally :Wally"), -1)
console.log(wheresWally("12Wally Wally01 W.ally"), -1)
console.log(wheresWally("'Wally Wally"), 7)