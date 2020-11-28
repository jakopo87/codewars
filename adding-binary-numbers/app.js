/* http://www.codewars.com/kata/adding-binary-numbers */
// function add(a, b) {
// 	var sum = "", carry = false;
// 	var x = a.replace(/^[0]+/g, "").split(""), y = b.replace(/^[0]+/g, "").split("");
// 
// 	while (x.length + y.length > 0) {
// 		var l = (x.pop() || "") + (y.pop() || "");
// 		switch (l) {
// 			case "0":
// 			case "00":
// 				if (carry === false) {
// 					sum = "0" + sum;
// 				} else {
// 					sum = "1" + sum;
// 					carry = false;
// 				}
// 				break;
// 			case "1":
// 			case "01":
// 			case "10":
// 				if (carry === false) {
// 					sum = "1" + sum;
// 				} else {
// 					sum = "0" + sum;
// 					carry = true;
// 				}
// 				break;
// 			case "11":
// 				if (carry === false) {
// 					sum = "0" + sum;
// 					carry = true;
// 				} else {
// 					sum = "1" + sum;
// 					carry = true;
// 				}
// 				break;
// 		}
// 	}
// 	if (sum === "") {
// 		sum = "0";
// 	}
// 	return (carry === true ? "1" : "") + sum;
// };
/* -------------------------------------------------- */
function add(a, b) {
	var sum = "", carry = "0", x = a.replace(/^0+/g, "").split(""), y = b.replace(/^0+/g, "").split("");
	while (x.length + y.length > 0) {
		var l = carry + (x.pop() || "") + (y.pop() || "");
		switch (l) {
			case "000":
			case "00":
				sum = "0" + sum;
				carry = "0";
				break;
			case "001":
			case "010":
			case "01":
			case "100":
			case "10":
				sum = "1" + sum;
				carry = "0";
				break;
			case "011":
			case "101":
			case "110":
			case "11":
				sum = "0" + sum;
				carry = "1";
				break;
			case "111":
				sum = "1" + sum;
				carry = "1";
				break;
		}
	}
	return (carry === "1" ? "1" : "") + (sum === "" ? "0" : sum);
};
/* -------------------------------------------------- */
console.log(add('111', '10'), '1001');
console.log(add('1101', '101'), '10010');
console.log(add('1101', '10111'), '100100');
console.log(add('00', '0'), '0');
console.log(add('10111', '001010101'), '1101100');