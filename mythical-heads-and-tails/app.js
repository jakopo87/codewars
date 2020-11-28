/* https://www.codewars.com/kata/mythical-heads-and-tails */
function beasts(heads, tails) {
    console.log(heads, tails);

    var hydra = tails, orthus = 0;

    if (heads < tails * 2 || hydra * 5 < heads) {
        return "No solutions";
    }

    while (hydra * 5 + orthus * 2 > heads) {
        hydra--;
        orthus++;
    }
    return orthus * 2 + hydra * 5 === heads ? [orthus, hydra] : "No solutions";
}
/* ------------------------------------------------------ */
console.log(beasts(123, 39), [24, 15])
console.log(beasts(371, 88), [23, 65])
console.log(beasts(24, 12), [12, 0])
console.log(beasts(113, 37), [24, 13])
console.log(beasts(635, 181), [90, 91])
console.log(beasts(25, 555), "No solutions")
console.log(beasts(12, 25), "No solutions")
console.log(beasts(54, 956), "No solutions")
console.log(beasts(99, 0), "No solutions")
console.log(beasts(0, 0), [0, 0])
console.log(beasts(56, 3), "No solutions")