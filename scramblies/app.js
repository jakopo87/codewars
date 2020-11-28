/* http://www.codewars.com/kata/scramblies */
function scramble(str1, str2) {
    var a1 = str1.split("").sort();
    var a2 = str2.split("").sort();

    for (var i1 = 0, i2 = 0; i1 < a1.length && i2 < a2.length; ++i1) {
        i2 += a1[i1] === a2[i2] ? 1 : 0;
    }

    return i2 >= a2.length;
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);