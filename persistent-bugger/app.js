// function persistence(num) {
// 	var i = 0;
// 	while (num > 9) {
// 		num = num.toString().split('').reduce(function (p, x) {
// 			return p * x;
// 		}, 1);
// 		++i;
// 	}
// 	return i;
// }
/* ----- */
// function persistence(num) {
// 	var i = 0;
// 	if (num > 9) {
// 		num = num.toString().split('').reduce(function (p, x) {
// 			return p * x;
// 		}, 1);
// 		i = 1 + persistence(num);
// 	}
// 	return i;
// }
/* ----- */
function persistence(num) {
	return num > 9 ? 1 + persistence(num.toString().split('').reduce(function (p, x) { return p * x }, 1)) : 0;
}
console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);