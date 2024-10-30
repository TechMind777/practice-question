/**
 * Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.
 * 
 OOP was developed to make code more flexible and easier to maintain.

What is a Class?
    You can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like an template for an object.

    We can create classes using the class keyword which is reserved keyword in JavaScript. Classes can have their own properties and methods


What is an Object?
    An object is an instance of a class. Now with the help of the house class we can construct a house. We can construct multiple houses with the help of same house class.

class Student{
    // Data (Properties)
    Name = "Gorge"
    Age = 18
    Standard = 12
    
    // Methods (Action)
    study(){
        // Study
    }
        
    Play(){
        // Play 
        // Play
    }
        
    doHomeWork(){
        // Do Home Work
    }   
    
}



-------------------------
There are 4 main principles in OOP, and they are:  inheritance, polymorphism, and abstraction, Encapsulation

1. Abstraction
    Abstraction is a key concept in Object-Oriented Programming (OOP) that focuses on hiding the complex implementation details and exposing only the necessary parts of an object or a class to the user. It allows you to interact with objects or classes without needing to understand the inner workings.

    In simpler terms, abstraction helps you to think about what an object does rather than how it does it. It simplifies complex systems by breaking them down into smaller, more manageable pieces.

    // Class definition
    class Car {
    // Constructor method
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.isEngineRunning = false;
    }

    // Public method to start the car
    start() {
        this.#startEngine(); // Call the private method to start the engine
        console.log(`${this.make} ${this.model} is now running.`);
    }

    // Private method to handle the engine starting
    #startEngine() {
        this.isEngineRunning = true;
        console.log('Engine started...');
    }

    // Public method to stop the car
    stop() {
        this.#stopEngine();
        console.log(`${this.make} ${this.model} is now stopped.`);
    }

    // Private method to handle the engine stopping
    #stopEngine() {
        this.isEngineRunning = false;
        console.log('Engine stopped...');
    }
    }

    // Creating an instance of the Car class
    const myCar = new Car('Toyota', 'Corolla');

    // Using public methods to start and stop the car
    myCar.start(); // Outputs: Engine started... Toyota Corolla is now running.
    myCar.stop();  // Outputs: Engine stopped... Toyota Corolla is now stopped.

    Explanation:
        1.Public Methods (start() and stop()):

            These methods are accessible from outside the class. As a user of the Car class, you only need to know about these methods to start or stop the car.
            
        2.Private Methods (#startEngine() and #stopEngine()):

            These methods are marked as private by using the # symbol (a feature in modern JavaScript). They contain the complex logic of starting and stopping the engine, but this logic is hidden from the user. The user doesn’t need to worry about how the engine starts; they just use the start() method.
        3.Abstraction in Action:

            The user interacts with the car through simple public methods (start() and stop()), abstracting away the complexities of what happens internally (like engine mechanics). This simplifies how you interact with the Car object.
 
2. Encapsulation

    Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

    This will keep code that's outside the class from accidentally manipulating internal methods and properties.
    Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.

    Encapsulation can be achieved using two techniques:

    Table of Content

    Using Closures
    Using Classes


    class User {
    // Private properties
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }
    }
    console.log(user.#username); // Error: Private field '#username' must be declared in an enclosing class

Inheritance
    Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships. We will discuss inheritance in further section of this article with pratical example.

    class Car {
        constructor(brand) {
              this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    let myCar = new Model("Ford", "Mustang");
    document.getElementById("demo").innerHTML = myCar.show();

Polymorphism
    In JavaScript, polymorphism is typically achieved through method overriding and method overloading (though JavaScript handles overloading differently from some other languages).
    
    Key Aspects of Polymorphism
        1.Method Overriding:

            Subclasses can provide a specific implementation of a method that is already defined in its superclass. This allows a subclass to define its own version of the method, providing specific behavior.

            // Base class
            class Animal {
            speak() {
                console.log('The animal makes a sound.');
            }
            }

            // Subclass Dog overriding the speak method
            class Dog extends Animal {
            speak() {
                console.log('The dog barks.');
            }
            }

            // Subclass Cat overriding the speak method
            class Cat extends Animal {
            speak() {
                console.log('The cat meows.');
            }
            }

            // Using polymorphism
            const animals = [new Animal(), new Dog(), new Cat()];

            animals.forEach(animal => {
            animal.speak();
            });

            // Output:
            // The animal makes a sound.
            // The dog barks.
            // The cat meows.


        2.Method Overloading (Simulated):

            In some languages, method overloading allows multiple methods with the same name but different parameters. JavaScript doesn’t natively support method overloading, but it can be simulated by checking the arguments within a method.

            JavaScript does not natively support method overloading like some other languages (e.g., Java, C++), but you can achieve a similar effect by checking the number and type of arguments:

            class Calculator {
            add(a, b) {
                if (typeof b === 'undefined') {
                // If only one argument, assume addition to zero
                return a + 0;
                }
                return a + b;
            }
            }

            const calc = new Calculator();

            console.log(calc.add(5, 10)); // Output: 15 (5 + 10)
            console.log(calc.add(5));     // Output: 5 (5 + 0)

 
----------------
Object-Oriented Programming in JavaScript
We have now discussed the basics of OOP. But OOP in JavaScript is bit different. We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).


How to Implement Prototypal Inheritance in JavaScript
There are three main ways to implement Prototypal Inheritance in JavaScript:

1.  Using Constructor Functions
    We can create objects from a function. With the help of a constructor function, built-in objects like arrays, sets, and others are actually implemented.

    In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set its values for any existing object properties

    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
    };

    let p1 = new Person('John', 'Doe');
    let p2 = new Person('Jane', 'Doe');

    console.log(p1.getFullName());
    console.log(p2.getFullName());


2. Using ES6 Classes
    Classes are an alternative to the constructor function syntax for implementing prototypal inheritance. We also call classes syntactic sugar.
    
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return this.firstName + " " + this.lastName;
        }
    }

    let p1 = new Person('John', 'Doe');
    let p2 = new Person('Jane', 'Doe');

    console.log(p1.getFullName());
    console.log(p2.getFullName());

3. Using Object.create()
    This is the easiest way to link an object to a prototype object. It is a method used to create a new object with the specified prototype object and properties.

    The object.create() method returns a new object with the specified prototype object and properties.







    ----------------------------------
1. Public:
    -Access Level: Accessible from anywhere, both inside and outside the class.
    -How to Define: By default, all properties and methods in a JavaScript class are public unless explicitly defined otherwise.

    class Person {
    // Public properties
    name = 'John';
    
    // Public method
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    }

    const person = new Person();
    console.log(person.name); // Accessing public property: Outputs 'John'
    person.greet();           // Calling public method: Outputs 'Hello, my name is John.'


2. Private:
    -Access Level: Accessible only within the class itself. Not accessible from outside the class or by subclasses.
    -How to Define: Use the # symbol before the property or method name to make it private.

    class BankAccount {
    // Private property
    #balance = 0;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }

    // Public method to deposit money
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. Current balance: ${this.#balance}`);
    }

    // Public method to check balance
    checkBalance() {
        console.log(`Current balance: ${this.#balance}`);
    }
    }

    const myAccount = new BankAccount('Alice');
    myAccount.deposit(100);  // Outputs: Deposited: 100. Current balance: 100
    myAccount.checkBalance(); // Outputs: Current balance: 100
    console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class


3. Protected (Not Directly Supported in JavaScript):
    -Access Level: Intended to be accessible only within the class and its subclasses. However, JavaScript does not have a native protected keyword like some other languages (e.g., Java, C#). Instead, developers often use naming conventions (like _propertyName) to indicate that a property or method should be treated as protected.


    class Vehicle {
    // Conventionally "protected" property
    _speed = 0;

    accelerate() {
        this._speed += 10;
        console.log(`Speed is now ${this._speed} km/h`);
    }
    }

    class Car extends Vehicle {
    turboBoost() {
        this._speed += 50; // Accessing the conventionally "protected" property
        console.log(`Turbo Boost! Speed is now ${this._speed} km/h`);
    }
    }

    const myCar = new Car();
    myCar.accelerate();  // Outputs: Speed is now 10 km/h
    myCar.turboBoost();  // Outputs: Turbo Boost! Speed is now 60 km/h
    console.log(myCar._speed); // Still accessible, but should be treated as "protected"


4. Static:
    -Access Level: Belongs to the class itself rather than instances of the class. Static properties and methods are accessible using the class name and not through individual instances.
    -How to Define: Use the static keyword

    class Calculator {
    // Static method
    static add(a, b) {
        return a + b;
    }
    }

    console.log(Calculator.add(5, 3)); // Outputs: 8

 */