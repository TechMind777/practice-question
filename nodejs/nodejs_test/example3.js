 
//----3
 
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; //  return this.fullname; 
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());

 /**

Aurelio De Rosa
undefined
  */


 var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         //return this.fullname; 
         return fullname; 
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());


 /**
  * 
 John Doe
 John Doe
  */

  
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() { 
         return fullname;   // // ReferenceError: fullname is not defined
      }
   }
};
console.log(obj.prop.getFullname()); // ReferenceError: fullname is not defined
var test = obj.prop.getFullname;// ReferenceError: fullname is not defined
console.log(test());

 
 
 function init() {
   var name = "Mozilla"; // name is a local variable created by init
   function displayName() {
     // displayName() is the inner function, that forms the closure
     console.log(name); // use variable declared in the parent function
   }
   displayName();
 }
 init();

 /**
  * 
Mozilla
  */
