//forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.

let obj = {a1:1,a2:212,a3:2,a4:4}
let array = [1,212,2,4]
console.log("--------forEach");

array.forEach(data => {
    console.log("forEach", data);
} )

//map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although the callback function may do so).
console.log("--------map");

let newArray = array.map(data => {
    return data+2;
}, ()=>{console.log("dwds")} )

console.log("map newArray", newArray);
let keys = Object.assign(obj);
console.log("  keys", keys);

console.log("--------for");

for (let i=300; i <  keys.length && i < 600; i++) { 
    console.log(keys[i], yourobject[keys[i]]);
 }

 console.log("--------for in obj");

 // return keys from object
 for (let key in obj) {
     console.log(key, obj[key]);
 }
 console.log("--------for in array");
//  return index from Array 
 for (let key in array) {
     console.log(key, array[key]);
 }
  
 
console.log("--------for of", Object.entries(obj)); //[ [ 'a1', 1 ], [ 'a2', 212 ], [ 'a3', 2 ], [ 'a4', 4 ] ]

// work on array
for (let [key, value] of Object.entries(obj)) { //[ [ 'a1', 1 ], [ 'a2', 212 ], [ 'a3', 2 ], [ 'a4', 4 ] ]
      console.log(key, value);
}


const numbers = [65, 44, 12, 4];
const newArr = numbers.map(data=>{console.log('>>>',data); return data +1})

const array1 = [1, 2, 3, 4];
let array12 = [{a:1},{a:212},{a:2},{a:4}]

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array12.reduce(
  (previousValue, currentValue, index) => {
    console.log('previousValue:',previousValue)
    console.log('currentValue:',currentValue)
   return previousValue + currentValue.a;
},
  initialValue
);




// reduce