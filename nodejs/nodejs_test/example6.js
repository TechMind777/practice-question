
console.log('Start'); 

Promise.resolve().then(() => { 
    console.log('Promise Resolved'); 
}); 
process.nextTick(() => console.log('nextTick'));

console.log('End');
