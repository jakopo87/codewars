/* http://www.codewars.com/kata/checkered-board */
//HACK: invisible breakpoint
// function checkeredBoard(dimension) {
// 	var result;
// 	if (dimension < 2 || typeof dimension !== "number" || dimension % 1 !== 0) {
// 		result = false;
// 	} else {
// 		var even, odd;
// 		if (dimension % 2 === 0) {
// 			odd = "□";
// 			even = "■";
// 		} else {
// 			even = "□";
// 			odd = "■";
// 		}
// 		var board = [];
// 		for (var i = 0; i < dimension; ++i) {
// 			var l = [];
// 			for (var j = 0; j < dimension; ++j) {
// 				l.push((i + j) % 2 ? even : odd);
// 			}
// 			board.push(l.join(" "));
// 		}
// 		result = board.join("\n");
// 	}
// 	return result;
// }
/* -------------------------------------------- */
function checkeredBoard(dimension) {
	var result;
	if (dimension < 2 || typeof dimension !== "number" || dimension % 1 !== 0) {
		result = false;
	} else {
		var board = [];
		for (var i = 0; i < dimension; ++i) {
			var l = [];
			for (var j = 0; j < dimension; ++j) {
				l.push((i + j + dimension % 2) % 2 === 0 ? "□" : "■");
			}
			board.push(l.join(" "));
		}
		result = board.join("\n");
	}
	return result;
}
/* -------------------------------------------- */
console.log(checkeredBoard(4), "\n", "□ ■ □ ■\n■ □ ■ □\n□ ■ □ ■\n■ □ ■ □");
console.log(checkeredBoard(1), false);
console.log(checkeredBoard("test"), false);
console.log(checkeredBoard(3), "\n", "■ □ ■\n□ ■ □\n■ □ ■");
