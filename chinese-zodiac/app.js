/* http://www.codewars.com/kata/chinese-zodiac */
// function chineseZodiac(year) {
//     year -= 1924;
//     var sign = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
//     var element = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
//     return element[Math.floor(year / 2) % 10 % 5] + " " + sign[year % sign.length];
// }
/* ------------------------------------------- */
function chineseZodiac(year) {
    year -= 1924;
    var sign = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    var element = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
    return element[Math.floor(year / 2) % 5] + " " + sign[year % sign.length];
}
/* ------------------------------------------- */
console.log(chineseZodiac(1984), "Wood Rat")
console.log(chineseZodiac(1965), "Wood Snake")
console.log(chineseZodiac(1938), "Earth Tiger")
console.log(chineseZodiac(1998), "Earth Tiger")
console.log(chineseZodiac(2016), "Fire Monkey")
console.log(chineseZodiac(1924), "Wood Rat")
console.log(chineseZodiac(1968), "Earth Monkey")
console.log(chineseZodiac(2162), "Water Dog")