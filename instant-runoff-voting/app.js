/* http://www.codewars.com/kata/instant-runoff-voting */
function runoff(voters) {
	var ranks, winner, last, first, limit;
	do {
		// ranks = {};
		winner = [];
		last = 0;
		first = Infinity;
		limit = Math.ceil(voters.length * voters[0].length / 2);
		ranks = {};
		voters.forEach(function (prefs) {
			prefs.forEach(function (n, i) {
				ranks[n] = (ranks[n] || 0) + i;
			});
		}, ranks);
		for (var n in ranks) {
			first = Math.min(first, ranks[n]);
			last = Math.max(last, ranks[n]);
		}
		for (var n in ranks) {

		}
	} while (winner === undefined);
	return winner;
}
/* -------------------------------------------------- */
var voters = [
	["dem", "ind", "rep"],
	["rep", "ind", "dem"],
	["ind", "dem", "rep"],
	["ind", "rep", "dem"]
];
console.log(runoff(voters), "ind");
voters = [
	["a", "c", "d", "e", "b"],
	["e", "b", "d", "c", "a"],
	["d", "e", "c", "a", "b"],
	["c", "e", "d", "b", "a"],
	["b", "e", "a", "c", "d"]
];
console.log(runoff(voters), undefined);
voters = [
	['d', 'a', 'e', 'b', 'c'],
	['b', 'e', 'd', 'c', 'a'],
	['e', 'a', 'c', 'b', 'd'],
	['e', 'd', 'a', 'b', 'c'],
	['d', 'b', 'a', 'e', 'c']
];
console.log(runoff(voters), "e");