/*

db.myColl.createIndex( { score: 1, price: 1, category: 1 }, { collation: { locale: "fr" } } )
db.pets.getIndexes()
db.pets.unhideIndex("idx_weight_-1")
db.bars.dropIndex("location_2dsphere")
db.pets.dropIndexes( [ "type_1", "name_1" ])
db.bars.dropIndex( { "name" : 1 } )
db.runCommand( { dropIndexes: "posts", index: "*" })


For example, the following operation creates an index on the log_events collection's expireAt field and specifies the expireAfterSeconds value of 0:
db.log_events.createIndex( { "expireAt": 1 }, { expireAfterSeconds: 0 } )

Unique Index on a Single Field:
For example, to create a unique index on the user_id field of the members collection, use the following operation in mongosh:
db.members.createIndex( { "user_id": 1 }, { unique: true }


db.pets.distinct( "type" )
db.runCommand ( { distinct: "pets", key: "type" } )
db.pets.aggregate( [ { $group : { _id : "$type" } } ] )

db.pets.find().sort({ weight: 1 }).pretty()
db.pets.aggregate([ { $sort: { weight: 1 } } ])

db.pets.find( { $query: {}, $orderBy: { weight: 1 } } ) or 
db.pets.find()._addSpecial( "$orderby", { weight : 1 } )


result: { $isArray: "$data" }
{ $log: [ <number>, <base> ] }
{ $indexOfCP: [ <string expression>, <substring expression>, <start>, <end> ] }
{ $indexOfArray: [ <array expression>, <search expression>, <start>, <end> ] }

$project: {  truncated: { $trunc: [ "$data" ] } } --> number to a whole integer  or to a specified decimal place
$project: {  truncated: { $trunc: [ "$data", 0 ] } }
result: { $split: [ "$data", ", " ] }
result: { $slice: [ "$data", 3 ] }
result: { $slice: [ "$data", 10, 3 ] }
$group: {  _id:null,totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } }, }

*/