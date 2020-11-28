/* http://www.codewars.com/kata/filter-the-number*/

// var FilterString = function (value) {
// 	return value.match(/\d+/g).join('') * 1;
// }
/* ----- */

var FilterString = function (value) {
	return value.replace(/\D/g, '');
}

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');