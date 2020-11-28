/* http://www.codewars.com/kata/the-tale-of-two-zeros */
// function isNegativeZero(x) {
// 	return typeof (x) === "number" && (1 / x === -Infinity);
// }
/* -------------------------------------------------- */
function isNegativeZero(x) {
	return Object.is(-0, x);
}
/* -------------------------------------------------- */
console.log(isNegativeZero(0), false, "0 is not -0");
console.log(isNegativeZero(-0), true, "-0 is -0");
console.log(isNegativeZero('-0'), false, "the string '-0' is not - 0");