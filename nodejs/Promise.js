/**

-------------------------------------------------------------------------------------------------------
Promise.all vs Promise.allSettled? 

If all promises resolve then it returns an array with all resolved promises
If any of the promise rejects, it won't wait for others to resolve and will return with reason of the promise that is rejected
const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

-----------------------------------------------------------------------------------
Promise.allSettled() always returns array of objects with status key which denotes fulfilled or rejected. If a promise is fulfilled then you can get response with value key and if the promise is rejected then you can find the reason in reason key.

const promisesArray = [promise1, promise2, promise3];

Promise.allSettled(promisesArray).then((results) => {
  console.log("All promises settled:", results);
});

OUTPUT:
[
  { status: 'fulfilled', value: 'Promise 1 resolved' },
  ....
]

----------------------------------------------------------
What is Promise.race? 10:16
Promise.race()
As the name suggests, race returns first promise with shortest delay whether it is resolved or rejected.

const promisesArray = [promise1, promise2, promise3];

Promise.race(promisesArray).then((results) => {
    console.log("First promise resolved:", results);
  }).catch((error) => {
    console.error("At least one promise rejected:", error);
  });
----------------------------------------------------------------------
Promise.any()

It is somewhat similar to race method but with few minor differences:

It will return with first resolved promise.
If all promises are rejected, it will give you an aggregated error.

const promisesArray = [promise1, promise2, promise3];

Promise.any(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

*/