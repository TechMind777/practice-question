
 /** 
  * 
  * 
Shallow copy
Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

Deep copy
A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!
employeeDetailsDuplicate.name = 'NameChanged'; // this will change employeeDetailsOriginal value also

For simple JSON objects, the simplest way would be:
    var objectIsNew = JSON.parse(JSON.stringify(objectIsOld));
    //if you use jQuery, you can use:
    In Jquery you can use:
    // Shallow copy
    var objectIsNew = jQuery.extend({}, objectIsOld);
    // Deep copy
    var objectIsNew = jQuery.extend(true, {}, objectIsOld);


    var a = {a:1,b:{a:2}}

    var b =a ; // b.a change then a.a also change
    var b = Object.assign({},a) // slow copy , b.a change then a.a not change, but b.b.a change then a.b.a change 

    var b = JSON.stringfy(JSON.parse(a)) ) // deep copy b.b.a change then a.b.a not change

    or
    
    var copiedObject = jQuery.extend({}, originalObject) // shallow copy
    var copiedObject = jQuery.extend(true, {}, originalObject) // deep copy


https://makimo.com/blog/shallow-and-deep-copies-in-javascript/#:~:text=We%20have%20two%20kinds%20of,that%20contain%20only%20primitive%20values.&text=Nested%20objects%20mean%20objects%20that%20contain%20non%2Dprimitive%20values.


There are 8 data types which belong to two different value types: primitives and objects. 
Let’s see how the two differ.

Primitives are all the data types except objects. That means:

  Boolean
  Null
  Undefined
  String
  Number
  Bigint
  Symbol

Primitives are immutable (they do not have methods or properties that can alter them).

Objects are all other JavaScript elements, such as object literals, arrays, dates, 
etc., and they are mutable. That means that certain methods can alter them.



In programming languages there are two spaces to store data in computer memory: the stack and the heap.

The stack is a temporary storage memory to store local primitive variables and references to objects.

The heap stores global variables. Object values are stored on the heap and the stack contains just references to them (pointers).

All primitives in any programming language are passed by value and all non-primitives are passed by reference (more about that later).

 
*/
