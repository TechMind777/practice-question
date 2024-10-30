/*
What is Currying Function in JavaScript ?

Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result.

In simpler terms, currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.


// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}

*/
