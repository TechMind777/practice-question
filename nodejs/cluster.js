/** what is clusters
 * In Node.js, clustering is a way to take advantage of multi-core systems by creating multiple instances of your application that can run in parallel. This can help improve the performance and scalability of your Node.js application by distributing the load across multiple CPU cores.
 * 
Worker threads and clusters ? 

Worker threads and clusters are two different approaches to leveraging the power of multiple CPUs in Node.js. 
While clusters create multiple instances of a Node.js process, each running on a separate CPU core, 
worker threads provide a way to create multiple threads within a single process.
 * 
 */
 
const express = require('express');
const cluster = require('cluster');

const os = require('os');
const app = express();

const numCpu = os.cpus().length;

app.get('/', (req, res) => {
  for (let i = 0; i < 1e8; i++) {
  }
  res.send(`OK...${process.pid}`);
  // cluster.worker.kill();
})


if(cluster.isMaster) {
  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }
  cluster.on('exist', (worker, code, signal)=>{
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(3000, () => console.log(`server ${process.pid} http://localhost:3000`))
}



/*
In computing, a thread is a sequence of executable instructions that can run concurrently with other threads within a process. Threads are the smallest unit of execution and are sometimes referred to as "lightweight processes." Here's a deeper look at threads and how they work:

Key Concepts of Threads
Process vs. Thread:

Process: A process is an independent program in execution that has its own memory space. It contains one or more threads.
Thread: A thread is a component of a process that can execute code. Threads within the same process share the same memory space but run independently.

Multithreading:

Definition: Multithreading is the concurrent execution of multiple threads within a single process. It allows a program to perform multiple operations simultaneously.
Use Cases: Multithreading can improve performance by performing background tasks, handling multiple tasks concurrently, and making more efficient use of CPU resources.

Concurrency vs. Parallelism:

Concurrency: Refers to the ability of a system to handle multiple tasks at once. This can be achieved through multitasking or multithreading, even if tasks are not running simultaneously.
Parallelism: Refers to the simultaneous execution of multiple threads or processes, often on multiple CPU cores.

Thread Lifecycle:

Creation: Threads are created by the operating system or by a process. In programming, threads can be created using libraries or language-specific constructs.
Execution: Threads execute instructions concurrently, often performing different tasks or parts of a task.
Termination: Threads terminate when they complete their assigned task or are terminated by the process or operating system.

Thread Synchronization:

Definition: Thread synchronization ensures that multiple threads can safely access shared resources without causing conflicts or inconsistent states.
Mechanisms: Common synchronization mechanisms include mutexes, semaphores, and locks.

Thread Communication:

Definition: Threads within the same process may need to communicate or share data. Communication between threads is often done using shared variables or inter-thread communication mechanisms.
  


*/