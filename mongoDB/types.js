/**
 * 12. What are the data types in MongoDB?
MongoDB supports a wide range of data types as values in documents. Documents in MongoDB are similar to objects in JavaScript. Along with JSON’s essential key/value–pair nature, MongoDB adds support for a number of additional data types. The common data types in MongoDB are:

Null
{"x" : null}
Boolean
{"x" : true}
Number
{"x" : 4}
String
{"x" : "foobar"}
Date
{"x" : new Date()}
Regular expression
{"x" : /foobar/i}
Array
{"x" : ["a", "b", "c"]}
Embedded document
{"x" : {"foo" : "bar"}}
Object ID
{"x" : ObjectId()}
Binary Data
Binary data is a string of arbitrary bytes.
Code
{"x" : function() { /* ... */ }}

 */