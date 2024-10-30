/*
In Angular, particularly when working with RxJS (Reactive Extensions for JavaScript), operators like switchMap, mergeMap, forkJoin, combineLatest, concatMap, and exhaustMap are used to handle and manage multiple asynchronous operations, such as HTTP requests. Here's an explanation of each operator, along with their behavior in the event of a failure:

1. switchMap
  Description: switchMap is an RxJS operator that maps each value from the source Observable into an inner Observable, then flattens the inner Observables. If a new inner Observable is emitted before the previous one completes, switchMap unsubscribes from the previous one and subscribes to the new one.
  Use Case: Ideal when you want to cancel previous requests or operations when a new one is initiated, like search suggestions.
  Failure Handling: If an inner Observable fails, the outer Observable also fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    switchMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: If a new value comes in before the current request completes, the current request is canceled, and a new request is made.

2. mergeMap (also known as flatMap)
  Description: mergeMap maps each value from the source Observable into an inner Observable, then flattens all the inner Observables into a single Observable, allowing multiple active inner Observables concurrently.
  Use Case: Useful when you need to perform multiple asynchronous operations in parallel and collect all the results.
  Failure Handling: If any inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    mergeMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: All emitted inner Observables run concurrently, and their results are emitted in the order they complete.

3. forkJoin
  Description: forkJoin is a static RxJS operator that takes multiple Observables and returns an Observable that emits an array of the last emitted values from each of the input Observables once all of them have completed.
  Use Case: Ideal for situations where you need all results from multiple parallel requests before proceeding.
  Failure Handling: If any Observable fails, the entire forkJoin Observable fails, and no values are emitted.
  Example:
  typescript
  Copy code
  forkJoin([
    this.http.get('/api/data1'),
    this.http.get('/api/data2')
  ]).subscribe(results => console.log(results));
  Behavior: Only emits when all Observables complete. If any Observable fails, the entire operation fails.

4. combineLatest
  Description: combineLatest is a static RxJS operator that takes multiple Observables and returns an Observable that emits an array of the latest values from each of the input Observables every time any of them emits.
  Use Case: Useful when you want to react to the latest values from multiple Observables whenever any of them changes.
  Failure Handling: If any Observable fails, the entire combineLatest Observable fails.
  Example:
  typescript
  Copy code
  combineLatest([
    this.http.get('/api/data1'),
    this.http.get('/api/data2')
  ]).subscribe(results => console.log(results));
  Behavior: Emits whenever any input Observable emits, combining the latest values from all Observables.

5. concatMap
  Description: concatMap maps each value from the source Observable into an inner Observable, then flattens them in a serial (sequential) manner, waiting for each inner Observable to complete before moving on to the next one.
  Use Case: Useful when the order of execution matters and you want to ensure that requests or operations are performed one after the other.
  Failure Handling: If any inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    concatMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: Executes each request in order, waiting for the previous one to complete before starting the next.
  
6. exhaustMap
  Description: exhaustMap maps each value from the source Observable into an inner Observable, but ignores any new source values until the current inner Observable completes.
  Use Case: Useful in scenarios where you want to ignore new emissions until the current operation is done, like handling button clicks to prevent multiple submissions.
  Failure Handling: If the inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    exhaustMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: If a new value is emitted while the current request is still ongoing, the new value is ignored.


What Happens if Any Request Fails?
  switchMap: If the inner Observable fails, the entire chain fails, and no further Observables are subscribed to.
  mergeMap: If any inner Observable fails, the entire chain fails, and subsequent Observables do not emit.
  forkJoin: If any of the participating Observables fail, the entire forkJoin fails, and no results are emitted.
  
Summary
  switchMap: Switches to a new Observable and cancels the previous one. If an inner Observable fails, the entire operation fails.
  mergeMap: Merges multiple Observables concurrently. If any fails, the whole operation fails.
  concatMap: Maps and executes Observables sequentially. Fails if any Observable fails.
  exhaustMap: Ignores new emissions until the current Observable completes. Fails if the inner Observable fails.
  
  forkJoin: Waits for all Observables to complete and emits the final result. Fails if any Observable fails.
  combineLatest: Emits the latest values from all Observables whenever any of them emits. Fails if any Observable fails.
  

  
  mergeMap :no delay for out , out put give simultaneously
  flatMap: no delay for out , out put give simultaneously (old version of mergeMap )
  concatMap : run one by one , return previous is compleat, return all values
  switchMap : run one by one , wait for previous complete, and cancel previous one, return leatest value , single value
   exhaustMap: run one by one ,all next obsebable ignore, fist observable reurn value only 
   ----------------------------
1. mergeMap and flatMap
  Behavior: These operators map each emitted value to an inner Observable and then merge the output of these inner Observables.
  Error Handling: If any of the inner Observables throws an error, the error is immediately propagated downstream, and the entire Observable sequence is terminated. The error effectively cancels all other active inner Observables.
2. concatMap
  Behavior: This operator maps each emitted value to an inner Observable and then concatenates the output of these inner Observables, ensuring the sequence is maintained.
  Error Handling: Similar to mergeMap, if an error occurs in any inner Observable, it is immediately propagated downstream, terminating the sequence. The error halts further emissions and processing.
3. switchMap
  Behavior: This operator maps each emitted value to an inner Observable but unsubscribes from the previous inner Observable if a new value is emitted, switching to the latest Observable.
  Error Handling: If an error occurs in the current active inner Observable, it is immediately propagated downstream, and the entire Observable sequence is terminated. No further switches or emissions occur after the error.
4. exhaustMap
  Behavior: This operator maps each emitted value to an inner Observable but ignores new emissions until the current inner Observable completes.
  Error Handling: If the current inner Observable throws an error, that error is propagated downstream, and the sequence is terminated. The error stops the processing of any further emissions.


  1. forkJoin
  Behavior: forkJoin waits for all of its source Observables to complete, then combines their last emitted values into a single array or object.

  Error Handling:
  If any source Observable throws an error: The error is immediately propagated downstream, and forkJoin terminates without emitting any values. This means that even if other source Observables have successfully completed, the error will prevent forkJoin from emitting the combined result.
  Summary: forkJoin fails immediately if any of its source Observables fails, and no value is emitted.

2. combineLatest
  Behavior: combineLatest emits an array or object of the latest values from each source Observable whenever any of them emits a new value. This happens after each source Observable has emitted at least one value.

  Error Handling:
  If any source Observable throws an error: The error is immediately propagated downstream, and the entire combineLatest sequence terminates. No further emissions occur, even if some source Observables are still active.
  
  Summary: combineLatest also fails immediately if any of its source Observables fails, terminating the entire sequence.
------------------------------------------------------------  
   
  foo$ = from([1,2,3,4,5]).pipe(map((d)=> d*10)) //\

output
10
20
30
40
50
----------------------------------------------------------
  const example = (operator:any)=>{
      from([0,1,2,3,4])
        .pipe(operator((x:any)=> of(x).pipe(delay(500) ) ))
        .subscribe(
          console.log, 
          ()=> { },
          ()=> console.log(`${operator.name} Completed`)
        );
    }
      
    example(mergeMap)
    outplut: no delay for out , out put give simultaneously
    0
    1
    2
    3
    4
    mergeMap Completed

    throw Error
      - Error Propagation: If a mergeMap observable throws an error, the error will be propagated to the outer observable's error handler.
      - Other Observables Continue: Other inner observables that are currently subscribed to will continue to emit values.
      - Subscription Cancellation: The subscription to the observable that threw the error will be canceled.
--------------------------------------------------------
    example(flatMap)(old version of mergeMap)

    output: no delay for out , out put give simultaneously
    0
    1
    2
    3
    4
    flatMap Completed
--------------------------------------------------------------------
    example(concatMap)
    output: return one by one , return previous is compleat
    0
    1
    2
    3
    4
    concatMap Completed

    
    example(switchMap)
    output: return one by one ,wait for previous, and cancel previous one
    4
    switchMap Completed

    
    example(exhaustMap)
    outplut: run one by one ,all next obsebable ignor, and cancel previous one
    0
    exhaustMap Completed




   ----------------------------------
   users = [
   {id:1, name: 'John', isActive: true},
   {id:2, name: 'namwen', isActive: true },
   {id:3, name: 'Peter', isActive: false},
   {id:4, name: 'Jane', isActive: true},
   {id:5, name: 'Tom', isActive: false}
   ]

  users$ = of(users); // create observable stream.
  usersnames$ = this.users$.pipe(map((users) => users.map(user=>user.name))); // create  .
  Filterusersnames$ = this.users$.pipe(filter((users) => users.every(user=>user.isActive))); // create  .
    
  <li *ngFor="let user of users$ | async">{{ user.name }} (Active: {{ user.isActive }})</li>
  <li *ngFor=" user$ | async as user">{{ user.name }} (Active: {{ user.isActive }})</li>
   


  documentClicl$ = fromEvent(document, 'click');

  ngOnInit();void{
  this.documentClicl$.subscribe(e=>{
    console.log('Document Clicked', e);
    // perform actions here
  })
  }


  data$ = combineLatest([
  this.users$,
  this.username,
  this.filterUsersnames$
  ]).pipe(([users, username.fiteredUsers]) =>({
    users, username.fiteredUsers
    }))


    */