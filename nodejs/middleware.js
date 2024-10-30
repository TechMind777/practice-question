/**
 Middleware functions are functions that have access to the request object ( req ),  the response object ( res ), and the next middleware function in the application's request-response cycle.  The next middleware function is commonly denoted by a variable named next .
 
 * Middleware is a function that receives the request and response objects. 
 
Most tasks that the middleware functions perform are:

    -Execute any code
    -Update or modify the request and the response objects
    -Finish the request-response cycle
    -Invoke the next middleware in the stack
 */