/*
insertOne() and insertMany()
find() and findOne().  second parameter called projection.
updateOne() or updateMany({},{} , {upsert: true}) , upsert-> insert the document if  found.
deleteOne() or deleteMany().

$inc



aggregate
$match: new mongoose.Type.ObjectId(req.user_id)
$lookup : {
    from: 'video',
    localField:'watchHistory',
    foreignFeild: 'id',
    as : 'watchHistory',
    let: { order_item: "$item", order_qty: "$ordered" },
    pipeline : { 
        $match:
        { $expr:
           { $and:
              [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] }
              ]

$replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }

$project
$addFields

$addFields : { author_details: {
        $first: "$author_details" or $arryayEleAt["$author_details", 0]   } }


        
isSubscribed: {
    $cond: {
        if($in : [req.user?.id, "$sebscribers.sebscriber"]),  then: true, else: false
    }
}

$eq : Matches values that are equal to a specified value.
$gt : Matches values that are greater than a specified value.
$gte : Matches values that are greater than or equal to a specified value.
$in : Matches any of the values specified in an array.
$lt : Matches values that are less than a specified value.
$lte : Matches values that are less than or equal to a specified value.
$ne : Matches all values that are not equal to a specified value.
$nin : Matches none of the values specified in an array.

{ $set: { "grades.$[elem].mean" : 100 } },
{ arrayFilters: [ { "elem.grade": { $gte: 85 } } ] }

{ $addToSet: { tags: { $each: [ "c", "d", "e" ] } } }

$pop
$pull/$pullAll
$push -->  $push: { scores: { $each: [ 50, 60, 70 ], $position: 0 } } 

$elemMatch in array

$sort
$slice

Comparison 
$eq, $ne, $gt, $gte, $lt, $lte, $in

Logical
$and, $or, $nor, $not 
 
Evaluation
$regex, $text, $where

----update operator

Fields - The following operators can be used to update fields:
$currentDate: Sets the field value to the current date
$inc: Increments the field value
$rename: Renames the field
$set: Sets the value of a field
$unset: Removes the field from the document -- used in aggregate

Array -  The following operators assist with updating arrays.

$addToSet: Adds distinct elements to an array
$pop: Removes the first or last element of an array
$pull: Removes all elements from an array that match the query
$push: Adds an element to an array 

$unset and $project
The  $unset is an alias for the $project stage that removes/excludes fields:
{ $unset: [ "<field1.nestedfield>", ...] }



{ $out: { db: "<output-db>", coll: "<output-collection>" } }

{ $out: "<output-collection>" } // Output collection is in the same database



db.createCollection( "log", { capped: true, size: 100000 } )
Additionally, you may also specify a maximum number of documents for the collection using the max field as in the following document:
db.createCollection("log", { capped : true, size : 5242880, max :
5000 } )
db.collection.isCapped()
db.runCommand({"convertToCapped": "mycoll", size: 100000});

*/