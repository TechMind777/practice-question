/**
 * 

10. What are Components in Angular?
    Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.


 */

    /*

    smart and dump component
    
In Angular, components are often categorized as smart (or container) components and dumb (or presentational) components. This approach promotes separation of concerns, making your code more modular, testable, and maintainable.

1. Smart (Container) Components
    Purpose: Handle data retrieval, state management, and logic. They often fetch data from services, manage application state, and pass data down to dumb components.
    
    Characteristics:
        Contains business logic and application state.
        Uses Angular services or Observables to retrieve data.
        Passes data and callbacks to child components through @Input and @Output decorators.
        Tends to be more complex as they handle application logic.

    Example: 
        import { Component, OnInit } from '@angular/core';
        import { DataService } from '../data.service';

        @Component({
        selector: 'app-smart',
        template: `
            <app-dumb
            [data]="data"
            (action)="handleAction($event)"
            ></app-dumb>
        `
        })
        export class SmartComponent implements OnInit {
            data: any;

            constructor(private dataService: DataService) {}

            ngOnInit() {
                this.dataService.getData().subscribe((res) => {
                this.data = res;
                });
            }

            handleAction(event: any) {
                // Handle action emitted from Dumb Component
                console.log('Action handled in Smart Component:', event);
            }
        }
    Here, SmartComponent fetches data from DataService and passes it to DumbComponent.

2. Dumb (Presentational) Components

    Purpose: Focus on displaying data and emitting events based on user interactions. They’re generally unaware of where data comes from and avoid containing any business logic.
    
    Characteristics:
        Receives data and configuration through @Input properties.
        Emits events to parent components through @Output properties.
        Purely presentational; only concerned with rendering.
        Easier to reuse as they are less coupled to application state.

    Example:
    import { Component, Input, Output, EventEmitter } from '@angular/core';

    @Component({
    selector: 'app-dumb',
    template: `
        <div *ngFor="let item of data">
        {{ item.name }}
        <button (click)="onAction(item)">Action</button>
        </div>
    `
    })
    export class DumbComponent {
        @Input() data: any[];
        @Output() action = new EventEmitter<any>();

        onAction(item: any) {
            this.action.emit(item); // Emit event to parent
        }
    }

    Here, DumbComponent receives data from a parent (smart) component and emits an event when an action occurs.
    
    Key Differences Between Smart and Dumb Components

        Aspect	        Smart Components	        Dumb Components
        Role	        Manages state and logic	    Displays data and handles UI
        Data Source	    Fetches data (e.g., API)	Receives data via @Input
        Events	        Manages events	            Emits events via @Output
        Reusability	    Less reusable	            Highly reusable
    
    Benefits of Using Smart and Dumb Components
    
        Modularity: Clear separation of concerns makes it easier to test, maintain, and understand the application.
        Reusability: Dumb components can be reused across different parts of the application.
        Testability: Dumb components are simpler and easier to test as they don’t handle complex logic or state.
        This pattern can greatly improve the organization and scalability of your Angular applications by keeping components focused on specific tasks.



        */