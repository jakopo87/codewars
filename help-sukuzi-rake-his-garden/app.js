/* http://www.codewars.com/kata/help-sukuzi-rake-his-garden */
function rakeGarden(garden) {
    return garden.replace(/(?!\b(rock|gravel)\b)\b\w+\b/g,"gravel");
}
/* -------------------------------------------------------- */
function rakeGarden(garden) {
    return garden.replace(/(?!\b(rock)\b)\b\w+\b/g,"gravel");
}
/* -------------------------------------------------------- */
module.exports.rakeGarden = rakeGarden;