/**
 * 1. ActivatedRoute
      Purpose: Represents the current active route in your Angular application. It gives access to the route parameters, query parameters, data, and the resolved data of the route that is currently active.

      Usage:

      - Access route parameters (e.g., :id in /profile/:id).
      - Access query parameters (e.g., ?filter=active).
      - Access the current fragment (e.g., #section1).
      - Access resolved data or static data associated with the route.


2. Router
        Purpose: A service that provides methods to navigate between routes programmatically. It can also be used to access the current navigation state.

        Usage:

        -Navigate to different routes.
        -Create URLs programmatically.
        -Access information about the current navigation.
3 ActivatedRouteSnapshot
    Purpose: Provides a snapshot of the current route at a particular point in time. Unlike ActivatedRoute, it does not change or update; it’s a static representation of the route when it was activated.

    Usage:

    -Often used in guards, resolvers, and components where a static snapshot of the route data is needed rather than a live observable.

4. RouterStateSnapshot
    Purpose: Represents the entire state of the router at a specific moment in time. This snapshot includes all activated routes from the root down to the active child routes.

    Usage:

    -Typically used in guards or resolvers to make decisions based on the entire state of the router.
    -Access the entire tree of routes, including nested routes.

5. Resolve
    Purpose: A service that provides data for a route. This data can be accessed in a component's constructor.

    Usage:

    -Access data provided in the route's resolve property.  

6. How to hit an API before the loading of the appComponent ?

    To hit an API before the loading of the AppComponent in Angular, you can use a combination of Angular's APP_INITIALIZER and a service to make the API call. This approach allows you to delay the application's bootstrap process until the API call is completed.
    
    Step-by-step Guide:
    Create a Service to Handle the API Call:
    - Create a new service file (e.g., api.service.ts) and import the HttpClient module from Angular's HttpClientModule.
    - Implement the HttpClient in the service class, making a GET request to the API endpoint you want to call.
    - Return the response data as an Observable or Promise from the API call method.
    Create an AppInitializer to Load the API Data:
    - Create a new service file (e.g., app-initializer.service.ts) and


 Summary of Differences:
  - ActivatedRoute: A live, observable-based object representing the current route. Use it when you need to respond to changes in route parameters, query parameters, or other route-related data.
  - Router: A service for navigating between routes programmatically. Use it when you need to control the navigation logic in your application.
  - ActivatedRouteSnapshot: A static snapshot of the current route. Use it when you need a fixed representation of the route's state, typically in guards or resolvers.
  - RouterStateSnapshot: A static snapshot of the entire router state at a given moment. Use it when you need to analyze or make decisions based on the entire routing tree.
  
 When to Use Each:
  - ActivatedRoute: Use this in components to reactively access route-related data.
  - Router: Use this in services or components to programmatically navigate or control navigation.
  - ActivatedRouteSnapshot: Use this in resolvers, guards, or where you need a consistent snapshot of the route's state.
  - RouterStateSnapshot: Use this in guards or other route-related services where the entire state of the router is important.
 
 
 
 
 



 * What is Routing in Angular?
    Routing in Angular is the mechanism that allows you to navigate between different views or components within a single-page application (SPA). It enables you to define paths (URLs) that correspond to different components, so users can navigate through the application by clicking links or entering URLs in the browser's address bar.
      const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
        { path: '**', component: PageNotFoundComponent }        // Wildcard route for 404
      ];

      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }

      <router-outlet></router-outlet>
      <a [routerLink]="['/home']">Home</a>

      constructor(private route: ActivatedRoute) {}
      const id = this.route.snapshot.paramMap.get('id');


      Summary

        - Routing in Angular is essential for creating a single-page application where different components are displayed based on the URL path.
        - Routes map paths to components.
        - RouterModule is used to configure routing.
        - RouterOutlet renders the selected component based on the active route.
        - Route Guards and Lazy Loading are advanced features that add control and efficiency to your routing strategy.


========ActivatedRoute   =======================================================================
Purpose: ActivatedRoute is a service that provides access to information about the route associated with a component that is currently loaded. It contains the route's parameters, query parameters, static data, and more.

  -snapshot: Provides a snapshot of the route at the time the component was initialized. It contains static data.
  -params: An observable of the route parameters, such as dynamic parts of the URL.
  -queryParams: An observable of the query parameters.
  -data: An observable of static and resolved data for the route.
  -url: An observable of the URL segments of the route.
  -paramMap: Provides a map of the route parameters.
  -queryParamMap: Provides a map of the query parameters.

  constructor(private route: ActivatedRoute) {}

   // Access route parameters
    this.heroId = this.route.snapshot.paramMap.get('id');
    
    // Access query parameters
    this.route.queryParams.subscribe(params => {
      console.log(params['filter']);
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView();
      }
    });

    


Usage: You use ActivatedRoute within a component to access data specific to the current route.

======Router ====================================================================================
Purpose: Router is a service that provides navigation and URL manipulation capabilities. It allows you to navigate between different routes programmatically and access information about the router state.

Usage: You use Router to programmatically navigate to a different route, access the current route state, or listen to route events.

Common Methods:

  navigate(): Navigates to a specified route by path or URL.
  navigateByUrl(): Navigates to a route by URL.
  createUrlTree(): Creates a UrlTree that can be used with the navigateByUrl() method.
  events: An observable that emits events during the router lifecycle (e.g., NavigationStart, NavigationEnd).

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  goToHeroDetail() {
    this.router.navigate(['/detail', 42]); // Navigate to /detail/42

    //  this.activatedRoute.paramMap.subscribe(params => {
    //   const id = params.get('id'); // 'id' here is the dynamic part of the route
    //   console.log(id); // Output will be '12' for the URL '/profile/12'
    // });


    this.router.navigate(['/detail',  {p1: 21, p2: 33} ]); // Navigate to /detail;p1=21;p2=33

    // this.activatedRoute.paramMap.subscribe(params => {
    //   const p1 = params.get('p1'); // Retrieves the value of p1
    //   const p2 = params.get('p2'); // Retrieves the value of p2
    //   console.log(p1, p2); // Output will be '21' and '33' for the URL '/profile;p1=21;p2=33'
    // });


    // this.activatedRoute.paramMap.subscribe(params => {
    //   const paramJson: any = {}; // Initialize an empty object

    //   params.keys.forEach(key => {
    //     paramJson[key] = params.get(key); // Add each param to the JSON object
    //   });

    //   console.log('Matrix Parameters as JSON:', paramJson);
    //   // Example output: { p1: "21", p2: "33" }
    // });


  }

    this.router.navigate(['/details'], { queryParams: { filter: 'active' } });

    
  const tree: UrlTree = this.router.createUrlTree(['/detail', 42], {
    queryParams: { filter: 'active' }
  }); 


  const tree: UrlTree = this.router.createUrlTree(['/detail', id], {
    queryParams: { filter: 'active' },
    fragment: 'section1'
  });
  this.router.navigateByUrl(tree); // Navigate to /detail?filter=active

  //  this.activatedRoute.queryParamMap.subscribe(params => {
  //   const filter = params.get('filter'); // Retrieves the value of filter
  //   console.log(filter); // Output will be 'active' for the URL '/detail/42?filter=active'
  // });


  <a [routerLink]="['/home']">Go to Home</a>
  <a [routerLink]="['/detail', 42]">Go to Hero 42</a>
  <a [routerLink]="['/heroes']" [queryParams]="{ filter: 'active' }">Active Heroes</a>


   this.router.navigate(['/detail', id]);
  this.router.navigateByUrl('/home');


====Location service ==============================================================================
Description: The Location service is used to interact with the browser's URL without triggering navigation through Angular's router. It provides methods to navigate back and forth in the browser's history.


Usage: This is useful for simpler navigation tasks, like going back to the previous page, without the need to navigate to a specific Angular route.

  import { Location } from '@angular/common';

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }



==========fragment ==================================================================================
In Angular, a fragment is a part of a URL that typically refers to a specific section within a page. It is denoted by a # symbol followed by an identifier. When a URL with a fragment is accessed, the browser automatically scrolls to the element with the corresponding id attribute on the page.

Example of a Fragment in a URL
  Consider the following URL: http://example.com/page#section1
    http://example.com/page: The base URL.
    #section1: The fragment that refers to an element with id="section1" on that page.

When this URL is visited, the browser scrolls to the element with id="section1".


    const tree: UrlTree = this.router.createUrlTree(['/detail', id], {
      queryParams: { filter: 'active' },
      fragment: 'section1'
    });
    this.router.navigate(['/page'], { fragment: 'section1' });

  <a [routerLink]="['/page']" fragment="section1">Go to Section 1</a>


  this.activatedRoute.fragment.subscribe(fragment => {
    console.log(fragment); // Output will be 'section1' for the URL '/detail/42#section1'
    // You can also use this fragment to scroll to a specific section
    document.getElementById(fragment)?.scrollIntoView();
  });
===========ActivatedRouteSnapshot ======================================================================
=========================================================================
===========RouterStateSnapshot ====================================================================
=========================================================================
=======================================================================================================
9. How to hit an API before the loading of the appComponent ?

  The package @angular/router has the Resolve property for routes. So you can easily resolve data before rendering a route view. The following example implements a resolve() method that retrieves the data needed to activate the requested route.

  @Injectable({ providedIn: 'root' })
  export class HeroResolver implements Resolve {
    constructor(private service: HeroService) {}

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable|Promise|any {
      return this.service.getHero(route.paramMap.get('id'));
    }
  }

Here, the defined resolve() function is provided as part of the Route object in the router configuration:
 @NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: HeroDetailComponent,
        resolve: {
          hero: HeroResolver
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

------------use resolve hero data
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hero = data.hero;
    });
  }
----------

-----------------------------------------------------------------------------------\
How to hit an API before the loading of the appComponent ?


  To hit an API before the loading of the AppComponent in Angular, you can use a combination of Angular's APP_INITIALIZER and a service to make the API call. This approach allows you to delay the application's bootstrap process until the API call is completed.

  Here's how you can achieve this:

  Step-by-Step Guide
  Create a Service to Handle the API Call:

    First, create a service that will handle the API call. This service will contain a method that makes the HTTP request and returns a Promise or Observable.
  
    typescript
      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { Observable } from 'rxjs';

      @Injectable({
        providedIn: 'root'
      })
      export class AppInitService {
        constructor(private http: HttpClient) { }

        loadInitialData(): Observable<any> {
          // Replace with your actual API endpoint
          return this.http.get('https://api.example.com/initial-data');
        }
      }
    
    Configure APP_INITIALIZER in the AppModule:

  APP_INITIALIZER is a special token in Angular that allows you to specify a function to be executed during the application startup process. This function can return a Promise, and Angular will wait for the promise to resolve before continuing the bootstrap process.
  typescript
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { HttpClientModule } from '@angular/common/http';
      import { AppComponent } from './app.component';
      import { AppInitService } from './app-init.service';
      import { APP_INITIALIZER } from '@angular/core';

      export function initializeApp(appInitService: AppInitService) {
        return () => appInitService.loadInitialData().toPromise();
      }

      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          HttpClientModule  // Ensure HttpClientModule is imported
        ],
        providers: [
          AppInitService,
          {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService],
            multi: true
          }
        ],
        bootstrap: [AppComponent]
      })
      
      export class AppModule { }

  Using the Loaded Data in Your App:

  After the API call is complete, you can store the retrieved data in a service or some shared state, which can then be accessed in your AppComponent or any other component as needed.
  
  typescript
    import { Component, OnInit } from '@angular/core';
    import { AppInitService } from './app-init.service';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {
      constructor(private appInitService: AppInitService) {}

      ngOnInit() {
        // Now you can access the data loaded by AppInitService
      }
    }


  Summary
    -Service: Create a service that makes the API call.
    -APP_INITIALIZER: Use APP_INITIALIZER in the AppModule to delay the app's bootstrap process until the API call is completed.
    -Initialization Function: The function passed to APP_INITIALIZER returns a Promise or Observable that resolves after the API call is complete.
  
    By using APP_INITIALIZER, Angular will wait for your API call to complete before loading the AppComponent, ensuring that any required data is available before the app starts.

    Summary of the Code:
    typescript 
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AppInitService],
        multi: true
      }
        
      - Purpose: This configuration tells Angular to execute the initializeApp function during the application startup. The initializeApp function relies on AppInitService to load necessary data or perform other tasks before the application is fully initialized.
      - Execution: initializeApp returns a function (e.g., a function that loads initial data) that Angular will wait to complete before bootstrapping the app.
      - Dependencies: AppInitService is injected into the factory function, so it can be used to perform initialization tasks.
      - Multiple Initializers: The multi: true flag ensures that this APP_INITIALIZER can coexist with others, allowing for multiple initialization routines to run in parallel.





----------------------------------------
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<any> {
    // API call before route loads the component
    return this.http.get('https://api.example.com/data');
  }
}






const routes: Routes = [
  {
    path: 'data',
    component: DataComponent,
    resolve: { data: DataResolver } // Resolver is associated here
  },
];



@Component({
  selector: 'app-data',
  template: `<div *ngIf="data">{{ data }}</div>`,
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the resolved data
    this.data = this.route.snapshot.data['data'];
  }
}
  

  */