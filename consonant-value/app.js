/* http://www.codewars.com/kata/consonant-value */
function solve(s) {
    let result = 0;
    let matches = s.match(/([^aeiou]+)/g);
    let offset = "a".charCodeAt(0) - 1;

    for (const match of matches) {
        let tmp = match.split("").reduce((s, x) => s + x.charCodeAt(0) - offset, 0);
        result = Math.max(result, tmp);
    }

    return result;
};
/* -------------------------------------------- */
console.log(solve("zodiac"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);