// console.log("deep and shallow copy")
let obj={
    name:"peter"
    
}

// let user=obj;// when we assign an object to any variable it does not  
//get copied but it passes the reference of object (the memory location)
// object can be copied by value and by reference.

let user=Object.assign({},obj);

//note: when we assign the value of variable to another, it copies the value but in case of object it copies the reference
user.name="Bruce";


// let a ="sunil";
// let b=a;
// b="rawat"
console.log("object is ",obj)
console.log("user  is ",user)

//shallow copy= when we copy the object then only its man object gets copied. ways to copy Object.assign({},objname) or {...objname}
//deep copy= nested obkect gets copied. ways to copy, JSON.parse(JSON.stringify(objname)), date and functions will not be part of that to do so use loadash and forloop
//Note: both case allow value of object to be copied instead of memory


