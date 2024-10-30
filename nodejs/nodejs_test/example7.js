
console.log('Start'); 

process.nextTick(() => console.log('nextTick'));

Promise.resolve().then(() => { 
    console.log('Promise Resolved'); 
}); 
console.log('End');
