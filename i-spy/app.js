/* http://www.codewars.com/kata/i-spy */
function spyOn(func) {
	var callCount = 0, results = [], args = [];
	var f = function () {
		var r = func.apply(arguments);
		++callCount;
		for (var i = 0; i < arguments.length; ++i) {
			if (args.indexOf(arguments[i]) === -1) {
				args.push(arguments[i]);
			}
		}
		if (results.indexOf(r) === -1) {
			results.push(r);
		}
		return r;
	};
	f.callCount = function () {
		return callCount;
	};
	f.returned = function (n) {
		return results.indexOf(n) !== -1;
	};
	f.wasCalledWith = function (n) {
		return args.indexOf(n) !== -1;
	};
	return f;
}
/* ---------------------------------- */
function returns1() { return 1; }

var spy = spyOn(returns1);

console.log(spy.callCount(), 0);
console.log(spy.returned(1), false);
console.log(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount(), 2);
console.log(spy.returned(1), true);
console.log(spy.wasCalledWith('hi'), true);
console.log(spy.wasCalledWith('bye'), true);

var testSpyOn = function (func) {
	var callVals = [],
		returnVals = [],
		callCount = 0;
	function spy() {
		++callCount;
		callVals = callVals.concat([].slice.call(arguments));
		var val = func.apply(this, arguments);
		returnVals.push(val);
		return val;
	};
	spy.callCount = function () { return callCount; };
	spy.wasCalledWith = function (val) { return callVals.indexOf(val) > -1; };
	spy.returned = function (val) { return retVals.indexOf(val) > -1; };
	return spy;
};

var originalFn, valToReturn;
var init = function () {
    valToReturn = {};
    originalFn = testSpyOn(function orig() { return valToReturn; });
    spy = spyOn(originalFn);
};
init();


var valToReturn2 = {};
var originalFn2 = testSpyOn(function () { return valToReturn2 });
var spy2 = spyOn(originalFn2);

spy(valToReturn);

console.log(spy.callCount(), 1);
console.log(spy2.callCount(), 0);

spy2(valToReturn2);

console.log(spy.returned(valToReturn));
console.log(!spy.returned(valToReturn2));
console.log(spy2.returned(valToReturn2));
console.log(!spy2.returned(valToReturn));

console.log(spy.wasCalledWith(valToReturn));
console.log(!spy.wasCalledWith(valToReturn2));
console.log(spy2.wasCalledWith(valToReturn2));
console.log(!spy2.wasCalledWith(valToReturn));