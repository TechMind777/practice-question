/**
 * 14. What is AuthGuard in Angular ?
In Angular, Auth Guards are used to protect routes and determine whether a user is allowed to access a specific route or not based on their authentication status or user role. Auth Guards are implemented as services and are typically used in conjunction with Angular’s routing system.
Here’s an example to demonstrate how Auth Guards work in Angular:

Create an Auth Guard service:

    1. CanDeactivate
      Purpose: This guard is executed when navigating away from the current route. It checks whether the current component can be deactivated (e.g., leaving a form with unsaved changes).
      Execution Time: Runs before any other guards when navigating away from a route.
      Order: First in the sequence because it concerns the current route.
    2. CanLoad
      Purpose: This guard is executed when attempting to load a lazy-loaded module. It prevents the module from being loaded if the guard returns false.
      Execution Time: Runs before the module is loaded. If the guard returns false, the module is not loaded at all.
      Order: Second because it checks if the lazy-loaded route can be loaded.
    3. CanActivateChild
      Purpose: This guard is applied to child routes and is checked when navigating to any child routes of a parent route.
      Execution Time: Runs before CanActivate, but only if the route has child routes.
      Order: Third, it runs after checking if the module can be loaded but before the route is activated.
    4. CanActivate
      Purpose: This guard checks whether a route can be activated (e.g., whether the user is authenticated to access a certain route).
      Execution Time: Runs after CanLoad and CanActivateChild. It decides whether the route can be entered.
      Order: Last, it runs after all other checks and is the final guard before the route is activated.
    5. Resolve
      Purpose: This guard is used to resolve data before rendering a route view. The Resolve property for routes is used to resolve data before rendering a route view.
      Execution Time: Runs before the route is activated. It is used to resolve data before rendering a route view.
      Order: Last, it runs after all other checks and is the final guard before the route is activated.


*/
 import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check the user's authentication status or role
    const isAuthenticated = /* your authentication check */;
    const userRole = /* get user role */;

    if (isAuthenticated && userRole === 'admin') {
      return true;  // Allow access to the route
    } else {
      this.router.navigate(['/login']);  // Redirect to login page or unauthorized page
      return false; // Deny access to the route
    }
  }
}
// 2. Define routes in the app module:
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// In this example, we have three routes: the home route, the admin route, and the login route. The admin route is protected by the AuthGuard by setting the canActivate property to [AuthGuard].
// 3. Implement the protected component:
/* 
 import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: 'Admin Page'
})
export class AdminComponent { }

// 4. Use the Auth Guard in the template or component:
//  <!-- Example of using Auth Guard in a template -->
<button [routerlink]="['/admin']" *ngif="isAuthenticated">Go to Admin</button>

// <!-- Example of using Auth Guard in a component -->
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some-component',
  template: `
    <button (click)="goToAdmin()" *ngif="isAuthenticated">Go to Admin</button>
  `
})
export class SomeComponent {
  isAuthenticated: boolean;

  constructor(private router: Router) {}

  goToAdmin() {
    if (this.isAuthenticated) {
      this.router.navigate(['/admin']);
    }
  }
}
    
*/