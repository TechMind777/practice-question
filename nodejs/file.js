const fs = require("fs");

// let myFun = function(){
//     console.log('my function');

// }

// fs.readFile('./sample.txt', (err, data)=>{
//     console.log(data);
// });

// myFun();

/** output
my function 
 <Buffer 74 65 73 74>
*/

// if you not what to blocking evelnt loop then use fs.readFile
// fs.readFile('./sample.txt', (err, data)=>{ console.log(data); });

// let originalText = fs.readFileSync('aaaa-improent.text');
// console.log("originalText", originalText) // return Buffer

let originalText = fs.readFileSync("aaaa-improent1.text", "utf-8");
console.log("originalText", originalText); // // return text

// fs.writeFileSync('aaaa-improent1.text', "new tesxt", { encoding : "utf-8", flag:"a"});
fs.appendFile("aaaa-improent1.text", "new tesxt", "utf-8"); // append data in new line , file create if not exist

//---------------------read file
//sync
let newText = fs.readFileSync("aaaa-improent1.text", "utf-8");
console.log("newText: ", newText); // return Buffer

//async
fs.readFile("aaaa-improent1.text", "utf-8", (error, result) => {
  if (error) {
    console.error("Error", error);
  } else {
    console.log("Result", result);
  }
});

//------------------write file
// Sync
// fs.writeFileSync('aaaa-improent1.text', "new tesxt", { encoding : "utf-8", flag:"a"});

//Async
// fs.writeFile('aaaa-improent1.text', "new tesxt",  (error)=> { });

//
// fs.appendFileSync('./text.txt', `${new Date()} logs shoe \n`);

// fs.cpSync('./text.txt', './copy.txt');

// fs.unlinkSync('./copy.txt')// delete copy.txt file

console.log(fs.statSync("./text.txt")); // show file detail

// fs.mkdirSync("myDoc/a/a1", { recursive: true }); //create directory / sub-directory  
