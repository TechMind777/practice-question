/**
 * 
8. What are decorators in Angular? 
    In Angular, decorators are functions that are used to modify the behavior of classes and their members. They provide a way to add metadata or apply transformations to code elements. In Angular, decorators are extensively used to define components, services, directives, pipes, modules, and more.

    Types of Decorators in Angular
        In Angular, there are four main types of decorators-

        1. Class Decorators: Class decorators are applied to classes to modify their behavior or metadata. The examples include @Component, @Directive and @NgModule.

        2. Property Decorators: Property decorators are applied to the class properties and are commonly used to modify the properties within the classes. For example, @Input decorator makes a property as an input binding, allowing it to bound to the external data.( @Output)

        3. Method Decorators: Method decorators are applied to the class methods and modify their behavior or add additional functionalities. For example, @HostListener allows us to listen for events on a method.

        4. Parameter Decorators: The Parameter decorators are used for parameters inside class constructors. The parameter decorators provide additional information about constructor parameters. For example, The @Inject decorator allows to specify dependencies for dependency injection.

Uses of Decorators in Angular
    - Component Configuration: Use @Component to define the metadata of Angular components, including template, styles, and selector.
    - Service Definition: Mark a class with @Injectable to make it injectable as a service throughout the application.
    - Directive Behavior: Implement @Directive to attach custom behavior to elements in the DOM.
    - Pipe Transformation: Utilize @Pipe to define custom data transformation logic for templates.
    - Module Organization: Use @NgModule to structure Angular modules and manage dependencies.
    - Input and Output Handling: Use @Input and @Output to pass data between parent and child components.
    - View Management: Utilize @ViewChild and @ViewChildren to access child components or elements in the view.
    s
    */