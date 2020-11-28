function strongEnough(earthquake, age) {
	var strength = 1000 * Math.pow(Math.E, -(1 / 100) * age);
	var force = earthquake.reduce(function (s, x) {
		return s * x.reduce(function (p, y) {
			return p + y;
		});
	}, 1);
	return strength > force ? "Safe!" : "Needs Reinforcement!";
}

console.log(strongEnough([[2, 3, 1], [3, 1, 1], [1, 1, 2]], 2), "Safe!")
console.log(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 2), "Safe!")
console.log(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 3), "Needs Reinforcement!")