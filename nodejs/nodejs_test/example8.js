setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => { 
    console.log('Promise Resolved'); 
}); 
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));
console.log('current event loop');


/**
current event loop
nextTick
Promise Resolved
timeout
immediate
 */