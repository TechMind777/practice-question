/**
 * 
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.


-new Set()	Creates a new Set
const letters = new Set(["a","b","c"]);

-add()	Adds a new element to the Set
const letters = new Set();
// Add Values to the Set
letters.add("a");

delete()	Removes an element from a Set
has()	Returns true if a value exists
clear()	Removes all elements from a Set

-forEach()	Invokes a callback for each element
letters.forEach (function(value) {
  text += value;
})


-- values()	Returns an Iterator with all the values in a Set
let text = "";
let myIterator =  letters.values()   // Returns [object Set Iterator]

for (const entry of myIterator) {
  text += entry;
}

keys()	Same as values()
entries()	Returns an Iterator with the [value,value] pairs from a Set


Set Operations (Union, Intersection, Difference):

  Union: Combines elements from two sets.

    const setA = new Set([1, 2, 3]);
    const setB = new Set([3, 4, 5]);

    const union = new Set([...setA, ...setB]);
    console.log(union); // Set { 1, 2, 3, 4, 5 }

  Intersection: Keeps only elements found in both sets.

    const intersection = new Set([...setA].filter(x => setB.has(x)));
    console.log(intersection); // Set { 3 }

  Difference: Elements present in the first set but not in the second.

    const difference = new Set([...setA].filter(x => !setB.has(x)));
    console.log(difference); // Set { 1, 2 }


  

--------------------------------
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.



-- new Map()	Creates a new Map object
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

-- set()	Sets the value for a key in a Map
fruits.set("apples", 500);
-- get()	Gets the value for a key in a Map
fruits.get("apples");    // Returns 500
-- clear()	Removes all the elements from a Map
fruits.clear();
-- delete()	Removes a Map element specified by a key
fruits.delete("apples");
-- has()	Returns true if a key exists in a Map
fruits.has("apples");
-- forEach()	Invokes a callback for each key/value pair in a Map
-- entries()	Returns an iterator object with the [key, value] pairs in a Map
-- keys()	Returns an iterator object with the keys in a Map
-- values()	Returns an iterator object of the values in a Map

 */