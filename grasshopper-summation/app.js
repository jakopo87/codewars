/* https://www.codewars.com/kata/grasshopper-summation?utm_source=newsletter */
const summation = (count) => Array.apply(0, Array(count)).map((e, i) => i + 1).reduce((s, x) => s + x, 0);
/* ------------------------------------------------------------------------- */
console.log(summation(1), 1);
console.log(summation(8), 36);
