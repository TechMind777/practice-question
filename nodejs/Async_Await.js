  /*
Difference between Promise and async/await in Node


1. Promises:
	Promises provide a way to handle asynchronous operations in JavaScript, making it easier to write and manage code that depends on the results of such operations. They are a fundamental part of modern JavaScript, especially in asynchronous programming with async and await.

	In Node, a Promise is akin to a real-life commitment, ensuring the execution of an asynchronous event and managing its aftermath through three states: pending, resolved, or rejected.

		-Pending: Initial State, before the event has happened.
		-Resolved: After the operation completed successfully.
		-Rejected: If the operation had error during execution, the promise fails.
		-Error Handling of Promises: To handle a resolved promise, use the .then() method, and for a rejected promise, use .catch(). To execute code after promise handling, use .finally(), ensuring the code within runs regardless of the promise state.

	const promise = new Promise(function (resolve, reject) {
		const string1 = "geeksforgeeks";
		const string2 = "geeksforgeeks";
		if (string1 === string2) {
			resolve();
		} else {
			reject();
		}
	});

	promise
		.then(function () {
			console.log("Promise resolved successfully");
		})
		.catch(function () {
			console.log("Promise is rejected");
		});




2. Async/Await:

	Async/Await simplifies working with promises, offering a cleaner syntax in asynchronous functions. The ‘await’ keyword, exclusive to async functions, pauses execution until the awaited promise resolves or rejects.

	Error Handling in Async/Await: For a successfully resolved promise, we use try and for rejected promise, we use catch. To run a code after the promise has been handled using try or catch, we can .finally() method. The code inside .finally() method runs once regardless of the state of the promise.


	const helperPromise = function () {
		const promise = new Promise(function (resolve, reject) {
			const x = "geeksforgeeks";
			const y = "geeksforgeeks";
			if (x === y) {
				resolve("Strings are same");
			} else {
				reject("Strings are not same");
			}
		});

		return promise;
	};

	async function demoPromise() {
		try {
			let message = await helperPromise();
			console.log(message);
		} catch (error) {
			console.log("Error: " + error);
		}
	}

	demoPromise();


Difference Between Promise and Async/Await:

Promise
	1.Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.	
	2.Promise has 3 states – resolved, rejected and pending.	
	3.If the function “fxn1” is to executed after the promise, then promise.then(fxn1) continues execution of the current function after adding the fxn1 call to the callback chain.	
	4.Error handling is done using .then() and .catch() methods.	
	5.Promise chains can become difficult to understand sometimes.	

Async/Await
	1.Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.
	2.It does not have any states. It returns a promise either resolved or rejected.
	3.If the function “fxn1” is to executed after await, then await X() suspends execution of the current function and then fxn1 is executed.                                
	4.Error handling is done using .try() and .catch() methods.
	5.Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains.                                                        


*/