console.log('start beyond time');
const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
  }, 500);
  
  const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
  });
  
  // const intervalObj = setInterval(() => {
  //   console.log('interviewing the interval');
  // }, 500);
  
  setTimeout(() => {
    console.log('timeout beyond 1');
  }, 300);
  setTimeout(() => {
    console.log('timeout beyond 2');
  }, 300);
  setTimeout(() => {
    console.log('timeout beyond 3');
  }, 300);

//   timeoutObj();
//   immediateObj();
//   intervalObj();
//   clearTimeout(timeoutObj);
//   clearImmediate(immediateObj);
//   clearInterval(intervalObj);

console.log('end beyond time');

start beyond time
end beyond time
immediately executing immediate
timeout beyond 1
timeout beyond 2
timeout beyond 3
timeout beyond time
interviewing the interval
