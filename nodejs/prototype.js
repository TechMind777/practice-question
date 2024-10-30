/**
The answer is Prototype.

The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

All three of the call, bind, and apply methods set the this argument to the function.

The call and apply methods set this to a function and call the function.
The bind method will only set this to a function. We will need to separately invoke the function.
call

call ==> The call method binds the this value to the function and executes the function. 
It takes the this value and a list of arguments as parameters. Then, it returns the value returned by the function, 
which is called using the call method.

function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}
test.call({num: 100}, 10, 20);


apply ==> The apply method binds the this value to the function and executes the function. 
It takes the this value and a single array object as parameters, and it returns the value returned by the function,
 which is called using the apply method.

function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}

test.apply({num: 100}, [1,2,3]); 


bind  ===> The bind method binds the this value to the function and returns a new function. 
However, we still need to separately invoke the returned function.
function test(arg){
 console.log(this.number, arg);
}
let bindedFn = test.bind({number: 99}, "argument");
bindedFn(); // 99, "argument"



call() and apply() are identical in functionality, 
the only difference is that call() accepts a list of arguments; 
whereas, apply() accepts a single array of arguments.

* 


Summary
call: binds the this value, invokes the function, and allows you to pass a list of arguments.

apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.

 */
