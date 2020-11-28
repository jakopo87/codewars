/* http://www.codewars.com/kata/localize-the-barycenter-of-a-triangle */
// function barTriang(p1, p2, p3) {
// 	var result = [];
// 	for (var i = 0; i < 2; ++i) {
// 		result[i] = Math.round((p1[i] + p2[i] + p3[i]) / 3 * 10000) / 10000;
// 	}
// 	return result;
// }
/* ------------------------------------------------------------------ */
// function barTriang(p1, p2, p3) {
// 	var result = [];
// 	for (var i = 0; i < 2; ++i) {
// 		result[i] = parseFloat(((p1[i] + p2[i] + p3[i]) / 3).toFixed(4));
// 	}
// 	return result;
// }
/* ------------------------------------------------------------------ */
function barTriang(p1, p2, p3) {
	var result = [];
	for (var i = 0; i < 2; ++i) {
		result[i] = 1 * (((p1[i] + p2[i] + p3[i]) / 3).toFixed(4));
	}
	return result;
}
/* ------------------------------------------------------------------ */
console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
console.log(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
console.log(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
console.log(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);