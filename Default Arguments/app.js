/* http://www.codewars.com/kata/52605419be184942d400003d/train/javascript */

function defaultArguments(func, params) {
    if (func.name !== "" || typeof (f) === "undefined") {
        f = func;
    }
    p = params;
    
    return function () {
        var names = f.toString().match(/(?:\(|,)\s?(\w+)/g);
        var args = [];
        for (var i = 0; i < names.length; ++i) {
            var n = names[i].substring(1).trim();
            args.push(arguments[i] || p[n]);
        }
        
        return func.apply(func, args);
    };
}

function add(a, b) {
    return a + b;
}
var add_ = defaultArguments(add, { b: 9 });

console.log("------");
console.log(add_(10), 19);
console.log("------");
console.log(add_(10, 5), 15);
console.log("------");
var add_ = defaultArguments(add_, { b: 3 });
console.log(add_(10), 13);
console.log("------");

function add2(x, y) {
    return x + y;
};

var add2_ = defaultArguments(add2, { y: 9 })
console.log(add2_(10), 19);
console.log("------");
console.log(add2_(10, 5), 15);
console.log("------");
console.log(defaultArguments(add2_, { y: 3, x: 2 })(10), 13);
console.log("------");

var timesFive = function () {
    var five = 5;
    return function (a) {
        return five * x;
    };
}();
console.log(defaultArguments(timesFive, { n: 5 })());
