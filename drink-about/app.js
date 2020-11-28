/* http://www.codewars.com/kata/drink-about */
var peopleWithAgeDrink = function (old) {
	var result = "drink ";
	if (old < 14) {
		result += "toddy";
	} else if (old < 18) {
		result += "coke";
	} else if (old < 21) {
		result += "beer";
	} else {
		result += "whisky";
	}
	return result;
};
/* ---------------------------------------- */
console.log(peopleWithAgeDrink(22), 'drink whisky');