/**
 * 
 * This can be achieved by using forkJoin, this operator takes an array of observables and waits for all the source observables to complete. Once they all complete, it emits an array of the last emitted values from each observable.
 * 
 * 
 *  import { forkJoin, of, throwError } from 'rxjs';

 const observables = [
     of(1,2,3).pipe(delay(500)), from([10,11,12])
  ]

  const $forkJoin = forkJoin(observables);

  $forkJoin.subscribe(data=>{
    console.log('forkjoin data', data); // [3,12] as forkJoin will return last emitted values of each observable
  });


  In this example, forkJoin takes an array of observables, including two observables that emit ‘A’ and ‘B’ respectively after a delay, and an observable that throws an error after a delay. forkJoin waits for all the observables to complete, and once they complete, it emits an array of the last emitted values from each observable. However, if any of the observables in forkJoin throws an error, the error will be propagated to the error callback of the subscribe method.
 
 ------------------------------------------------------------------------------------------
https://copyprogramming.com/howto/multiple-sequential-api-calls-using-rxjs-in-angular-12-app



 Multiple sequential API calls using RXJS in Angular 12 app
Question:
Upon receiving a response from the initial API call, it is necessary to make two additional API calls simultaneously. After obtaining the responses for all API calls, the resulting observables (obs2$ and obs3$) must be sent to the subcomponent.

Code is something like:

ngOnInit(): void {
    this.obs1$ = this.getData1();

    this.obs2$ = this.obs1$.pipe(
        concatMap(() => {
            return this.getData2();
        })
    );
    this.obs3$ = this.obs1$.pipe(
        concatMap(() => {
            return this.getData3();
        })
    );
}
private getData1(): Observable {
    return this.service.getData1('/api/get_1').pipe(
        tap((response: string) => {
            this.id = response
        })
    );
}
private getData2(): Observable {
    return this.service.getData2('/api/get_2/id='+this.id).pipe(
        tap((response: string) => {
            ...
            this.flag2 = true;
        })
    );
}

private getData3(): Observable {
    return this.service.getData3('/api/get_3/id='+this.id).pipe(
        tap((response: string) => {
            ...
            this.flag3 = true;
        })
    );
}
 ----------------
 The problem is that the API call for getData1 is being invoked twice. Is there a method to execute it only once, preferably without requiring flags (specifically flag 2 and flag 3)? I attempted to resolve the issue, but my attempt was unsuccessful.

ngOnInit(): void {
    this.obs1$ = this.getData1();
    this.obs1$.pipe(first()).subscribe(() => {
        this.obs2$ = this.getData2();
        this.obs3$ = this.getData3();
    });
}
  */