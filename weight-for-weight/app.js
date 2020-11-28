// function orderWeight(strng) {
//     var weights = strng.split(" ");
// 	var calc = [];
// 	weights.forEach(function (w) {
// 		var n = w.split("").reduce(function (s, x) { return s + x * 1 }, 0);
// 		calc.push({ s: w, n: n });
// 	});
// 	return calc.sort(function (a, b) {
// 		if (a.n < b.n) {
// 			return -1;
// 		} else if (b.n < a.n) {
// 			return 1;
// 		} else {
// 			return a.s < b.s ? -1 : 1;
// 		}
// 	}).reduce(function (s, x) {
// 		return s + " " + x.s;
// 	}, "").trim();
// }
/* ----- */
// function orderWeight(strng) {
//   return strng.split(" ").sort(function (a, b) {
//     function weight(w) { return w.split("").reduce(function (s, x) { return s + x * 1 }, 0); }
//     var wa = weight(a);
//     var wb = weight(b);
//     if (wa < wb) {
//       return -1;
//     } else if (wa > wb) {
//       return 1;
//     } else {
//       return a < b ? -1 : 1;
//     };
//   }).join(" ");
// }
/* ----- */
// function orderWeight(strng) {
// 	return strng.split(" ").sort(function (a, b) {
// 		function weight(w) { return w.split("").reduce(function (s, x) { return s + x * 1 }, 0); }
// 		var wa = weight(a);
// 		var wb = weight(b);
// 		if (wa < wb || (wa === wb && a < b)) {
// 			return -1;
// 		} else if (wa > wb || (wa === wb && a > b)) {
// 			return 1;
// 		}
// 	}).join(" ");
// }
/* ----- */
function orderWeight(strng) {
	return strng.split(" ").sort(function (a, b) {
		function weight(w) { return w.split("").reduce(function (s, x) { return s + x * 1 }, 0); }
		var wa = weight(a), wb = weight(b);
		return wa === wb ? (a < b ? -1 : 1) : wa - wb;
	}).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");