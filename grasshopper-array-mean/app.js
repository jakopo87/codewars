/* http://www.codewars.com/kata/grasshopper-array-mean */
var findAverage = function (nums) {
	return nums.reduce(function (s, x) { return s + x; }) / nums.length;
}
/* ----- */
console.log(findAverage([1]), 1)
console.log(findAverage([1, 3, 5, 7]), 4)