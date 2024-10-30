/**
 1.  TypeScript Basic Generics
    Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

    Generics makes it easier to write reusable code.



2. TypeScript Utility Types

Partial
    Partial changes all the properties in an object to be optional.

    ExampleGet your own TypeScript Server
    interface Point {
    x: number;
    y: number;
    }

    let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
    pointPart.x = 10;


    Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development

 */