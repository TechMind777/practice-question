/*
---------BehaviorSubject vs. Subject-------------------

Observable?

    An Observable is a data stream that can emit values over time, allowing for reactive programming. It's similar to promises but more powerful because it can:

        - Emit multiple values over time (streams of data).
        - Be canceled before completing.
        - Handle complex asynchronous operations.

    An Observable can emit three types of notifications:

        - Next: Emits the next value in the sequence.
        - Error: Emits an error and stops further emissions.
        - Complete: Emits that the stream is complete and no further values will be emitted.

        
BehaviorSubject

    Initial Value: A BehaviorSubject requires an initial value when it is created. This value is emitted immediately to any new subscribers, even if no subsequent next calls have been made.

    State Management: BehaviorSubject holds the current value in memory and always provides the latest value to any new subscribers. This is particularly useful in scenarios where you need to track and provide the latest state or data to new subscribers.


        // Creating a BehaviorSubject with an initial value of null
        LoggedUserSrc: any = new BehaviorSubject(null);

        // Converting BehaviorSubject to an Observable
        LoggedUser = this.LoggedUserSrc.asObservable();

        // Subscribing to the Observable
        this.LoggedUser.subscribe(value => console.log('Logged User:', value));

        // Emitting a new value
        this.LoggedUserSrc.next('User1');


Subject

    No Initial Value: A Subject does not require an initial value. It only starts emitting values when the next method is called.

    No State Retention: Subject does not store the current value. If a subscriber joins after a value has been emitted, it will not receive that value. It only receives new values emitted after it has subscribed.

    Usage Example:

        // Creating a Subject with no initial value
        const mySubject = new Subject<number>();

        // Subscribing to the Subject
        mySubject.subscribe(value => console.log('Subscriber 1:', value));

        // Emitting a value
        mySubject.next(1);  // Subscriber 1 receives the value 1

        // Adding a new subscriber after the first value is emitted
        mySubject.subscribe(value => console.log('Subscriber 2:', value));

        mySubject.next(2);  // Both Subscriber 1 and Subscriber 2 receive the value 2

Summary of Differences
    Initial Value:

        BehaviorSubject: Requires and holds an initial value.
        Subject: Does not have an initial value.

    State Management:

        BehaviorSubject: Retains the latest emitted value and provides it to new subscribers.
        Subject: Does not retain any values; new subscribers only receive future values.

    Use Cases:

        BehaviorSubject: Ideal for managing state and ensuring that new subscribers get the current state immediately.
        Subject: Ideal for broadcasting events or data where the past values are not important to new subscribers.

        LoggedUserSrc: any = new BehaviorSubject(null);
        LoggedUser = this.LoggedUserSrc.asObservable();


        // Creating an observable that emits values 1, 2, 3 over time
        const myObservable = new Observable<number>(subscriber => {
            subscriber.next(1); // Emit value 1
            subscriber.next(2); // Emit value 2
            subscriber.next(3); // Emit value 3
            subscriber.complete(); // Signal that the observable is complete
        });


Subscribing to an Observable
    myObservable.subscribe(
    value => console.log('Received value:', value), // onNext callback
    error => console.error('Error occurred:', error), // onError callback
    () => console.log('Observable complete') // onComplete callback
    );

 async Observable

    Key Concepts:
        Observable: It represents a stream of data that can be subscribed to. It is the foundation of reactive programming in Angular.
        Subscriber: A consumer that "subscribes" to the observable to receive emitted data.
        async pipe: A built-in Angular pipe that automatically subscribes to an observable and returns the emitted value. It also handles unsubscription when the component is destroyed, which prevents memory leaks.


        constructor(private http: HttpClient) { }
         ngOnInit(): void {
            this.data$ = this.http.get('https://api.example.com/data'); // No need to subscribe manually
        }


        <div *ngIf="data$ | async as data; else loading">
            <pre>{{ data | json }}</pre>
        </div>
        <ng-template #loading>
            <p>Loading...</p>
        </ng-template>

        When to use the async pipe vs. manual subscription:
            Use async pipe: For simpler scenarios where you need to display the result in the template and automatically handle unsubscription.
            Manual subscription: When you need more control, such as when performing additional logic upon data reception or handling errors programmatically.

        Key Takeaways:
            - Angular's Observable and async pipe provide a clean way to handle asynchronous data in templates.
            - Use HttpClient to easily fetch data from an API as an Observable.
            - The async pipe automatically manages subscriptions, making code simpler and preventing memory leaks.






        */

