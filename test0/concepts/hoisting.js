// Hoisting is a default behaviour of javascript where all the variable 
//and function declarations are moved on top.

//However in JavaScript, initializations are not hoisted. For example,
// console.log(a);
// var a = 5;
// Output
// undefined

hoistedVarVariable = 3;
console.log(hoistedVarVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVarVariable;

let hoistedLetVariable = 5;//While using let, the variable must be declared first.
console.log(hoistedLetVariable); 


//A function can be called before declaring it. For example,

// program to print the text
greet();

function greet() {
    console.log('Hi, the function can be called before declaring it.');
}
// program to print the text
greet2();

let greet2 = function() {
    console.log('Hi, the when a function is used as an expression, an error occurs because only declarations are hoisted. For example');
}

// "use strict";  --The "use strict" directive was new in ECMAScript version 5.
// x = 23; // Gives an error since 'x' is not declared
// var x;