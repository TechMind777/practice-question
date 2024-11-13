/*

What is Event Loop?
    The event loop is that allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded and by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background
 

What does it mean when we say JavaScript is single-threaded?
    It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel.

How do Event loops work?

    Call Stack:
        JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).

    Callback Queue:
        Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.

    Event Loop:
        The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

    Execution:
        The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.

    Callback Execution:
        When an asynchronous operation is complete, its callback is placed in the callback queue.

    Repeat:
        The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.


    
Example: In this example, a JavaScript script demonstrates synchronous blocking behavior. It starts by logging “Before delay,” then uses a function delayBySeconds to create a delay of 5 seconds using a busy-wait loop. The script then logs “After delay” after the 5-second delay completes.



Heap memory
    Data stored randomly and memory allocated
Stack memory
    Memory allocated in the form of stacks. Mainly used for functions.



--------------------
https://inside.caratlane.com/network-i-o-the-underhood-of-node-js-121424f36ae5

elevent loop hava 7 - thread

1. Without Network I/O

    7 threads default per process.

        4 threads for LIBUV(fs, zlib, crypto) -> either to execute cpu intensive job(crypto) or File I/O job(because underlying OS does not support async for it)
        1 thread for javascript execution
        1 thread for garbage collector
        1 thread for event loop -> which is mainly used, so nodejs is usually regarded as 1 thread(event loop) per 1 process runtime.

2. With Network I/O

    11 threads default per process

    7 threads same with above
    4 threads for DNS lookup -> which used to share above LIBUV thread pool but separated to solve this issue


In JavaScript, the Microtask Queue (also known as the Job Queue) handles tasks that need to be executed after the currently executing script finishes but before the next event loop iteration. Microtasks are typically high-priority tasks that should run as soon as possible after the current execution stack is cleared.

The most common sources of microtasks in JavaScript are:

    Promises

        When a promise is resolved or rejected, any then or catch handlers attached to it are queued as microtasks.
       
        
            Promise.resolve().then(() => {
            console.log("Microtask from Promise");
            });

    process.nextTick (Node.js only)

        In Node.js, process.nextTick schedules a microtask to run at the end of the current phase of the event loop, even before other microtasks.
       
        
            process.nextTick(() => {
            console.log("Microtask from process.nextTick");
            });

    MutationObserver

        The MutationObserver API allows you to observe changes to the DOM and queue a callback as a microtask when a change occurs.
       
        
            const observer = new MutationObserver(() => {
            console.log("Microtask from MutationObserver");
            });

            observer.observe(document.body, { childList: true });
            document.body.appendChild(document.createElement("div"));

How Microtasks Compare to Macrotasks
    Microtasks are executed after the current stack clears, but before rendering and before any macrotasks.
    Macrotasks include tasks like setTimeout, setInterval, setImmediate (Node.js), and I/O operations. These are queued in the Macrotask Queue and executed in the next event loop iteration.


Here’s a simple example illustrating the order of execution between macrotasks and microtasks:
 
    console.log("Start");

    setTimeout(() => {
    console.log("Macrotask from setTimeout");
    }, 0);

    Promise.resolve().then(() => {
    console.log("Microtask from Promise");
    });

    console.log("End");

    // Output:
    // Start
    // End
    // Microtask from Promise
    // Macrotask from setTimeout


In this example:

    Synchronous code (console.log("Start") and console.log("End")) executes first.
    The promise's then callback, which is a microtask, runs immediately after the synchronous code.
    The setTimeout callback, a macrotask, runs after all microtasks have completed.

*/  