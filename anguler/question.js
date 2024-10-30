/**
 * 
 * 
 * ng g module pages/admin --route admin --module pages.module
 * 
 * 
 -- package.json -->Angular workspace configuration
The angular.json file at the root level of an Angular workspace provides workspace-wide and project-specific configuration defaults. These are used for build and development tools provided by the Angular CLI. Path values given in the configuration are relative to the root workspace directory.

--- tsconfig.json	TypeScript compiler configuration.

---main.ts -- >
The job of main.ts is to boostrap the application. It loads everything and controls the startup of the application.

import { enableProdMode } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app/app.module'; 
import { environment } from './environments/environment'; 
if (environment.production) { 
 enableProdMode(); 
} 
platformBrowserDynamic().bootstrapModule(AppModule); 



---->





2. What is anguler Js ?




7. Angular 

    
What are controllers?



 

13. What are Components in Angular?
    Components Heirarchy

    Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.

14. What are Pipes in Angular? 
    angular pipes

    Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding. Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. 

    Some key features include: 

    Pipes are defined using the pipe “|” symbol. 
    Pipes can be chained with other pipes.
    Pipes can be provided with arguments by using the colon (:) sign.

15. What is the PipeTransform interface?
    As the name suggests, the interface receives an input value and transforms it into the desired format with a transform() method. 
    It is typically used to implement custom pipes.

    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
      name: 'demopipe',
      pure:true/false
    })

    export class DemopipePipe implements PipeTransform {
      transform(value: unknown, ...args: unknown[]): unknown {
        return null;
      }
    }

What are filters in Angular? Name a few of them.
    Filters are used to format an expression and present it to the user. They can be used in view templates, controllers, or services. Some inbuilt filters are as follows. 

    date - Format a date to a specified format.
    filter - Select a subset of items from an array.
    Json - Format an object to a JSON string.
    limitTo -  Limits an array/string, into a specified number of elements/characters.
    lowercase - Format a string to lowercase.

 





 */