/* http://www.codewars.com/kata/group-repeating-fractions */
function repeatingFractions(numerator, denominator) {
	var f = (numerator / denominator).toString().split(".");
	if (f.length === 2) {
		f[1] = f[1].replace(/(\d)\1+/g, "($1)");
	}
	return f.join(".");
}
/* ------------------------------------------------------ */
console.log(repeatingFractions(1, 1), '1');
console.log(repeatingFractions(1, 2), '0.5');
console.log(repeatingFractions(1, 3), '0.(3)');
console.log(repeatingFractions(2, 888), '0.(0)(2)5(2)5(2)5(2)5(2)5(2)');
console.log(repeatingFractions(1554, 70), '22.2');
