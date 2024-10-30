/*
In Node.js, functions are a fundamental part of the language, and they come in various forms. Here are the different types of functions you can use in Node.js:

1. Named Functions
    A named function is a function with a specified name. These functions can be defined using the function keyword.

    function add(a, b) {
    return a + b;
    }

    console.log(add(2, 3)); // Output: 5
2. Anonymous Functions
    Anonymous functions do not have a name. They are often used as arguments to other functions or assigned to variables.

    const multiply = function(a, b) {
    return a * b;
    };

    console.log(multiply(2, 3)); // Output: 6
3. Arrow Functions
    Arrow functions are a shorter syntax for writing anonymous functions. They also lexically bind the this value, which can be beneficial in certain contexts.

    const divide = (a, b) => a / b;

    console.log(divide(6, 2)); // Output: 3
4. Immediately Invoked Function Expressions (IIFE)
    IIFE functions are executed immediately after they are defined. They are commonly used to create a private scope.

    (function() {
    console.log('IIFE executed!');
    })(); // Output: IIFE executed!
5. Callback Functions
    A callback function is passed as an argument to another function and is executed after some operation is completed. This is common in asynchronous operations like file handling, HTTP requests, etc.

    const fs = require('fs');

    fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    });
6. Higher-Order Functions
    A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. This is a powerful concept in functional programming.

    function higherOrder(fn) {
    return function(x) {
        return fn(x) * 2;
    };
    }

    const double = higherOrder(function(x) {
    return x;
    });

    console.log(double(5)); // Output: 10
7. Asynchronous Functions (async/await)
    Asynchronous functions, introduced in ES8, are functions that return a Promise. They can be paused using the await keyword, making them easier to work with compared to traditional callback-based functions.

    const fetchData = async () => {
    const data = await someAsyncOperation();
    console.log(data);
    };

    fetchData();
8. Constructor Functions
    Constructor functions are used to create objects and are typically defined using the function keyword. They are invoked using the new keyword.

    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    const john = new Person('John', 30);
    console.log(john.name); // Output: John
9. Generator Functions
    Generator functions are special functions that can be paused and resumed, allowing for the generation of sequences of values. They are defined using the function* syntax.

    function* generateSequence() {
        yield 1;
        yield 2;
        yield 3;
    }

    const generator = generateSequence();

    console.log(generator.next().value); // Output: 1
    console.log(generator.next().value); // Output: 2
    console.log(generator.next().value); // Output: 3
    
10. Recursive Functions
    A recursive function is a function that calls itself in order to solve a problem. This is useful for problems that can be broken down into smaller, similar sub-problems.

    function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
    }

    console.log(factorial(5)); // Output: 120
11. Pure Functions
    Pure functions are functions that, given the same inputs, always return the same output and do not have any side effects. These are a key concept in functional programming.

    function add(a, b) {
    return a + b; // Always returns the same result for the same inputs
    }
12. Anonymous Arrow Functions as Callbacks
    Arrow functions can be used anonymously as callbacks, particularly in array operations like map, filter, and reduce.

    javascript
    Copy code
    const numbers = [1, 2, 3, 4, 5];

    const doubled = numbers.map((n) => n * 2);

    console.log(doubled); // Output: [2, 4, 6, 8, 10]
13. Method Functions (Object Methods)
    Method functions are functions that are defined as properties on an object.

    const obj = {
    greet: function() {
        console.log('Hello, World!');
    },
    };

    obj.greet(); // Output: Hello, World!
    */