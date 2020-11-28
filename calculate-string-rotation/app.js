/* http://www.codewars.com/kata/calculate-string-rotation */
// function shiftedDiff(first, second) {
// 	var s = first;
// 	var i = 0;
// 	while (second.indexOf(s) === -1 && i < second.length) {
// 		++i;
// 		s = s.substr(-1) + s.substr(0, s.length - 1);
// 	}
// 	return i === second.length ? -1 : i;
// }
/* ------------------------------------------------------ */
function shiftedDiff(first, second) {
	var s = first, i = 0;
	while (second.indexOf(s) === -1 && ++i < second.length) {
		s = s.substr(-1) + s.substr(0, s.length - 1);
	}
	return i === second.length ? -1 : i;
}
/* ------------------------------------------------------ */
console.log(shiftedDiff("eecoff", "coffee"), 4)
console.log(shiftedDiff("Moose", "moose"), -1)
console.log(shiftedDiff("isn't", "'tisn"), 2)
console.log(shiftedDiff("Esham", "Esham"), 0)
console.log(shiftedDiff(" ", " "), 0)
console.log(shiftedDiff("hoop", "pooh"), -1)
console.log(shiftedDiff("  ", " "), -1)