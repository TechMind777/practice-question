/*
ES5 (ECMAScript 5) and ES6 (ECMAScript 6, also known as ECMAScript 2015) are two major versions of the JavaScript programming language. ES6 introduced significant improvements and new features that aimed to make JavaScript more modern, powerful, and easier to use.

    Key Differences
    1.Arrow Functions:

        ES5: Anonymous functions were commonly used.
        ES6: Arrow functions provide a concise syntax for defining functions.

        // ES5
        var greet = function(name) {
            return "Hello, " + name;
        };

        // ES6
        const greet = (name) => {
            return "Hello, " + name;
        };
        Use code with caution.

    2.Template Literals:

        ES5: String concatenation was used for multi-line strings and dynamic values.
        ES6: Template literals allow for easier string interpolation and multi-line strings.
        
        // ES5
        var name = "Alice";
        var greeting = "Hello, " + name;

        // ES6
        const name = "Alice";
        const greeting = `Hello, ${name}`;
        Use code with caution.

    3.Classes:

        ES5: Prototypal inheritance was used to create objects.
        ES6: Classes provide a more familiar syntax for creating objects and defining inheritance.

        // ES5
        function Person(name) {
            this.name = name;
        }

        // ES6
        class Person {
            constructor(name) {
                this.name = name;
            }
        }
        Use code with caution.

    4.Modules:

        ES5: CommonJS was the standard for modules.
        ES6: Native module support was introduced, making it easier to organize code into reusable modules.
        
        // ES5 (CommonJS)
        // module.exports = { ... };

        // ES6
        export default { ... };
        Use code with caution.

    5.Destructuring:

        ES5: Extracting properties from objects and arrays required more verbose code.
        ES6: Destructuring allows for easier extraction of values.
        
        // ES5
        var person = { name: "Alice", age: 30 };
        var name = person.name;
        var age = person.age;

        // ES6
        const { name, age } = { name: "Alice", age: 30 };
        Use code with caution.

    6.Let and Const:

        ES5: var was the only keyword for declaring variables.
        ES6: let and const provide block-scoped variables with different behaviors.

        */