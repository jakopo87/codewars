/* http://www.codewars.com/kata/is-valid-identifier */
function isValid(idn) {
	var r = /^[A-Za-z_$]([A-Za-z_\d$]+)?$/;
	return r.test(idn);
}
/* ------------------------------------------------ */
console.log(isValid("okay_ok1"), true, "Wrong result for 'okay_ok1'");
console.log(isValid("$ok"), true, "Wrong result for '$ok'");
console.log(isValid("___"), true, "Wrong result for '___'");
console.log(isValid("str_STR"), true, "Wrong result for 'str_STR'");
console.log(isValid("myIdentf"), true, "Wrong result for 'myIdentf'");
console.log(isValid("1ok0okay"), false, "Wrong result for '1ok0okay'");
console.log(isValid("!Ok"), false, "Wrong result for '!Ok'");
console.log(isValid(""), false, "Wrong result for an empty string");
console.log(isValid("str-str"), false, "Wrong result for 'str-str'");
console.log(isValid("no no"), false, "Wrong result for 'no no'");
console.log(isValid("w"), true);
console.log(isValid("ba$"), true);