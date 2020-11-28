/* http://www.codewars.com/kata/objectify-all-the-strings */
String.prototype.hashify = function () {
	var hash = {};
	for (var i = 0; i < this.length; ++i) {
		var next = this[i + 1] || this[0];
		switch (typeof (hash[this[i]])) {
			case "undefined":
				hash[this[i]] = next;
				break;
			case "object":
				hash[this[i]].push(next);
				break;
			default:
				hash[this[i]] = [hash[this[i]], next];
				break;
		}
	}
	return hash;
}
/* ------------------------------------------------------ */
// console.log('123456'.hashify());
// console.log('Codewars'.hashify());
// console.log('this is a string'.hashify());
console.log('racecar'.hashify());