/*

<!----> Exact difference between AOT and IVY?
Angular Ivy is the new defaultz.
Starting from version 9 of Angular, your TypeScript code will be compiled using Ivy instead of the older ViewEngine (VE).
Basically, Ivy decreases your bundle sizes, enhances testing, and improves debugging capabilities. In addition, Ivy uses Ahead-of-Time compilation to speed up your apps.
To summarise -

+---------------------------+-------------------+
| Ivy                       | AOT               |
+---------------------------+-------------------+
| It is a rendering engine. | It is a compiler. |
+---------------------------+-------------------+

Ivy refers to the rendering engine used in Angular, which works at runtime and during compilation to generate efficient code.
AOT refers to when the compilation occurs—during build time, rather than at runtime in the browser.


Real difference would be between -

Ivy vs ViewEngine(VE)
    ViewEngine is the older rendering engine, with less optimized performance, larger bundle sizes, and less effective tree-shaking. It was the standard up until Angular 8.
    Ivy is the newer, default rendering engine starting from Angular 9, offering better performance, smaller bundles, improved debugging, and more advanced features. Ivy is the future of Angular, with ongoing enhancements being made to this engine.


AOT vs JIT 

    1. JIT (Just-in-Time Compilation)
    Overview:
        - JIT compilation is the default mode during development. The Angular application is compiled in the browser at runtime, meaning the Angular compiler is shipped with the application and the templates are compiled just before they are rendered.
        - This allows for quicker builds during development, as there's no need to compile the application ahead of time.

    2. AOT (Ahead-of-Time Compilation)
    Overview:
        - AOT compilation occurs during the build process, before the application is delivered to the browser. Angular compiles the application’s templates and components into optimized JavaScript code ahead of time, eliminating the need for the Angular compiler in the final bundle.
        - AOT is the default mode for production builds in Angular.

12. What is an AOT compilation? What are its advantages?
    The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., 
    before the browser downloads and runs the code.

    Some of its advantages are as follows. 

    Faster rendering
    Fewer asynchronous requests
    Smaller Angular framework download size
    Quick detection of template errors
    Better security
*/