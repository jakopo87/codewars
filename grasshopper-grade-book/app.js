/* http://www.codewars.com/kata/grasshopper-grade-book */
function getGrade(s1, s2, s3) {
  var m = (s1 + s2 + s3) / 3, r = null;
  if (m >= 90) {
    r = "A";
  } else if (m >= 80) {
    r = "B";
  } else if (m >= 70) {
    r = "C";
  } else if (m >= 60) {
    r = "D";
  } else {
    r = "F";
  }
  return r;
}

/* ----- */
console.log(getGrade(95, 90, 93), 'A');
console.log(getGrade(100, 85, 96), 'A');
console.log(getGrade(92, 93, 94), 'A');
console.log(getGrade(70, 70, 100), 'B');
console.log(getGrade(82, 85, 87), 'B');
console.log(getGrade(84, 79, 85), 'B');
console.log(getGrade(70, 70, 70), 'C');
console.log(getGrade(75, 70, 79), 'C');
console.log(getGrade(60, 82, 76), 'C');
console.log(getGrade(65, 70, 59), 'D');
console.log(getGrade(66, 62, 68), 'D');
console.log(getGrade(58, 62, 70), 'D');
console.log(getGrade(44, 55, 52), 'F');
console.log(getGrade(48, 55, 52), 'F');
console.log(getGrade(58, 59, 60), 'F');
	