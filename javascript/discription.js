/*
1. What is Angular?
Angular is a TypeScript-based open-source front-end web application framework that empowers developers to build modern, efficient, and scalable single-page applications. It is a platform for building mobile and desktop applications using HTML, CSS, and JavaScript. Angular is used by thousands of companies worldwide and has become the most popular JavaScript framework for web development.

2. Angular is a progressive framework
Angular is a progressive framework, meaning that it was designed to be flexible and adaptable, allowing developers to build applications with the best practices and technologies available today. Angular is built on top of AngularJS, a popular JavaScript framework, and it is compatible with both AngularJS and Angular.

3. Angular's modular nature
Angular is modular, meaning that it is designed to be broken down into smaller, reusable modules. This modular approach allows developers to create applications that are easy to maintain, test, and scale. Angular's modules are written in TypeScript and can be imported and exported to create a dependency graph for your application.

4. Angular's component-based architecture
Angular is built around a component-based architecture, meaning that it uses reusable components to build applications. This modular approach allows developers to create smaller, more maintainable, and reusable components. Angular's components are written in TypeScript and can be imported and exported to create a dependency graph for your application.

5. Angular's reactive programming model
Angular's reactive programming model allows developers to create applications that are easy to test, maintain, and scale. Angular uses observables and reactive programming techniques to handle changes in data and update the UI accordingly. This model promotes a declarative and functional programming approach to building applications.

6. Angular's TypeScript support
Angular is built with TypeScript, a superset of JavaScript that adds static type checking and better tooling support. TypeScript helps developers catch and fix errors early in the development process, making it easier to maintain and scale their applications.

7. Angular's HTTP client support
 Angular provides built-in support for making HTTP requests using Angular's HttpClient module. HttpClient is a powerful and flexible HTTP client for Angular applications. It supports both GET and POST requests, handles authentication, and handles error handling automatically.

8. Angular's router support
 Angular provides built-in support for routing using Angular's RouterModule. RouterModule allows developers to define routes, navigate between routes, and handle navigation events. It also supports lazy loading, preloading, and route guards.

9. Angular's dependency injection support
 Angular provides built-in support for dependency injection using Angular's DI module. DI module allows developers to inject dependencies into their components, services, and other services. It helps to create a modular and testable application.

10. Angular's form validation support
 Angular provides built-in support for form validation using Angular's FormsModule. FormsModule allows developers to create and manage forms in their applications. It also supports validation rules, form controls, and form arrays.

11. Angular's testing support
 Angular provides built-in support for testing using Angular's TestBed module. TestBed module allows developers to create and test components, services, and modules in their applications. It also supports testing asynchronous code, mocking dependencies, and providing a way to control the execution of tests.

These are some of the key features and benefits of Angular. Angular is a powerful and flexible framework that helps developers build modern, efficient, and scalable single-page applications. It is used by thousands of companies worldwide

Please note that this is a general overview of the key features and benefits of Angular. Angular is a highly customizable and extensible framework, and its features and benefits can vary depending on your specific requirements and preferences.

Is javascript compiled or interpreted language?
 the answer is that it is a bit of both. It is interpreted in older browsers, but in modern browsers, it is compiled with the help of a JIT compiler.


1. debounce
we debounce a function that should be called after a certain event has happened. It is used in events like drag, keyup, etc. 
with the purpose of not firing all the time the event gets fired but instead when the series of events is done. 
Typically after a whole word has been typed, or a drag or resize sequence has ended.

2. throttle
we throttle a function that should fire while a series of events is happening, but when we want to control the amount of times it gets called. Like in a drag movement we want the function to be called only every x pixels of distance, or only every 100ms, and not every time the event is fired. So the throttle function is called while the series of events is happening, just fewer times.


3.
WHAT IS CURRYING IN JAVASCRIPT?
Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, 
each taking a single argument. Currying helps you avoid passing the same variable multiple times, and 
it helps you create a higher order function.

That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3). 

Why Is Currying in JavaScript Useful?
Currying helps you avoid passing the same variable again and again.
It helps to create a higher order function.

Currying transforms a function with multiple arguments into a sequence/series of functions, each taking a single argument.

For example:

function sum(a, b, c) {
    return a + b + c;
}  
=======>

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6

4.  What's The Difference Between Async & Defer?
async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.

