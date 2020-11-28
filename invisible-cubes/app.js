/* http://www.codewars.com/kata/invisible-cubes */
function notVisibleCubes(n) {
	return Math.max(Math.pow(n - 2, 3), 0);
}
/* -------------------------------------------- */
console.log(notVisibleCubes(3), 1);
console.log(notVisibleCubes(5), 27);
console.log(notVisibleCubes(1), 0);