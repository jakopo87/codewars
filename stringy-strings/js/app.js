/* http://www.codewars.com/kata/stringy-strings */
// HACK: invisible breakpoint on this line
// function stringy(size) {
// 	var s = "";
// 	for (var i = 0; i < size; ++i) {
// 		s += i % 2 ^ 1;
// 	}
// 	return s;
// }
/* -------------------------------------------- */
function stringy(size) {
	return Array.from(Array(size)).map((x, i) => i % 2 ^ 1).join("")
}
/* -------------------------------------------- */
console.log(typeof stringy(3), 'string');

console.log(stringy(3)[0], '1');

for (var i = 0; i < 10; ++i) {
	var parameter = (Math.random() * 50 + 1) | 0;
	console.log(stringy(parameter).length, parameter);
}

for (var i = 0; i < 10; ++i) {
	var parameter = (Math.random() * 50 + 1) | 0;
	console.log(stringy(parameter));
}