/*
https://hackernoon.com/how-does-nodejs-achieve-concurrency
Concurrency is the concept of executing multiple tasks or processes simultaneously, but not necessarily at the exact same time. Instead, tasks take turns using shared resources (like CPU, memory, etc.) and can be paused and resumed, giving the appearance of simultaneous execution.

Why Node.js cannot use Multi-Threading
    Node.js can use multiple threads, but its core architecture is single-threaded. Here's why Node.js traditionally does not rely on multi-threading and how it handles concurrency:

1. Node.js's Single-Threaded Architecture:
    Node.js is built on Google's V8 JavaScript engine and uses a single-threaded, event-driven model. This means that all operations in Node.js are executed on a single thread by default.
    The reason for this design choice is that JavaScript, the language Node.js is built upon, was initially designed to be single-threaded. In browsers, this makes sense because JavaScript manages user interfaces and DOM manipulation, where concurrency could lead to race conditions and bugs.
2. Event-Driven, Non-Blocking I/O:
    Instead of using threads to handle multiple operations, Node.js uses an event-driven architecture combined with non-blocking I/O. This allows Node.js to perform many tasks concurrently without needing multiple threads.
    For example, while waiting for a database or file operation to complete, Node.js can handle other tasks. Once the I/O operation finishes, the event loop picks up the result and continues processing.

3. Event Loop:
    Node.js runs on a single thread, but it uses an event loop to manage concurrency. The event loop continually checks for tasks and executes callbacks when events (like I/O operations) complete.
    This approach is very efficient for I/O-heavy tasks, such as handling web requests, making API calls, or reading files, without the overhead of managing multiple threads.

4. Why Not Multi-Threading by Default?:
    Simplicity: Single-threaded programming is simpler to understand and less prone to issues like race conditions, deadlocks, and thread synchronization problems.
    Efficient for I/O: Node.js is primarily designed for I/O-bound tasks (e.g., web servers). For such tasks, using non-blocking I/O with a single thread is often more efficient than multi-threading because the bottleneck is typically waiting for external resources (like databases), not CPU processing.
    Memory Usage: Multi-threading can increase memory usage, as each thread consumes additional memory for its context. Node.js avoids this overhead with its single-threaded model.
    
5. When Node.js Uses Multiple Threads:
    Worker Threads: Node.js introduced worker threads in version 10.5.0 to enable multi-threading when needed for CPU-bound tasks. This allows running JavaScript code in parallel on multiple threads, though the main thread still remains event-driven.
    Cluster Module: Node.js also has a cluster module that allows spawning multiple processes that share the same server port. This can be used to handle CPU-intensive tasks across multiple cores.
    C++ Addons: Node.js internally uses multi-threading in its native C++ code for handling certain operations (e.g., file system and network operations). However, JavaScript code itself remains single-threaded unless worker threads are explicitly used.

6. CPU-Bound vs. I/O-Bound:
    I/O-Bound Tasks: For tasks like file reading/writing, database operations, and network requests, Node.js’s event-driven model performs well because these operations spend most of their time waiting for external systems.
    CPU-Bound Tasks: For tasks that require heavy computation (e.g., image processing, encryption, etc.), Node.js's single-threaded model becomes a bottleneck. In such cases, developers might use worker threads or offload these tasks to a separate service.
7. How Node.js Handles Concurrency Without Multi-Threading:
    Asynchronous Callbacks: When an asynchronous operation (like a database query) is initiated, Node.js doesn't wait for it to complete. Instead, it moves on to the next task. Once the operation finishes, a callback is added to the event queue, and the event loop processes it when the main thread is free.
    Promises/Async-Await: Modern JavaScript allows handling asynchronous tasks using Promises and async/await, making it easier to work with concurrency in a single-threaded environment.

Conclusion:
While Node.js doesn't use multi-threading by default for JavaScript execution, it uses a highly efficient non-blocking, event-driven model for handling multiple tasks concurrently. Multi-threading is available via worker threads or clustering, especially for CPU-bound tasks. However, its single-threaded architecture remains optimal for I/O-bound tasks, which is the primary focus of Node.js applications (e.g., web servers).

-----------------------------



When compared to busy-waiting or polling, multi-threading is a better approach to achieve concurrency. 
Many programming languages and frameworks use multi-threading successfully.


However, Node.js cannot use multi-threading. This is because Node.js uses JavaScript and JavaScript is single-threaded.


So is there no hope?


Actually, there is another mechanism to enable non-blocking resources. This mechanism is known as Event Demultiplexing. You can also call it the Event Notification Service.

The below illustration shows the Event Demultiplexing concept.

There are three important steps in the Event Demultiplexing process:

1. First, the resources are added to a watchlist. Each resource has an associated operation such as read or write.

2. This watchlist of resources along with the callbacks is assigned to the Event Demultiplexer. 
    The demultiplexer makes a synchronous and blocking call for any events generated from the watched resources. 
    When the demultiplexer eventually returns from the blocking call, it has a new set of events available for processing.
3. Each event returned by the Event Demultiplexer is processed by the application callback methods. At this point, 
    the resource is guaranteed to be ready to read and it will not block during the operation. When all the events are processed, 
    the demultiplexer will again make a blocking request for the next set of events.


This process of checking for events, processing them, and checking again is known as the Event Loop and forms the basis of concurrency in Node.js. Moreover, the Event Demultiplexer makes it possible to handle the entire process in a single thread.


There is no need for multi-threading. No need for busy waiting and polling. A single thread with very little idle time is enough. Tasks are spread over time instead of being divided between multiple threads.


*/