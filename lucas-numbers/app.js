/* http://www.codewars.com/kata/lucas-numbers */
/**
 * L(1) = 1
 * L(2) = 0
 * L(n) = L(n-1) + L(n-2);
 */

function lucasnum(n) {
	var delimiter = " ";
	var problems = [(n - 1) + delimiter + (n - 2)];
	var partials = [2, 1, 0];

	return partials[n - 1] + partials[n - 2];
}
/* ----- */
console.log(lucasnum(-10), 123)
console.log(lucasnum(10), 123)
console.log(lucasnum(-1), -1)
console.log(lucasnum(5), 11)
console.log(lucasnum(-5), -11)
console.log(lucasnum(0), 2)
console.log(lucasnum(1), 1)