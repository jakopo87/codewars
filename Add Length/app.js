/* http://www.codewars.com/kata/add-length */

function addLength(str) {
	return str.split(" ").map(function (s) { return s + " " + s.length });
}

console.log(addLength('apple ban'), ["apple 5", "ban 3"]);
console.log(addLength('you will win'), ["you 3", "will 4", "win 3"]);