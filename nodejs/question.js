/***

https://www.youtube.com/watch?v=lJ4jsJjlR4I

Must have knowledge about RestAPIs, Protobuf, gRPC, Server Sent Events, WebSockets, GraphQL (Any 3 is fine)

what is nod JS

➡️ Explain what is Reactor Pattern in Node.js?
At its heart, the Reactor pattern embraces non-blocking I/O, a paradigm shift where system calls return immediately, freeing threads to perform other tasks while they await data. This fundamental departure from traditional blocking I/O marks a pivotal moment in how Node.js

➡️what is V8

➡️What is node js? 0:19


➡️Npm ? 

➡️Module-exports? 7:53 
If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default.
// greetings.js
const greeting = "Hello, world!";
export default greeting;

// app.js
import greeting from "./greetings.js";
console.log(greeting); // outputs "Hello, world!"


If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.
// greetings.js
export const greeting = "Hello, world!";
export const farewell = "Goodbye, world!";
// app.js
import { greeting, farewell } from "./greetings.js";
console.log(greeting); // outputs "Hello, world!"
console.log(farewell); // outputs "Goodbye, world!"
 
➡️ What is forever? 

    Forever is an npm module that ensures a Node. js script continuously runs in the background on the server. 

    Synchronous JavaScript
        https://www.telerik.com/blogs/how-javascript-code-gets-executed-synchronous-asynchronous#:~:text=JavaScript%20is%20synchronous%2C%20blocking%20and,log%20statements.
        JavaScript is synchronous, blocking and single-threaded. This means that the JavaScript engine executes our program sequentially, one line at a time from top to bottom in the exact order of the statements.
➡️Explain the working of assert in Node.js

    Assert is the most elementary way to write tests and to provide no feedback when running the test unless one fails. The assert module provides a simple set of assertion tests that can be used to test invariants. The module is intended for internal use by Node.

➡️ What is stub in Node.js?
    Stubs can be wrapped into existing functions. When we wrap a stub into the existing function the original function is not called. Stubs are functions or programs that affect the behavior of components or modules. Stubs are dummy objects for testing. Stubs implement a pre-programmed response.

➡️What is Event Loop?
    The event loop is what allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded and by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background
    
➡️
1. Closures
    Closures occur when a function retains access to its outer function's variables even after the outer function has finished running. They are often used to create private variables or functions.
    Closures are important in JavaScript because they allow for more modular, maintainable code by encapsulating logic within functions.

2. Promises
    A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle async code in a cleaner, more readable way.
    Promises have three states: pending, fulfilled, and rejected. They simplify managing asynchronous tasks, avoiding the "callback hell."

3. Hoisting
    Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before code execution. This means you can use functions and variables before they're declared.
    However, only declarations are hoisted, not initializations. Understanding hoisting helps avoid bugs related to undefined variables.


4. Scope

    Scope refers to the accessibility of variables in different parts of your code. There are three main types: global, local, and block scope.
    Knowing how scope works helps prevent unintended side effects and errors due to variable shadowing or incorrect variable access.

5. Event Loop

    The event loop allows JavaScript to perform non-blocking operations by managing the execution of asynchronous callbacks. It continuously checks the message queue and processes tasks in a single thread. 
    Understanding the event loop is key to mastering JavaScript's async behavior, like callbacks, Promises, and async/await.

6. this Keyword
    The this keyword refers to the object that is currently executing a function. Its value is determined by how the function is called, not where it is defined.
    Understanding this is crucial for working with object-oriented programming in JavaScript and avoiding common bugs.



7. Arrow Functions
Arrow functions provide a concise syntax for writing functions. Unlike regular functions, they don't have their own this, so they inherit this from the surrounding code.
They are useful for short, simple functions, but be cautious when using them in objects or constructors due to their this behavior.

8. Async/Await
    Async/await is syntax sugar built on top of Promises, making async code look synchronous. It simplifies handling asynchronous operations by using await to pause code execution until a Promise is resolved.es.com
    This leads to cleaner, more readable code, especially when dealing with multiple asynchronous tasks.

9. Prototype
    Every JavaScript object has a prototype, an object from which it inherits methods and properties. Prototypes allow for efficient memory usage and code reuse.
    Understanding prototypes is essential for mastering JavaScript's inheritance model and creating optimized, maintainable code.

10. Currying
    Currying is a technique where a function is transformed into a series of functions, each taking a single argument. This allows for partial application of functions.
    Currying is useful for creating reusable functions and handling a sequence of function calls more effectively.

11. Event Delegation
    Event delegation is a technique where you attach a single event listener to a parent element to manage events on child elements. This reduces the need for multiple listeners and improves performance.
    It's particularly helpful for managing dynamic content and handling events efficiently in large DOM structures.




➡️
➡️
➡️
➡️*/