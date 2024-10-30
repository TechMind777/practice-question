/**
 *  libuv is a C library originally written for Node. js to abstract non-blocking I/O operations. 
 * ... It allows the CPU and other resources to be used simultaneously while still performing I/O operations,
 *  thereby resulting in efficient use of resources and network.
 */
/**
libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.
 

I/O operations ?
    The I/O model in Node. js is a non-blocking event loop. This means that when you call a function that performs I/O, it will not block the execution of your code. Instead, it will return immediately and lets you continue executing other parts of your code while the I/O operation is performed in the background.
*/