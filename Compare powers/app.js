/* http://www.codewars.com/kata/compare-powers */

function comparePowers(n1, n2) {
	var maxPow = Math.pow(2, 99);
	console.log(maxPow);
	var p1 = Math.pow(n1[0], n1[1]);
	var p2 = Math.pow(n2[0], n2[1]);

	var result = 0;
	if (p1 > p2) {
		result = -1;
	} else if (p1 < p2) {
		result = 1;
	}

	return result;
}

console.log(comparePowers([2, 10], [2, 15]), 1);
console.log(comparePowers([2, 10], [3, 10]), 1);
console.log(comparePowers([2, 10], [2, 10]), 0);
console.log(comparePowers([3, 9], [5, 6]), -1);
console.log(comparePowers([7, 7], [5, 8]), -1);
console.log(comparePowers([1974121, 277928], [6539212, 5280725]), -1);