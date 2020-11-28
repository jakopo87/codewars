/* http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits */

function digitize(n) {
	return n.toString().split('').map(function (x) {
		return parseInt(x);
	}).reverse();
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);