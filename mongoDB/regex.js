/*

Regular expression are use to match pattern in a Document 
{
$regex : /pattern/
{ <field>:{ $regex: "^pattern$"} }
{ <field> :  {$regex: /pattern/, $options: s/x/i/m}}
}

s - 

m - uses the m option to match lines starting with the letter S for multiline strings:

name:{$regex: /ma/}  --> it match 'ma' all string
name:{$regex: /ma/i}  --> it match 'ma' all string (ma or MA)
name:{$regex: /^ma/i}  --> it match 'ma'  string start from 'ma' (ma or MA)
name:{$regex:[ /ma/i, /re/]}  --> not use like this
name : {$in: [ /ma/i, /re/]}  -->  use like this , search ma or re


M  -  m option to match lines starting with the letter S for multiline strings:

ajay\nrajpoot
ajay rajpoot

name:{$regex: /a/m} --> serch also in new line also


s ----Use the . Dot Character to Match New Line
The following example uses the s option to allow the dot character (i.e. .) to match all characters including new line as well as the i option to perform a case-insensitive match:


db.products.find( { description: { $regex: /m.*line/, $options: 'si' } } )
[
   {  description: 'Many spaces before     line' },
   {  description: 'Multiple\nline description' }
]

x ---x option ignore white spaces and the comments, denoted by the # and ending with the \n in the matching pattern:

var pattern = "abc #category code\n123 #item number"
db.products.find( { sku: { $regex: pattern, $options: "x" } } )

OUTPUT: [ { _id: 100, sku: 'abc123', description: 'Single line description.' } ]