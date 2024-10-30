// console.log("Prototype are the mechanism by which javascript object inherits feature from one another. 
//it can used with string, array but they all can be called as functions")
let user={
    getFullName:function(){
        return this.name+this.lastName
    },
    getAge:function(){
        return new Date().getFullYear() -this.birth;
    }
}
let teacher={
    name:"Aastha",
    lastName:"Sharma",
    birth:1998,
    getAge:user.getAge
   
}

let student={
    name:"Sunil",
    lastName:"Rawat",
    birth:1996,
    getAge:user.getAge// it will attach getAge() to object
}
// teacher.__proto__=user;
// student.__proto__=user;//it will not attach the getAge()to object it will be loaded only when needed;


Object.prototype.hero="Spiderman";//
console.log(teacher.hero)
console.log(student.hero)
console.log(user.hero)

//in two ways we can inherit property from one object from one another;

//getAge:user.getAge// it will attach getAge() to object directly and load alltogether(); it can be loaded for small loads
// student.__proto__=user;//it will not attach the getAge()to object directlty it will be loaded only when needed;


