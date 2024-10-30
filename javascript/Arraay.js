Array.prototype.slice()
Array.prototype.slice() //together with Array.prototype.concat()
Array.prototype.filter()
// A for loop and Array.prototype.push()



'ABS'.split('').reverse().join('')

// 1. length
// Returns the number of elements in the array.
Example:
var arr = [1, 2, 3];
var len = arr.length; // 3

// 2. push(element1, ..., elementN)
// Adds one or more elements to the end of an array and returns the new length of the array.
// Example:
var arr = [1, 2, 3];
arr.push(4, 5); // arr is now [1, 2, 3, 4, 5]

// 3. pop()
// Removes the last element from an array and returns that element.
// Example:
var arr = [1, 2, 3];
var lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]

// 4. shift()
// Removes the first element from an array and returns that element.
// Example:
var arr = [1, 2, 3];
var firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]

// 5. unshift(element1, ..., elementN)
// Adds one or more elements to the beginning of an array and returns the new length of the array.
// Example:
    var arr = [2, 3];
    arr.unshift(0, 1); // arr is now [0, 1, 2, 3]


// 6. concat(array1, ..., arrayN)
// Merges two or more arrays and returns a new array.
// Example:
var arr1 = [1, 2];
var arr2 = [3, 4];
var newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]

// 7. slice(startIndex, endIndex)
// Returns a shallow copy of a portion of an array into a new array object.
// Example:
var arr = [1, 2, 3, 4, 5];
var slicedArr = arr.slice(1, 4); // slicedArr is [2, 3, 4]

// 8. splice(startIndex, deleteCount, item1, ..., itemN)
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Example:
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 4, 5]

// 9. indexOf(searchElement,  )
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Example:
var arr = [1, 2, 3, 2, 5];
var index = arr.indexOf(2); // 1
var indexFrom = arr.indexOf(2, 2); // 3

// 10. lastIndexOf(searchElement, fromIndex)
// Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// Example:
var arr = [1, 2, 3, 2, 5];
var lastIndex = arr.lastIndexOf(2); // 3

// 11. forEach(callback(element, index, array))
// Executes a provided function once for each array element.
// Example:
var arr = [1, 2, 3];
arr.forEach(function(item, index) {
  console.log(index, item); // logs 0 1, 1 2, 2 3
});

// 12. map(callback(element, index, array))
// Creates a new array with the results of calling a provided function on every element in the calling array.
// Example:
var arr = [1, 2, 3];
var mappedArr = arr.map(function(item) {
  return item * 2;
}); // mappedArr is [2, 4, 6]

// 13. filter(callback(element, index, array))
// Creates a new array with all elements that pass the test implemented by the provided function.
// Example:
var arr = [1, 2, 3, 4, 5];
var filteredArr = arr.filter(function(item) {
  return item > 3;
}); // filteredArr is [4, 5]

// 14. reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Example:
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0); // sum is 10

// 15. reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Executes a reducer function (that you provide) on each element of the array (from right to left), resulting in a single output value.
// Example:
var arr = [1, 2, 3, 4];
var sum = arr.reduceRight(function(acc, curr) {
  return acc + curr;
}, 0); // sum is 10

// 16. some(callback(element, index, array))
// Tests whether at least one element in the array passes the test implemented by the provided function.
// Example:


var arr = [1, 2, 3, 4];
var hasEven = arr.some(function(item) {
  return item % 2 === 0;
}); // hasEven is true
// 17. every(callback(element, index, array))
// Tests whether all elements in the array pass the test implemented by the provided function.
// Example:


var arr = [1, 2, 3, 4];
var allEven = arr.every(function(item) {
  return item % 2 === 0;
}); // allEven is false
// 18. find(callback(element, index, array))
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
// Example:


var arr = [1, 2, 3, 4];
var found = arr.find(function(item) {
  return item > 2;
}); // found is 3
// 19. findIndex(callback(element, index, array))
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
// Example:


var arr = [1, 2, 3, 4];
var foundIndex = arr.findIndex(function(item) {
  return item > 2;
}); // foundIndex is 2
// 20. sort(compareFunction)
// Sorts the elements of an array in place and returns the array.

// Example:



var arr = [4, 2, 3, 1];
arr.sort(); // arr is now [1, 2, 3, 4]
// Example with custom compare function:
    var arr = [4, 2, 3, 1];
    arr.sort(function(a, b) {
    return b - a;
    }); // arr is now [4, 3, 2, 1]

// 21. reverse()
// Reverses the order of the elements in an array in place and returns the array.
// Example:


    var arr = [1, 2, 3, 4];
    arr.reverse(); // arr is now [4, 3, 2, 1]

// 22. join(separator)
// Joins all elements of an array into a string and returns this string.
// Example:


    var arr = [1, 2, 3, 4];
    var str = arr.join("-"); // str is "1-2-3-4"

// 23. includes(searchElement, fromIndex)
// Determines whether an array includes a certain value among its entries, returning true or false.
// Example:
    var arr = [1, 2, 3, 4];
    var includesTwo = arr.includes(2); // true

// 24. flat(depth)
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Example:
    var arr = [1, [2, [3, [4]]]];
    var flatArr = arr.flat(2); // flatArr is [1, 2, 3, [4]]

// 25. flatMap(callback(element, index, array))
// First maps each element using a mapping function, then flattens the result into a new array.
// Example:
    var arr = [1, 2, 3];
    var flatMappedArr = arr.flatMap(function(item) {
    return [item, item * 2];
    }); // flatMappedArr is [1, 2, 2, 4, 3, 6]
    // ---
    const arr = [1, 2, 3];

    // Equivalent to flatMap using map and flat
    const mapped = arr.map(x => [x, x * 2]);
    const flatMapped = mapped.flat();

    console.log(mapped); 
    console.log(flatMapped); 
    // Output: [1, 2, 2, 4, 3, 6]


// 26. fill(value, start, end)
// Fills all the elements of an array from a start index to an end index with a static value.
// Example:
    var arr = [1, 2, 3, 4];
    arr.fill(0, 2, 4); // arr is now [1, 2, 0, 0]

// 27. copyWithin(target, start, end)
// Copies a sequence of array elements within the array to the position starting at target.
// Example:
    var arr = [1, 2, 3, 4, 5];
    arr.copyWithin(0, 3); // arr is now [4, 5, 3, 4, 5]
