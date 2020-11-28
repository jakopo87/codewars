/* http://www.codewars.com/kata/no-zeros-for-heros */
function noBoringZeros(n) {
    return n.toString().replace(/(0+)?$/, "") || 0;
}
/* ----------------------------------------------- */

function testing(actual, expected) {
    console.log(actual, expected);
}

testing(noBoringZeros(1450), 145);
testing(noBoringZeros(960000), 96);
testing(noBoringZeros(1050), 105);
testing(noBoringZeros(-1050), -105);
testing(noBoringZeros(-105), -105);
testing(noBoringZeros(0), 0);
