/**
 * 

9. What are Directives in Angular ?

    Directives are attributes that allow the user to write new HTML syntax specific to their applications. They execute whenever the Angular compiler finds them in the DOM. Angular supports three types of directives.  

    Directives are special instructions or commands that tell a framework or tool how to handle certain parts of your code or markup. They modify the behavior, structure, or appearance of elements in a program or web page.

    For example:

        - In a web framework like Angular, directives can add, remove, or change the way elements are displayed on the page.
        - In a templating engine, directives might control loops, conditionals, or how data is inserted into the HTML.
    
    So, directives are like small pieces of code that guide how something should behave or look.

    In Angular, a directive is a class that can modify the behavior or appearance of DOM elements. Angular directives are a core feature of the framework and are categorized into three main types:

    - Component Directives : These are the most common directives in Angular, and they define components. Components are directives with a template.
    - Structural Directives : These directives change the structure of the DOM by adding, removing, or manipulating elements. Examples include *ngIf, *ngFor, and *ngSwitch.
    - Attribute Directives : These change the appearance or behavior of an element, component, or another directive. An example is ngClass or a custom directive that changes the background color.
 
    --------------Attribute Directives
    ng generate directive highlight

    import { Directive, ElementRef, HostListener, Input } from '@angular/core';

    @Directive({
        selector: '[appHighlight]'  // This is how the directive will be used in HTML
    })
    export class HighlightDirective {

        @Input() highlightColor: string = 'yellow'; // Default color is yellow

        constructor(private el: ElementRef) {}

        // Mouse enters the element
        @HostListener('mouseenter') onMouseEnter() {
            this.highlight(this.highlightColor || 'yellow');
        }

        // Mouse leaves the element
        @HostListener('mouseleave') onMouseLeave() {
            this.highlight('');
        }

        private highlight(color: string) {
            this.el.nativeElement.style.backgroundColor = color;
        }
    }
--------------------- Structural Directives
ng generate directive unless

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'  // The directive will be used as *appUnless in templates
})
export class UnlessDirective {

  // Condition input for showing/hiding the element
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // If condition is false, display the template
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // If condition is true, remove the element from the DOM
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

}


 */