/*
In JavaScript, scope refers to the context in which variables, functions, and objects are accessible. JavaScript has several types of scope, each determining the lifespan and visibility of a variable:

1. Global Scope
    Variables declared outside of any function or block are in the global scope.
    They can be accessed from anywhere in the code, including inside functions.
    In a browser, global variables are attached to the window object.

        var globalVar = "I'm a global variable";

        function exampleFunction() {
            console.log(globalVar); // Accessible here
        }

        exampleFunction(); // Output: I'm a global variable

2. Local/Function Scope
    Variables declared within a function are only accessible within that function.
    They are not accessible from outside the function.
    
        function exampleFunction() {
            var localVar = "I'm a local variable";
            console.log(localVar); // Accessible here
        }

        exampleFunction();
        console.log(localVar); // Error: localVar is not defined

3. Block Scope
    With the introduction of let and const in ES6, variables can be scoped to blocks, defined by {} (like if, for, and while statements).
    let and const are block-scoped, while var is function-scoped.
    
    if (true) {
        let blockScopedVar = "I'm block scoped";
        console.log(blockScopedVar); // Accessible here
    }

    console.log(blockScopedVar); // Error: blockScopedVar is not defined

4. Lexical Scope
    JavaScript uses lexical (or static) scoping, meaning that inner functions have access to variables defined in their outer scope.
    The scope is determined by the position in the code at the time of writing, not by where it is called.

    function outerFunction() {
        var outerVar = "I'm from the outer function";

        function innerFunction() {
            console.log(outerVar); // Accessible due to lexical scope
        }

        innerFunction();
    }

    outerFunction(); // Output: I'm from the outer function

5. Module Scope (ES6 Modules)
    In ES6 modules, variables declared are scoped to that module by default.
    They are not accessible from other modules unless explicitly exported and imported.
    
    // file1.js
        const moduleScopedVar = "I'm in module scope";
        export { moduleScopedVar };

    // file2.js
        import { moduleScopedVar } from './file1.js';
        console.log(moduleScopedVar); // Accessible due to export

        Summary Table
        
        Scope Type	        Accessible From	                Declared With
        Global Scope	    Anywhere	                    var, let, const outside functions
        Function Scope	    Inside the function only	    var, let, const in functions
        Block Scope	        Inside the block only	        let, const
        Lexical Scope	    From nested functions	        N/A (based on location)
        Module Scope	    Inside the module (or imported)	let, const, export

    Understanding scope helps prevent variable name conflicts, enables modular code, and avoids unexpected behavior in your programs.




*/