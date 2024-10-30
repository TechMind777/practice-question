/*
1. Use trackBy in ngFor loops

  Angular’s ngFor directive is used to iterate over arrays and display the data on the page. Using the trackBy function will 
  improve the rendering of the list.

  // app.component.ts
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  })
  export class AppComponent {
  items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
  ];

  trackByFn(index, item) {
  return item.id;
  }
  }
  <!-- app.component.html -->

  <ul>
    <li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>
  </ul>
2. Use lazy loading

  Lazy loading modules improve the initial load time of the application by only loading the necessary components when they are 
  needed.

  // app-routing.module.ts

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
  ];
3. Avoid using ngIf with complex expressions

Instead of using a complex ngIf expression, use ngSwitch for better performance.

4. Use OnPush change detection strategy

  By using the OnPush change detection strategy, Angular will only check for changes when the input changes, rather than every time there is a change in the application.

  // app.component.ts

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class AppComponent {
    @Input() items: Item[];
  }
5. Use immutable data structures

  Immutable data structures improve the performance of the application by preventing unnecessary data manipulation.


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  })
  export class AppComponent {
    items = Object.freeze([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]);
  }


6. Use AOT compilation

  Ahead of Time (AOT) compilation improves the application’s performance by compiling the template code during the build process.

  ng build --aot

7. Use Angular Universal for server-side rendering

  Angular Universal allows the application to be rendered on the server, improving performance for users with slow connections.

  Check this article to learn more: https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7

  
8. Use RxJS for reactive programming

  RxJS allows developers to build reactive applications, where data flows between components seamlessly.

  Here’s an example of how to use RxJS to perform reactive programming in an Angular component:

  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';

  @Component({
    selector: 'app-example',
    template: `
      <h1>{{ count$ | async }}</h1>
      <button (click)="increment()">Increment</button>
    `
  })
  export class ExampleComponent implements OnInit {
    count$: Observable<number>;

    private count = 0;

    ngOnInit() {
      this.count$ = new Observable(subscriber => {
        setInterval(() => {
          this.count++;
          subscriber.next(this.count);
        }, 1000);
      });
    }

    increment() {
      this.count++;
    }
  }
  In this example, we’re creating a new Observable that will emit a new value (the current count) every second using the 
  setInterval function. We're then subscribing to this Observable in our component's template using the async pipe to display 
  the current count. Finally, we're also providing a button to increment the count manually.

  This is just a basic example of how to use RxJS in an Angular component. There are many more operators and features available 
  in RxJS that can be used for reactive programming, such as filtering, mapping, and combining observables.

9. Use NgRx for state management

  NgRx is a state management library for Angular that improves the performance of the application by providing a single source 
  of truth for the application state.

  Check this great article to learn more:

  https://medium.com/bb-tutorials-and-thoughts/how-to-implement-ngrx-store-in-angular-6ba275cd47fc

10. Use Web Workers

Web Workers run scripts in the background, improving the performance of the application by offloading CPU-intensive  tasks to a separate thread.

Conclusion:

By following these ten best practices, you can significantly improve the performance of your Angular application and provide a better user experience. Remember, performance optimization is an ongoing process, and it’s essential to continually monitor and test your application to ensure it’s running smoothly. I hope you found this guide helpful, and I encourage you to incorporate these best practices into your Angular development workflow to build faster & more efficient web applications.