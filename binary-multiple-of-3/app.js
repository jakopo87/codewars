/* http://www.codewars.com/kata/binary-multiple-of-3 */
var multipleOf3Regex = /.../;
/* ------------------------------------------------- */
console.log(multipleOf3Regex.test(" 0"), false);
console.log(multipleOf3Regex.test("abc"), false);
console.log(multipleOf3Regex.test("000"), true);
console.log(multipleOf3Regex.test("110"), true);
console.log(multipleOf3Regex.test("111"), false);
console.log(multipleOf3Regex.test((12345678).toString(2)), true);