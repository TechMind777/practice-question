// To get the previous value from a BehaviorSubject in an Angular service or component, you can use the pairwise operator in combination with the LoggedUser Observable. This will allow you to track both the previous and current values whenever LoggedUserSrc emits a new value.


import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<div></div>',
})
export class AppComponent {
  // BehaviorSubject to hold the current logged-in user
  LoggedUserSrc: any = new BehaviorSubject<any>(null);

  // Convert BehaviorSubject to an Observable
  LoggedUser = this.LoggedUserSrc.asObservable();

  constructor() {
    // Subscribe to the LoggedUser Observable and use pairwise to get the previous and current values
    this.LoggedUser.pipe(
      startWith(null),  // Emit a null as the initial value for comparison
      pairwise()
    ).subscribe(([previous, current]) => {
      console.log('Previous user:', previous);
      console.log('Current user:', current);

      if (previous && current) {
        if (previous.name !== current.name) {
          console.log(`User changed from ${previous.name} to ${current.name}`);
        } else {
          console.log('User remains the same:', current.name);
        }
      }
    });

    // Simulate user changes
    this.LoggedUserSrc.next({ name: 'John Doe', id: 1 });
    this.LoggedUserSrc.next({ name: 'Jane Smith', id: 2 });
    this.LoggedUserSrc.next({ name: 'John Doe', id: 1 });
  }
}

/*
Previous user: null
Current user: { name: 'John Doe', id: 1 }
Previous user: { name: 'John Doe', id: 1 }
Current user: { name: 'Jane Smith', id: 2 }
User changed from John Doe to Jane Smith
Previous user: { name: 'Jane Smith', id: 2 }
Current user: { name: 'John Doe', id: 1 }
User changed from Jane Smith to John Doe

*/