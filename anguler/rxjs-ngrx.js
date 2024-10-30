/*

NgRx is a state management library for Angular applications, based on the principles of Redux (a popular state management pattern for JavaScript applications). It allows developers to manage the application state in a predictable and scalable way by using a unidirectional data flow. This is especially useful in large, complex applications where managing and sharing state between components can become challenging.

NgRx leverages RxJS to manage side effects and asynchronous tasks. The main components of NgRx include Actions, Reducers, Selectors, and Effects.


17. How do you handle errors in RxJS observables ?
RxJS provides several operators for handling errors in Observables. The two main operators for error handling are catchError and retry.
catchError: The catchError operator is used to catch errors that may occur in an Observable and handle them in a graceful way. It takes a function as an argument that returns another Observable or throws an error. If the function returns an Observable, the source Observable will be replaced with the returned Observable. If the function throws an error, the error will be propagated to the subscriber.
Here is an example:

 import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

of(1, 2, 3).pipe(
  map(num => {
    if (num === 2) {
      throw new Error('Oops!');
    }
    return num;
  }),
  catchError(err => {
    console.error(err.message);
    return of(4, 5, 6);
  })
).subscribe(
  num => console.log(num),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the map operator throws an error when it encounters the number 2. The catchError operator catches the error and logs the error message to the console. It then replaces the source Observable with a new Observable that emits the numbers 4, 5, and 6.

2. retry: The retry operator is used to automatically retry an Observable when it encounters an error. It takes an optional argument that specifies the maximum number of retries.
Here is an example:
 import { of } from 'rxjs';
import { map, retry } from 'rxjs/operators';

of(1, 2, 3).pipe(
  map(num => {
    if (num === 2) {
      throw new Error('Oops!');
    }
    return num;
  }),
  retry(2)
).subscribe(
  num => console.log(num),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the map operator throws an error when it encounters the number 2. The retry operator retries the Observable up to 2 times before propagating the error to the subscriber.




----------------
18. How do you implement backpressure in RxJS ?
Backpressure is a mechanism used in reactive programming to handle situations where an Observable is emitting data at a faster rate than it can be consumed. This can lead to issues such as high memory usage, slow processing, and even crashes. RxJS provides several operators for implementing backpressure, including buffer, throttle, debounce, sample, and switchMap.
buffer: The buffer operator collects emitted values from the source Observable into an array and emits the array when it reaches a specified size. It can be used to temporarily store emitted values until they can be processed.
Here is an example:
 import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

interval(100).pipe(
  bufferTime(1000)
).subscribe(
  values => console.log(values),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the interval Observable emits a value every 100 milliseconds. The bufferTime operator collects the emitted values into an array and emits the array every 1000 milliseconds.

2. throttle: The throttle operator throttles the emissions of the source Observable by discarding emissions that occur within a specified time window. It can be used to limit the rate of emissions from the source Observable.
Here is an example:
 import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

interval(100).pipe(
  throttleTime(1000)
).subscribe(
  num => console.log(num),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the interval Observable emits a value every 100 milliseconds. The throttleTime operator discards emissions that occur within 1000 milliseconds of the previous emission.

3. debounce: The debounce operator delays emissions from the source Observable until a specified time has elapsed since the last emission. It can be used to filter out rapid emissions and emit only the last value.
Here is an example:
 import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

fromEvent(document, 'keyup').pipe(
  debounceTime(1000)
).subscribe(
  event => console.log(event.target.value),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the fromEvent Observable emits a value every time a key is released on the document. The debounceTime operator delays emissions until 1000 milliseconds have elapsed since the last emission.

4. sample: The sample operator emits the most recent value from the source Observable at a specified time interval. It can be used to emit the most recent value at a regular interval, regardless of how many values are emitted.
Here is an example:
 import { interval } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

interval(100).pipe(
  sampleTime(1000)
).subscribe(
  num => console.log(num),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the interval Observable emits a value every 100 milliseconds. The sampleTime operator emits the most recent value at 1000 millisecond intervals.

5. switchMap: The switchMap operator can be used to limit the number of concurrent emissions from the source Observable.
Here’s an example of using switchMap to implement backpressure:
 import { from, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// An Observable that emits a value every 100ms
const source$ = interval(100);

// An Observable that processes values
const processValue = value => {
  return from(new Promise(resolve => {
    // Simulate processing time
    setTimeout(() => {
      console.log(`Processed value: ${value}`);
      resolve();
    }, 1000);
  }));
};

// Use switchMap to limit the number of concurrent emissions
const limitedSource$ = source$.pipe(
  switchMap(value => processValue(value), 2) // Only allow 2 concurrent emissions
);

limitedSource$.subscribe(
  value => console.log(`Received value: ${value}`),
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the source$ Observable emits a value every 100 milliseconds. The processValue function simulates processing time by returning a Promise that resolves after 1 second. The switchMap operator limits the number of concurrent emissions to 2, so only 2 values will be processed at a time. The limitedSource$ Observable is subscribed to and emits the processed values.
Using switchMap in this way ensures that the processing of values is limited to a specific number at a time, preventing the system from being overwhelmed with too many values to process at once.



19. Can you explain what is the purpose of using schedulers in RxJS, and give an example of a common scheduler ?
In RxJS, a scheduler is an object that provides a way to control the timing of when events are emitted by observables. Schedulers can be used to schedule tasks to be executed at a specific time, delay the execution of tasks, or specify on which thread the tasks should be executed. The purpose of using schedulers is to provide developers with more fine-grained control over the timing and execution of observables.
One common scheduler in RxJS is the observeOn() operator. The observeOn() operator is used to specify the scheduler on which an observable should emit its values.
Here’s an example:
 import { from } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';

const source$ = from([1, 2, 3]);

const async$ = source$.pipe(
  observeOn(asyncScheduler) // Emit values on the async scheduler
);

async$.subscribe(
  value => console.log(value), // Output: 1, 2, 3
  err => console.error(err),
  () => console.log('Complete')
);
In this example, the from() function is used to create an observable that emits the values 1, 2, and 3. The observeOn() operator is then used to specify that the observable should emit its values on the async scheduler, which will cause the values to be emitted asynchronously. The asyncScheduler is a common scheduler in RxJS that schedules tasks to be executed asynchronously using setTimeout().
Schedulers can also be used to delay the execution of tasks, control the order in which tasks are executed, or specify on which thread the tasks should be executed. Some common schedulers in RxJS include async, queue, animationFrame and immediate among others.



