//lexical Scope
// console.log("When inner function accessess variable of outer function")

//closure
// console.log("When inner fuction accessess variable of outer function but on execution time(remebers it as well)")
 
function hello(){
    var a=10;
    function innerFunction(){
        return a;//lexical scope
    }
    return innerFunction;
}
var inner=hello();//
// function innerFunction(){
//     return a;//lexical scope
// }
console.log(inner())//this is closure