// Use JavaScript constructor/prototype to define a custom type in ES5.
// Initialize the object properties in the constructor function and define methods and properties that can be shared by all instances in the prototype object.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  let p1 = new Person('John', 'Doe'); 
  let p2 = new Person('Jane', 'Doe'); 
  
  console.log(p1.getFullName());//John Doe
  console.log(p2.getFullName());//Jane Doe

//   ------------------Classes in ES6
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p3 = new Person('John', 'Doe');
let p4 = new Person('Jane', 'Doe');

<<<<<<< HEAD
console.log(p1.getFullName());//John Doe
console.log(p2.getFullName());//Jane Doe
=======
console.log(p3.getFullName());
console.log(p4.getFullName());
>>>>>>> e0b655fd630132538a9f201d5f9517c4444eddef

