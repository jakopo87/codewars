/* http://www.codewars.com/kata/lazy-evaluation */
function filterNumbers() {
	var n = [];
	for (var i = 0; i < arguments.length; ++i) {
		if (typeof (arguments[i]) === "number") {
			n.push(arguments[i]);
		}
	}
	return n;
}
function filterRange(nums, min, max) {
	var n = [];
	for (var i = 0; i < nums.length; ++i) {
		if (min < nums[i] && nums[i] < max) {
			n.push(nums[i]);
		}
	}
	return n;
}
function max(n) {
	return Math.max.apply(null, n);
}
/* -------------------------------------------- */
function Lazy() {
	var f = [];
	function collectArgs(a) {
		var args = [];
		for (var i = typeof (a[0]) === "function" ? 1 : 0; i < a.length; ++i) {
			args.push(a[i]);
		}
		return args;
	}
	return {
		add: function () {
			f.push({
				fn: arguments[0],
				args: collectArgs(arguments)
			});
			return this;
		},
		invoke: function () {
			var r;
			var args = arguments[0];
			f.forEach(function (el) {
				args = args.concat(el.args);
				r = el.fn.apply(null, args);
				args = [r];
			});
			return r;
		}
	};
}
/* -------------------------------------------- */
console.log(new Lazy()
	.add(filterNumbers)
	.add(filterRange, 2, 7)
	.add(max)
	.invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]));