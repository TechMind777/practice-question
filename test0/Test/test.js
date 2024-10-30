(function(){
    var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
//output  ->becase a is declared with var and b has no var so it is global
// undefined
// number

