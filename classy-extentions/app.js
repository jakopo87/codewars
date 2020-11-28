/* http://www.codewars.com/kata/classy-extentions */
"use strict";
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		return this.name + " makes a noise.";
	}
}
/* ---------------------------------------------- */
// class Cat extends Animal {
// 	speak() {
// 		return this.name + " meows.";
// 	}
// }
/* ---------------------------------------------- */
class Cat extends Animal {
	speak() {
		return `${this.name} meows.`;
	}
}
/* ---------------------------------------------- */
var cat = new Cat('Mr Whiskers');
console.log(cat.speak(), 'Mr Whiskers meows.')
cat = new Cat('Lamp');
console.log(cat.speak(), 'Lamp meows.')
cat = new Cat('$$Money Bags$$');
console.log(cat.speak(), '$$Money Bags$$ meows.')