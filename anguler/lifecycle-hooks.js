/* The sequence of log messages follows the prescribed hook calling order:

HOOK ORDER	LOG MESSAGE
constructor

1	OnChanges
2	OnInit
3	DoCheck
4	AfterContentInit
5	AfterContentChecked
6	AfterViewInit
7	AfterViewChecked
8	DoCheck
9	AfterContentChecked
10	AfterViewChecked
11	afterNextRender
12	afterRender
11	OnDestroy


In Angular, lifecycle hooks are methods that allow you to tap into key moments in a component's lifecycle, such as its creation, rendering, and destruction. Here’s a brief overview of each lifecycle hook along with the correct order of their execution:

1. constructor
    Description: Called when the component is instantiated. It's used to initialize the component's properties.
    Execution Order: First
    Usage Example:
    
    constructor() {
    console.log('constructor');
    }

2. ngOnChanges
    Description: Called whenever an @input property of the component changes. It's triggered before ngOnInit.
    Execution Order: Second (called multiple times if input properties change)
    Usage Example:
    
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);

    }
3. ngOnInit
    Description: Called once after the first ngOnChanges. It’s typically used for initialization that requires input properties to be set.
    Execution Order: Third
    Usage Example:

    ngOnInit() {
    console.log('ngOnInit');
    }

4. ngDoCheck
    Description: Called during every change detection run, immediately after ngOnChanges and ngOnInit. It allows you to detect and act on changes that Angular doesn't catch.
    Execution Order: Fourth (called multiple times during the component’s lifecycle)
    Usage Example:

    ngDoCheck() {
    console.log('ngDoCheck');
    }
5. ngAfterContentInit
    Description: Called once after Angular projects external content into the component's view, i.e., after <ng-content> is initialized.
    Execution Order: Fifth
    Usage Example:

    ngAfterContentInit() {
    console.log('ngAfterContentInit');
    }
6. ngAfterContentChecked
    Description: Called after every check of the projected content.
    Execution Order: Sixth (called multiple times)
    Usage Example:

    ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    }
7. ngAfterViewInit
    Description: Called once after the component's view (and child views) has been fully initialized.
    Execution Order: Seventh
    Usage Example: 

    ngAfterViewInit() {
    console.log('ngAfterViewInit');
    }
8. ngAfterViewChecked
Description: Called after every check of the component's view (and child views).
Execution Order: Eighth (called multiple times)
Usage Example:
typescript
Copy code
ngAfterViewChecked() {
  console.log('ngAfterViewChecked');
}
9. ngOnDestroy
Description: Called just before the component is destroyed. It’s typically used for cleanup, such as unsubscribing from observables or detaching event handlers.
Execution Order: Last
Usage Example:
typescript
Copy code
ngOnDestroy() {
  console.log('ngOnDestroy');
}
Correct Order of Execution:
constructor
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked (first call)
ngDoCheck (subsequent call)
ngAfterContentChecked (subsequent call)
ngAfterViewChecked (subsequent call)
ngOnDestroy

These lifecycle hooks allow you to manage the different phases of a component's life in Angular, giving you fine-grained control over its behavior and resource management.



---------------------------------
import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') content; 

  //ngAfterContentInit runs after the projected content is available, allowing the ChildComponent to access the projected content.
  ngAfterContentInit() {
    console.log('Projected content initialized:', this.content.nativeElement.textContent);
  }
    //In this case, the ngAfterContentChecked runs every time the content inside app-child changes, ensuring the content is updated or reacted upon.
    ngAfterContentChecked() {
    console.log('Projected content checked:', this.content.nativeElement.textContent);
  }
}

@Component({
  selector: 'app-parent',
  template: `<app-child><p #projectedContent>This is projected content</p></app-child>`
})
export class ParentComponent { }


--------------------
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p #childContent>Child component content</p>`
})
export class ChildComponent implements AfterViewInit {
  @ViewChild('childContent') content: ElementRef;

  //Here, ngAfterViewInit is triggered after the view containing the paragraph is fully initialized, and you can access the paragraph's content
  ngAfterViewInit() {
    console.log('View initialized:', this.content.nativeElement.textContent);
  }
//This hook is called after every change detection cycle that affects the view or child views, allowing you to keep track of dynamic updates in the view.
  ngAfterViewChecked() {
    console.log('View checked:', this.content.nativeElement.textContent);
  }
}


*/