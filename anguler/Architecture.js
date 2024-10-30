/**
 * Architecture
    Angular is a full-fledged model-view-controller (MVC) framework. It provides clear guidance on how the application should be structured and offers bi-directional data flow while providing real DOM. 

   Modules, components, Templates, Services, Dependency Injection, Metadata, bootstrap mechanism

1. Modules
   Definition: Modules are the foundational building blocks of an Angular application. They help organize an application into cohesive blocks of functionality. Each Angular application has at least one module, the root module, typically named AppModule, which provides the bootstrap mechanism to launch the application.
   
   Purpose: Modules group related components, directives, pipes, and services, and they control their scope. They help in managing dependencies and in lazy loading features.
  
   Example:
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppComponent } from './app.component';

      @NgModule({
         declarations: [AppComponent],  // Components, directives, pipes
         imports: [BrowserModule],       // Other modules to import
         providers: [],                  // Services to be injected
         bootstrap: [AppComponent]       // Root component to bootstrap
      })
      export class AppModule { }


2. Components
   Definition: Components are the building blocks of the user interface (UI) in Angular applications. Each component represents a portion of the UI and consists of a TypeScript class, an HTML template, and associated styles.
   
    Each component in the application defines a class that holds the application logic and data. A component generally defines a part of the user interface (UI).

   Purpose: Components encapsulate the logic and the view, making it easier to create, maintain, and reuse different parts of the UI.

   Example:
      import { Component } from '@angular/core';

      @Component({
         selector: 'app-root',
         templateUrl: './app.component.html',
         styleUrls: ['./app.component.css']
      })
      export class AppComponent {
         title = 'My Angular App';
      }
         
3. Templates
   Definition: A template in Angular is the HTML view that defines the structure of a component's UI. It can include Angular directives, bindings, and other Angular-specific syntax.

       The Angular template combines the Angular markup with HTML to modify HTML elements before they are displayed. There are two types of data binding: 
       
         -Event binding: Lets your app respond to user input in the target environment by updating your application data.
         -Property binding: Enables users to interpolate values that are computed from your application data into the HTML.
   
   Purpose: Templates describe how the component's view should be rendered and what data should be displayed.
   
   Example:
   html
      <!-- app.component.html -->
      <h1>{{ title }}</h1>
      <p>Welcome to {{ title }}!</p>

4. Services
   Definition: Services are classes that provide specific functionality or logic that can be shared across multiple components. They are typically used for tasks such as data fetching, business logic, or state management. The class is always associated with the @Injectible decorator.

   Purpose: Services help keep components lean by moving complex logic and operations out of the components and into reusable services.

   Example:
   typescript
      import { Injectable } from '@angular/core';

      @Injectable({
         providedIn: 'root'
      })
      export class DataService {
         getData() {
            return ['Item1', 'Item2', 'Item3'];
         }
      }

5. Dependency Injection

   Definition: Dependency Injection (DI) is a design pattern used in Angular to provide components and services with their dependencies. Angular's DI system is used to create and manage dependencies, making the application more modular and testable.

    This feature lets you keep your component classes crisp and efficient. It does not fetch data from a server, validate the user input, or log directly to the console. Instead, it delegates such tasks to the services.

   Purpose: DI allows you to inject services and other dependencies into components and other services, promoting loose coupling and code reuse.

   Example:
   typescript
      import { Component } from '@angular/core';
      import { DataService } from './data.service';

      @Component({
         selector: 'app-root',
         templateUrl: './app.component.html'
      })
      export class AppComponent {
         data: string[];

         constructor(private dataService: DataService) {
            this.data = this.dataService.getData();
         }
      }
6. Metadata

   Definition: Metadata in Angular is data about data. It tells Angular how to process a class, what it represents, and how to configure it. Metadata is attached to a class using decorators like @Component, @NgModule, @Injectable, etc.

   Purpose: Metadata provides Angular with the necessary information to understand what a class should represent and how it should be used in the application.

   Example:
   typescript
      import { Component } from '@angular/core';

      @Component({
         selector: 'app-root',           // The component's HTML tag
         templateUrl: './app.component.html',
         styleUrls: ['./app.component.css']
      })
   export class AppComponent { }

7. Bootstrap Mechanism
   Definition: Bootstrapping in Angular refers to the process of initializing or starting an Angular application. The root module (AppModule) and the root component (AppComponent) are bootstrapped during the application's startup process.

   Purpose: The bootstrap mechanism defines which component should be the entry point of the application, and it initializes the Angular environment to start rendering the application.

   Example:
   typescript
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppComponent } from './app.component';

      @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule],
      providers: [],
      bootstrap: [AppComponent]  // This tells Angular to bootstrap AppComponent at application start
      })
      export class AppModule { }

Summary
   Modules organize the application into cohesive blocks.
   Components are the building blocks of the UI.
   Templates define the view structure for components.
   Services provide reusable logic and functionality.
   Dependency Injection allows components and services to access shared dependencies.
   Metadata provides Angular with information on how to process classes.
   Bootstrap Mechanism starts the application and defines the root component.
   These concepts together form the foundation of Angular, allowing developers to build scalable, maintainable, and modular web applications.


   

 */