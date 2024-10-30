var str = 'asddffg'
var a =  str.substring(1) //'sddffg'
var a = str.slice(1) // 'sddffg'


var index1=0, index2 = 1
var a =  str.substring(index1,index2) //'a' index1>=0,  1<index2

var index1=0
var a =  str.substring(index1) //'a' index1>=0



var output = input.substring(0, 1).toUpperCase().concat(input.substring(1)) //Asddffg
var output = str.charAt(0).toUpperCase() + str.slice(1);  //Asddffg
str.charAt(0) // a

// revers string
  str.split("").reverse().join("");
  str.split("").reduce((a,b)=> a = b + a ,"")



  //--------
var index1=0, index2 = 5

  var str = "Hello, world!";
var result = str.slice(index1, index2); // "Hello"index1>=0,  5<index2


var result = str.slice(7); // "world!"

var str = "Hello, world!";
var result = str.slice(-6); // "world!"
var result2 = str.slice(-6, -1); // "world"

// ---------
var str = "Hello, world!";
var len = str.length; // 13


var str = "Hello, world!";
var char = str.charAt(1); // "e"


var str = "Hello, world!";
var code = str.charCodeAt(1); // 101 

var str1 = "Hello";
var str2 = "World";
var result = str1.concat(", ", str2, "!"); // "Hello, World!"


// .includes(searchString, position)
var str = "Hello, world!";
var hasHello = str.includes("Hello"); // true
var hasWorld = str.includes("world", 8); // false
var hasWorld = str.includes("world", 7); // true


// indexOf(searchValue, fromIndex)

var str = "Hello, world!";
var index = str.indexOf("o"); // 4
var indexFrom = str.indexOf("o", 5); // 8


var str = "Hello, world!";
var index = str.lastIndexOf("o"); // 8


// replace(searchValue, newValue)
// Returns a new string with some or all matches of a pattern replaced by a replacement.

var str = "Hello, world!";
var newStr = str.replace("world", "JavaScript"); // "Hello, JavaScript!"



// 9. slice(startIndex, endIndex)
var str = "Hello, world!";
var slicedStr = str.slice(7, 12); // "world"
var fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
var slicedFruits = fruits.slice(1, 3); // [ 'banana', 'orange' ]
console.log(slicedFruits); // [ 'banana', 'orange' ]
console.log(fruits); // [ 'apple', 'banana', 'orange', 'mango', 'grape' ] (original array remains unchanged)



var colors = ['red', 'green', 'blue', 'yellow', 'pink'];
var removedColors = colors.splice(2, 2); // Removes 2 elements starting from index 2
console.log(removedColors); // [ 'blue', 'yellow' ]
console.log(colors); // [ 'red', 'green', 'pink' ] (original array is modified)

var colors = ['red', 'green', 'pink'];
colors.splice(2, 0, 'blue', 'yellow'); // Adds 'blue' and 'yellow' at index 2
console.log(colors); // [ 'red', 'green', 'blue', 'yellow', 'pink' ] (array is modified)


//split(separator, limit)
var str = "Hello, world!";
var arr = str.split(", "); // ["Hello", "world!"]


// 11. substring(startIndex, endIndex)
var str = "Hello, world!";
var subStr = str.substring(7, 12); // "world"


//16. match(regex)
var str = "Hello, world!";
var matches = str.match(/o/g); // ["o", "o"]


// search(regex)
var str = "Hello, world!";
var index = str.search(/world/); // 7

// 18. startsWith(searchString, position)

var str = "Hello, world!";
var starts = str.startsWith("Hello"); // true
var startsPos = str.startsWith("world", 7); // true

// 19. endsWith(searchString, length)
var str = "Hello, world!";
var ends = str.endsWith("world!"); // true
var endsPos = str.endsWith("world", 12); // true

// 20. repeat(count)
var str = "Hello!";
var repeatedStr = str.repeat(3); // "Hello!Hello!Hello!"


// 21. padStart(targetLength, padString) / padEnd(targetLength, padString)
var str = "5";
var paddedStr = str.padStart(3, "0"); // "005"
var paddedEndStr = str.padEnd(3, "0"); // "500"



