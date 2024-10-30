/**
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
 closures are created every time a function is created, at function creation time.

----------------------------------------------
In programming, a closure is a function that:

1. Has access to its own scope (local variables)
2. Has access to the outer scope (variables and functions) in which it was defined
3. Can be passed around as an argument or returned from a function
4. Remembers its environment (scope) even when called outside its original scope

Closures are created when:

1. A function is defined inside another function (nested functions)
2. The inner function uses variables from the outer function's scope
3. The inner function is returned or passed as an argument

Characteristics:

1. Encapsulation: Closures hide implementation details
2. Statefulness: Closures maintain state between calls
3. Flexibility: Closures can be used as higher-order functions

Examples:

1. Callback functions
2. Event handlers
3. Iterators
4. Generators
5. Modules (in JavaScript)

Benefits:

1. Code organization and reuse
2. Data hiding and encapsulation
3. Improved security
4. Simplified code management

Common use cases:

1. Creating private variables and functions
2. Implementing iterators and generators
3. Handling events and callbacks
4. Creating modules and namespaces
5. Memoization and caching

In JavaScript, closures are commonly used for:

1. Creating private variables and functions
2. Implementing modules and namespaces
3. Handling events and callbacks
4. Creating iterators and generators

Example in JavaScript:

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

const closure = outer();
closure(); // logs 10

In this example, inner is a closure that has access to the outer scope's variable x, even when called outside its original scope.
 */

 function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();



//lexical Scope
// console.log("When inner function accessess variable of outer function")

//closure
// console.log("When inner fuction accessess variable of outer function but on execution time(remebers it as well)")
 
function hello(){
    var a=10;
    function innerFunction(){
        return a;//lexical scope
    }
    return innerFunction;
}
var inner=hello();//
// function innerFunction(){
//     return a;//lexical scope
// }
console.log(inner())//this is closure