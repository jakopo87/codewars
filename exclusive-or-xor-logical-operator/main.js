/* https://www.codewars.com/kata/exclusive-or-xor-logical-operator */
const xor = (a, b) => a !== b;
/* --------------------------------------------------------------- */
console.log(xor(false, false), false);
console.log(xor(true, false), true);
console.log(xor(false, true), true);
console.log(xor(true, true), false);
