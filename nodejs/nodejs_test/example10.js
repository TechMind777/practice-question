/*

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');
let p3 = Person('Jane', 'Doe');

console.log(p1.getFullName()); // John Doe
console.log(p2.getFullName()); // Jane Doe
// console.log(p3.getFullName()); // TypeError: Cannot read properties of undefined (reading 'getFullName')

-----------------------
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
   getFullName =   (v) => {
        return this.firstName + ' ' + this.lastName + '--' + v;
    }
    return getFullName;
}
 
let p1 =   Person('John', 'Doe'); 
console.log(p1('call'))
*/