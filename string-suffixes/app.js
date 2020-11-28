/* http://www.codewars.com/kata/string-suffixes */

// function stringSuffix(s) {
// 	var result = 0;
// 	for (var i = 0; i < s.length; ++i) {
// 		var ss = s.substring(i), j = 0;
// 		while (s[j] === ss[j] && j++ < ss.length) {
// 			result++;
// 		}
// 	}
// 	return result;
// }

function stringSuffix(s) {
	return s.split("").reduce(function (sum, v, i) {
		var match = true;
		return sum + s.substring(i).split("").reduce(function (sum, v, i) {
			return sum + ((match = match && s[i] === v) ? 1 : 0);
		}, 0);
	}, 0);
}


console.log(stringSuffix('ababaa'), 11);
console.log(stringSuffix('abc'), 3);