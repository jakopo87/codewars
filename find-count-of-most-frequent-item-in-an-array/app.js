/* http://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array */
//HACK: debugger stops on this line
function mostFrequentItemCount(collection) {
	var r = {}, max = 0;
	collection.forEach(function (x) {
		r[x] = (r[x] || 0) + 1;
	});
	for (var n in r) {
		max = Math.max(max, r[n]);
	}
	return max;
}
/* ------------------------------------------------------------------------- */
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);