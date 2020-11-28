/* http://www.codewars.com/kata/correct-the-mistakes-of-the-character-recognition-software */
function correct(string) {
    return string.replace(/(5|0|1)/g, (match) => {
        return { "0": "O", "1": "I", "5": "S" }[match];
    });
}
/* --------------------------------------------------------------------------------------- */
console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");