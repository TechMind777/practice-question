/***
 *What do you mean by Asynchronous API?
  All APIs of Node.js library are aynchronous that is non-blocking. 
  It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.

async and await make promises easier to write"
  async makes a function return a Promise
  await makes a function wait for a Promise


 "I will finish later!"
  Functions running in parallel with other functions are called asynchronous
  A good example is JavaScript setTimeout();


let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});




 */

let promises1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1')
    console.timeLog('ALLP')

    resolve("promiss 1 resolve");
  }, 3000);
})
let promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2')
    console.timeLog('ALLP')
    resolve("promiss 2 resolve");
  }, 2000);
})
let promises3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3')
    console.timeLog('ALLP')
    resolve("promiss 3 resolve");
  }, 1000);
})
console.time('ALLP')

// rum parllel tack 3 to exicule 3 task
// wait for all Settled or any one reject
Promise.all([promises1, promises2, promises2]).then(data => {
  console.timeEnd('ALLP')
  console.log("All")
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}

).catch(e => {
  console.error(">>>", e.message)
});


// rum parllel tack 3 to exicule 3 task
// wait for all Settled  
Promise.allSettled([promises1, promises2, promises2]).then(data => {
  console.timeEnd('ALLP')
  console.log("All")
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}

).catch(e => {
  console.error(">>>", e.message)
})



// rum parllel tack 3 to exicule 3 task
// wait for first resolve or rect  
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

Promise.race([promises1, promises2, promises2]).then(data => {
  console.timeEnd('ALLP')
  console.log("All")
  console.log(data);
}

).catch(e => {
  console.error(">>>", e.message)
})