/* http://www.codewars.com/kata/tax-calculator */
// function taxCalculator(total) {
// 	var result = 0, x;
// 	/* 31+ */
// 	if (total > 30) {
// 		x = total - 30;
// 		result += x * 3;
// 		total -= x;
// 	}
// 	/* 21-30 */
// 	if (total > 20) {
// 		x = total - 20;
// 		result += x * 5;
// 		total -= x;
// 	}
// 	/* 11-20*/
// 	if (total > 10) {
// 		x = total - 10;
// 		result += x * 7;
// 		total -= x;
// 	}
// 	/* 0-10 */
// 	if (total >= 0) {
// 		x = total;
// 		result += x * 10;
// 	}
// 	return Math.floor(result) / 100;
// }
/* ------------------------------------------- */
// function taxCalculator(total) {
// 	var result = 0, rates = [10, 7, 5, 3];
// 	for (var i = 3, x; i >= 0; --i) {
// 		if (total > 10 * i) {
// 			x = total - 10 * i;
// 			total -= x;
// 			result += x * rates[i];
// 		}
// 	}
// 	return Math.floor(result) / 100;
// }
/* ------------------------------------------- */
// function taxCalculator(total) {
// 	var result = 0, rates = [10, 7, 5, 3];
// 	for (var i = 3, x; i >= 0; --i) {
// 		x = total - 10 * i;
// 		if (x > 0) {
// 			total -= x;
// 			result += x * rates[i];
// 		}
// 	}
// 	return Math.floor(result) / 100;
// }
/* ------------------------------------------- */
function taxCalculator(total) {
	return [3, 5, 7, 10].reduce(function (sum, r, i, rates) {
		var x = Math.max(total - 10 * (rates.length - i - 1), 0);
		total -= x;
		return sum + Math.floor(x * r) / 100;
	}, 0) || 0;
}
/* ------------------------------------------- */
console.log(taxCalculator(10), 1);
console.log(taxCalculator(15), 1.35);
console.log(taxCalculator(25), 1.95);
console.log(taxCalculator(35), 2.35);
console.log(taxCalculator(30.49), 2.21);
console.log(taxCalculator("monkey"), 0);