// var
// ---1-----------------
if (true) {
    mes = "Hello";
    console.log("with in scope", mes);
}
console.log("work as gloaly", mes); // Hello

// ---2-----------------

if (true) {
    var mes = "Hello";
    console.log("with in scope", mes);
}
console.log("work as gloaly", mes);

// ----------------------------var
console.log(qq)
if(true) {var qq = 1}

// output: undefined 

if(true) {var qq1 = 1}
console.log(qq1)

// output: 1 

function f(){
    if(true) {var qq6 = 1}
    console.log('inner',qq6)
}
console.log('outer', qq6)
f()

//ReferenceError: qq6 is not defined

// ------------------------ let
if(true) {let qq1 = 1}
console.log(qq1)// qq3 is not defined

// output: Uncaught ReferenceError: qq5 is not defined
console.log(qq1)
if(true) {let qq1 = 1}

// output: Uncaught ReferenceError: qq5 is not defined


// ------------------------ const
if(true) {const qq6 = 1}
console.log(qq6)

// output: Uncaught ReferenceError: qq5 is not defined
console.log(qq6)
if(true) {const qq6 = 1}

// output: Uncaught ReferenceError: qq5 is not defined

// ---------------const------------------------------------

const arr = [1,2,3]
arr.push(4); // [1,2,3,4]
arr[1] = 4; // [1,4,3]

delete arr // false , not able to detele
arr = [1,2,3] // VM373:1 Uncaught TypeError: Assignment to constant variable.


const obj = {a:1}
obj.a = 2 //{a:2} 
obj.b = 5 //{a:1, b:5} 
delete obj.a //true,  {} 
delete obj //false 


