/* http://www.codewars.com/kata/find-the-parity-outlier */
// function findOutlier(integers) {
// 	var odd = [], even = [];
// 	integers.forEach(function (element) {
// 		Math.abs(element % 2) === 1 ? odd.push(element) : even.push(element);
// 	});
// 	return odd.length === 1 ? odd[0] : even[0];
// }
/* ---------------------------------------------------- */
// function findOutlier(integers) {
// 	var odd, even, oc = 0, ec = 0, i = 0;
// 	do {
// 		var n = integers[i];
// 		if (Math.abs(n % 2) === 1) {
// 			odd = n;
// 			oc++;
// 		} else {
// 			even = n;
// 			ec++;
// 		}
// 	} while (++i < 3 || ec * oc === 0);
// 	return oc > ec ? even : odd;
// }
/* ---------------------------------------------------- */
// function findOutlier(integers) {
// 	for (var i = 0; ; ++i) {
// 		var a = Math.abs(integers[i] % 2);
// 		var b = Math.abs(integers[i + 1] % 2);
// 		var c = Math.abs(integers[i + 2] % 2);
// 		if (a !== b && b === c) {
// 			return integers[i];
// 		} else if (a !== b && b !== c) {
// 			return integers[i + 1];
// 		} else if (a === b && b !== c) {
// 			return integers[i + 2];
// 		}
// 	}
// }
/* ---------------------------------------------------- */
function findOutlier(integers) {
	for (var i = 0; i < integers.length - 2; ++i) {
		var n = parseInt((integers[i] & 1).toString() + (integers[i + 1] & 1).toString() + (integers[i + 2] & 1).toString(), 2);
		var offset = n === 3 || n === 4 ? 0 : (n === 2 || n === 5 ? 1 : (n === 1 || n === 6 ? 2 : null));
		if (offset !== null) {
			return integers[i + offset];
		}

	}
}
/* ---------------------------------------------------- */
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)
console.log(findOutlier([2, 2, 0, 2, 2, -3]), -3)