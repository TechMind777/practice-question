/** 
 * https://www.geeksforgeeks.org/software-design-patterns/

Software Design Patterns Tutorial
Software design patterns are communicating objects and classes that are customized to solve a general design problem in a particular context. Software design patterns are general, reusable solutions to common problems that arise during the design and development of software. They represent best practices for solving certain types of problems and provide a way for developers to communicate about effective design solutions. Design patterns capture expert knowledge and experience, making it easier for developers to create scalable, maintainable, and flexible software systems.

Types of Software Design Patterns
There are three types of Design Patterns:

1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioral Design Pattern


1. Creational Design Pattern: -- Creational design patterns abstract the instantiation process. They help make a system independent of how its objects are created, composed, and represented. A class creational pattern uses inheritance to vary the class that’s instantiated, whereas an object creational pattern will delegate instantiation to another object.
Creational patterns give a lot of flexibility in what gets created, who creates it, how it gets created, and, when.

There are two recurring themes in these patterns:

They all encapsulate knowledge about which concrete class the system uses.
They hide how instances of these classes are created and put together.

2. Structural Design Pattern -- Structural Design Patterns are concerned with how classes and objects are composed to form larger structures. Structural class patterns use inheritance to compose interfaces or implementations.

    Consider how multiple inheritances mix two or more classes into one. The result is a class that combines the properties of its parent classes.

    There are two recurring themes in these patterns:

        1. This pattern is particularly useful for making independently developed class libraries work together.
        2. Structural Design Patterns describe ways to compose objects to realize new functionality. The added flexibility of object composition comes from the ability to change the composition at run-time, which is impossible with static class composition.


3. Behavioral Design Pattern
    Behavioral Patterns are concerned with algorithms and the assignment of responsibilities between objects. Behavioral patterns describe not just patterns of objects or classes but also the patterns of communication between them. These patterns characterize complex control flow that’s difficult to follow at run-time.

    There are three recurring themes in these patterns:

        1. Behavioral class patterns use inheritance to distribute behavior between classes.
        2. Behavioral object patterns use object composition rather than inheritance.
        3. Behavioral object patterns are concerned with encapsulating behavior in an object and delegating requests to it.



What is System Design – Learn System Design

System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves translating user requirements into a detailed blueprint that guides the implementation phase. The goal is to create a well-organized and efficient structure that meets the intended purpose while considering factors like scalability, maintainability, and performance.




