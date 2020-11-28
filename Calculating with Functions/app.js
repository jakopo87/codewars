//http://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript
function zero() { return eval("0" + (arguments[0] || "")); }
function one() { return eval("1" + (arguments[0] || "")); }
function two() { return eval("2" + (arguments[0] || "")); }
function three() { return eval("3" + (arguments[0] || "")); }
function four() { return eval("4" + (arguments[0] || "")); }
function five() { return eval("5" + (arguments[0] || "")); }
function six() { return eval("6" + (arguments[0] || "")); }
function seven() { return eval("7" + (arguments[0] || "")); }
function eight() { return eval("8" + (arguments[0] || "")); }
function nine() { return eval("9" + (arguments[0] || "")); }

function plus() { return "+" + arguments[0]; }
function minus() { return "-" + arguments[0]; }
function times() { return "*" + arguments[0]; }
function dividedBy() { return "/" + arguments[0]; }

console.log(seven(times(five())));