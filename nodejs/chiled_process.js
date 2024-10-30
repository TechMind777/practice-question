/**
In Node.js, child_process is a module that allows you to create and manage child processes, enabling your Node.js application to execute other programs or scripts as separate processes. This is useful when you need to run a different program, script, or even another instance of a Node.js application in parallel with your main application.


The child_process module provides several methods to create and interact with child processes:

  exec - exec_demo.js
  execFile - exec_file_demo.js (also uses somefile.sh)
  spawn - spawn_demo.js
  fork - fork_demo.js (also uses longtask.js)


1. exec()
  Purpose: Executes a command in a shell and buffers the output.
  Use Case: Useful for running shell commands and getting the output as a string.
  Example:
  
    const { exec } = require('child_process');

    exec('ls -la', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });

2. execFile()

  Purpose: Executes a file directly without a shell.
  Use Case: Useful for running binaries or scripts with arguments.

  Example:
  
    const { execFile } = require('child_process');

    execFile('node', ['--version'], (error, stdout, stderr) => {
      if (error) {
        console.error(`execFile error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });


3. spawn()

Purpose: spawn() is used to launch a new process with a specific command. It is ideal for long-running processes or streaming data.
Use Case: Running system commands, external scripts, or any executable that produces output over time.
Non-blocking: The spawn() method returns a stream of data (stdin, stdout, stderr), making it non-blocking.

This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

Use Case: Useful when you need to handle large outputs or interact with the process via streams (stdin, stdout, stderr).

  Example:
  
    const { spawn } = require('child_process');

    const ls = spawn('ls', ['-la']);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

4. fork()
  Purpose: fork() is a special case of spawn() designed specifically to spawn new Node.js processes. It allows the parent process and child process to communicate via messages (IPC - Inter-Process Communication).
  Use Case: Running multiple Node.js processes to handle CPU-intensive tasks, enabling load distribution, or creating worker processes.
  IPC: fork() provides a built-in communication channel (via send() and on('message')) between the parent and child processes.


  fork() is a particular case of spawn() that generates a new instance of a V8 engine. Multiple workers run on a single node code base for multiple tasks.
  
  The Fork method in Node.js creates a new child process that runs a separate Node.js instance and can be useful for running CPU-intensive tasks or creating a cluster of Node.js servers.

  Use Case: Useful for running another Node.js script or splitting a Node.js application into multiple processes.
  Example:
  
    const { fork } = require('child_process');

    const child = fork('child.js');

    child.on('message', (message) => {
      console.log('Message from child:', message);
    });

    child.send({ hello: 'world' });


-- spawn
  Spawn() launches a new process with the available set of commands.

---fork
  fork() is a particular case of spawn() that generates a new instance of a V8 engine.
  Multiple workers run on a single node code base for multiple tasks.


  spawn() runs a command as a child process, often used for non-Node.js scripts or system commands.
  fork() is used to create a new Node.js process, with built-in communication channels for parent-child processes.

 */

/** exec */
const { exec } = require('child_process');

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  } 
  console.log(`stdout: ${stdout}`);
});

/** execFile */
const { execFile } = require('child_process');

execFile('./somefile.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

///somefile.sh
/**
        #!/bin/bash

        ls -lh
        # pwd
        # find /
 */


/** spawn */

const { spawn } = require('child_process');

const child = spawn('find', ['/']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('error', (error) => console.log(`error: ${error.message}`));

child.on('exit', (code, signal) => {
  if (code) console.log(`Process exit with code: ${code}`);
  if (signal) console.log(`Process killed with signal: ${signal}`);
  console.log(`Done ✅`);
});


/** fork */

const express = require('express');
const { fork } = require('child_process');

const app = express();

app.get('/one', (req, res) => {
  const sum = longComputation();
  res.send({ sum: sum });
});

app.get('/two', async (req, res) => {
  const sum = await longComputePromise();
  res.send({ sum: sum });
});

app.get('/three', (req, res) => {
  const child = fork('./longtask.js');
  child.send('start');
  child.on('message', (sum) => {
    res.send({ sum: sum });
  });
});

app.listen(3000, () => console.log('server on port 3000...'));

function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

function longComputePromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}

/////longtask.js
/**
 *function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

process.on('message', (message) => {
  if (message === 'start') {
    const sum = longComputation();
    process.send(sum);
  }
});
 */