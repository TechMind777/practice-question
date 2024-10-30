const fs = require('fs');

let myFun = function(){
    console.log('my function');

}
// wait for read compleat
let data = fs.readFileSync ('./sample.txt' );
console.log(data);
 
myFun();

 /** output
    <Buffer 74 65 73 74>
    my function 
*/