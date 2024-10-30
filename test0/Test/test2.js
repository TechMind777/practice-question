var a =0;
function b(){
    a =10;
    return;
    var a =function(){
    };
}
b();
console.log(a) // 0

var a =0;
function b(){
    a =10;
    return;
    var b =function(){
    };
}
b();
console.log(a) // 10