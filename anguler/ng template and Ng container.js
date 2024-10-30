/*
 ng-template, ng-content, ng-container, and *ngTemplateOutlet

 These four Angular directives—ng-template, ng-content, ng-container, and *ngTemplateOutlet—are powerful tools for creating dynamic and reusable components. Let's break down each one:

1. ng-template
    Purpose: Defines a template that isn't rendered by default. It's a placeholder for content that Angular can use later when required.

    Use Case: Often used in conjunction with structural directives (like *ngIf or *ngFor) and with *ngTemplateOutlet.

    Example:

    html
    
    <ng-template #myTemplate>
        <p>This is a template</p>
    </ng-template>

    Here, the content inside ng-template will not be displayed until it is explicitly referenced or rendered using something like *ngIf or *ngTemplateOutlet.

2. ng-content
    Purpose: Acts as a placeholder for dynamic content. It allows the insertion of content from a parent component into a child component.

    Use Case: Used for creating reusable components where you want to project content from the parent component.

    Example:

    html
    
    <!-- child.component.html -->
    <div>
        <ng-content></ng-content>
    </div>
    html
    
    <!-- parent.component.html -->
    <child-component>
        <p>This content will be projected</p>
    </child-component>

    Here, <p>This content will be projected</p> will be rendered inside the div in the child component.

3. ng-container
    Purpose: Acts as a logical container that doesn't render an extra DOM element. It helps in grouping elements without adding additional wrappers to the DOM.

    Use Case: Useful when you need to apply directives (like *ngIf, *ngFor) to multiple elements without adding an extra HTML element to the DOM.

    Example:

    html 
    <ng-container *ngIf="isLoggedIn">
        <p>Welcome, user!</p>
        <button>Logout</button>
    </ng-container>

    Here, the ng-container groups the <p> and <button> elements, and both will be displayed only if isLoggedIn is true, without adding an extra container element.

4. *ngTemplateOutlet

    Purpose: Renders the content of an ng-template dynamically.

    Use Case: When you need to render different templates based on some condition or logic.

    Example:

    html
    
    <ng-template #firstTemplate>
        <p>First template</p>
    </ng-template>

    <ng-template #secondTemplate>
        <p>Second template</p>
    </ng-template>

    <div *ngTemplateOutlet="isFirst ? firstTemplate : secondTemplate"></div>

    Here, based on the value of isFirst, either the firstTemplate or secondTemplate will be rendered inside the div.

Summary
    -ng-template: Defines a reusable template.
    -ng-content: Projects content from parent to child components.
    -ng-container: Groups elements without adding an extra DOM element.
    -*ngTemplateOutlet: Renders a template dynamically.




Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. ... With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.	
	
With capturing, the event is first captured by the outermost element and propagated to the inner elements.	
	
Reactor Pattern is used to avoid the blocking of the Input/Output operations. ... When the I/O requests are to be generated, they get submitted to a demultiplexer, which handles concurrency in avoiding the blocking of the I/O mode and collects the requests in form of an event and queues those events.	
	
*/