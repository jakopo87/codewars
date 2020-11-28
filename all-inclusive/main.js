/**
 * https://www.codewars.com/kata/all-inclusive
 * @param {string} strng 
 * @param {array} arr 
 */
const containAllRots = (strng, arr) => {
    return [...strng].every((_, i) => arr.includes(strng.slice(i) + strng.slice(0, i)));
}
/* ------------------------------------------- */
console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)