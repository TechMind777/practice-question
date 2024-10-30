// Removing Duplicates from an Array:

const numbers = [1, 2, 3, 4, 5, 5, 6, 6];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]