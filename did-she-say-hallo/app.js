/* http://www.codewars.com/kata/did-she-say-hallo */
// function validateHello(greetings) {
//     return greetings.match(/hello|ciao|salut|hallo|hola|ahoj|czesc/i) !==null;
// }
/* ---------------------------------------------- */
function validateHello(greetings) {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
}
/* ---------------------------------------------- */
console.log(validateHello('ahoj'), true);
console.log(validateHello('Ahoj'), true);

console.log(validateHello('meh'), false);