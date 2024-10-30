/**  
 * 
 A callback is a function passed as an argument to another function, which is then executed after the completion of that function. It allows asynchronous operations like reading a file or making an API request to execute tasks once the operation is finished.

  function fetchData(callback) {
    setTimeout(() => {
      callback("Data loaded");
    }, 1000);
  }

  fetchData((message) => {
    console.log(message); // Output: Data loaded
  });

--------------------------------Callback hell

Callback hell happens when multiple nested callbacks are used, leading to code that's hard to read and maintain. Promises provide a cleaner way to handle asynchronous operations, improving readability and structure.

Instead of this callback-heavy structure:


  doTask1(function(result1) {
      doTask2(result1, function(result2) {
          doTask3(result2, function(result3) {
              console.log(result3);
          });
      });
  });


  Using Promises, you can flatten the structure:

    
  doTask1()
    .then(result1 => doTask2(result1))
    .then(result2 => doTask3(result2))
    .then(result3 => console.log(result3))
    .catch(error => console.error(error));


*/