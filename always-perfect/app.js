/* http://www.codewars.com/kata/always-perfect */
// function checkRoot(s) {
// 	if (s.match(/^\d+,\d+,\d+,\d+$/) === null) {
// 		return "incorrect input";
// 	}
// 	var square = s.split(",").reduce((p, c) => { return p * c; }) + 1;
// 	var root = Math.sqrt(square);
// 	if (root % 1 !== 0) {
// 		return "not consecutive";
// 	} else {
// 		return square + ", " + root;
// 	}
// }
/* ------------------------------------------- */
// function checkRoot(s) {
// 	if ((/^(\d+,?){4}$/).test(s) === false) {
// 		return "incorrect input";
// 	}
// 	var square = s.split(",").reduce((p, c) => { return p * c; }) + 1;
// 	var root = Math.sqrt(square);
// 	return root % 1 !== 0 ? "not consecutive" : square + ", " + root;
// 	if (root % 1 !== 0) {
// 		return "not consecutive";
// 	} else {
// 		return square + ", " + root;
// 	}
// }
/* ------------------------------------------- */
function checkRoot(s) {
	if ((/^(\d+,?){4}$/).test(s) === false) {
		return "incorrect input";
	}
	var square = s.split(",").reduce((p, c) => { return p * c; }) + 1;
	var root = Math.sqrt(square);
	return root % 1 !== 0 ? "not consecutive" : square + ", " + root;
}
/* ------------------------------------------- */
console.log(checkRoot('4,5,6,7'), '841, 29')
console.log(checkRoot('3,s,5,6'), 'incorrect input')
console.log(checkRoot('11,13,14,15'), 'not consecutive')
console.log(checkRoot('10,11,12,13,15'), 'incorrect input')
console.log(checkRoot('9,10,10,11'), 'not consecutive')