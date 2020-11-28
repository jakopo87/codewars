/* http://www.codewars.com/kata/word-patterns */
function wordPattern(pattern, str) {
	var words = str.split(" ");
	var result = true;
	var dictionary = {}, revDictionary = {};
	for (var i = 0; i < pattern.length; i++) {
		var p = pattern[i];
		if (typeof (dictionary[p]) === "undefined" && typeof (revDictionary[words[i]]) === "undefined") {
			dictionary[p] = words[i];
			revDictionary[words[i]] = p;
		} else {
			result = dictionary[p] === words[i];
			if (result === false) {
				break;
			}
		}
	}
	return result;
}
/* ------------------------------------------ */
console.log(wordPattern('abab', 'apple banana apple banana'), true);
console.log(wordPattern('abba', 'car truck truck car'), true);
console.log(wordPattern('abab', 'apple banana banana apple'), false);
console.log(wordPattern('aaaa', 'cat cat cat cat'), true);
console.log(wordPattern('aaaa', 'cat cat dog cat'), false);
console.log(wordPattern('bbbabcb', 'c# c# c# javascript c# python c#'), true);
console.log(wordPattern('abba', 'dog dog dog dog'), false);
console.log(wordPattern('abcd', 'eat cat eat repeat'), false);