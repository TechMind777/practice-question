/**
 * 
db.students.insertMany( [
   { "_id" : 1, "grades" : [ 85, 80, 80 ] },
   { "_id" : 2, "grades" : [ 88, 90, 92 ] },
   { "_id" : 3, "grades" : [ 85, 100, 90 ] }
] )


db.students.updateOne( { _id: 1, grades: 80 }, { $set: { "grades.$" : 82 } } )
{ "_id" : 1, "grades" : [ 85, 82, 80 ] }
{ "_id" : 2, "grades" : [ 88, 90, 92 ] }
{ "_id" : 3, "grades" : [ 85, 100, 90 ] }

--------------------
{
  _id: 4,
  grades: [
     { grade: 80, mean: 75, std: 8 },
     { grade: 85, mean: 90, std: 5 },
     { grade: 85, mean: 85, std: 8 }
  ]
}
db.students.updateOne( { _id: 4, "grades.grade": 85 }, { $set: { "grades.$.std" : 6 } } )

//output : { "_id" : 4, "grades" : [
      { "grade" : 80, "mean" : 75, "std" : 8 },
      { "grade" : 85, "mean" : 90, "std" : 6 },
      { "grade" : 85, "mean" : 85, "std" : 8 } ] }
---------------$elemMatch

      db.students.updateOne( 
        { _id: 5, grades: { $elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 } } } },
        { $set: { "grades.$.std" : 6 } } )

    //output : { _id: 5, grades: [
    { grade: 80, mean: 75, std: 8 },
    { grade: 85, mean: 90, std: 6 },
    { grade: 90, mean: 85, std: 3 } ] }
-------------------
db.students_deans_list.insertMany( [
   {
      _id: 8,
      activity_ids: [ 1, 2 ],
      grades: [ 90, 95 ],
      deans_list: [ 2021, 2020 ]
   }
] )


db.students_deans_list.updateOne(
   { activity_ids: 1, grades: 95, deans_list: 2021 },
   { $set: { "deans_list.$": 2022 } }
)

output: { _id: 8, activity_ids: [ 1, 2 ], grades: [ 90, 95 ],
   deans_list: [ 2021, 2022 ] }

   --------------
   db.students.insertMany( [
   { "_id" : 1, "grades" : [ 95, 92, 90 ] },
   { "_id" : 2, "grades" : [ 98, 100, 102 ] },
   { "_id" : 3, "grades" : [ 95, 110, 100 ] }
] )

db.students.updateMany(
   { },
   { $set: { "grades.$[element]" : 100 } },
   { arrayFilters: [ { "element": { $gte: 100 } } ] }
)

output:[ { "_id" : 1, "grades" : [ 95, 92, 90 ] }
{ "_id" : 2, "grades" : [ 98, 100, 100 ] }
{ "_id" : 3, "grades" : [ 95, 100, 100 ] }]

---------------------------------------------------
db.students2.insertMany( [
   {
      "_id" : 1,
      "grades" : [
         { "grade" : 80, "mean" : 75, "std" : 6 },
         { "grade" : 85, "mean" : 90, "std" : 4 },
         { "grade" : 85, "mean" : 85, "std" : 6 }
      ]
   } 
] )


db.students2.updateMany(
   { },
   { $set: { "grades.$[elem].mean" : 100 } },
   { arrayFilters: [ { "elem.grade": { $gte: 85 } } ] }
)


output : [{
   "_id" : 1,
   "grades" : [
      { "grade" : 80, "mean" : 75, "std" : 6 },
      { "grade" : 85, "mean" : 100, "std" : 4 },
      { "grade" : 85, "mean" : 100, "std" : 6 }
   ]
}]

---------------
greater than or equal to 80 and the std is greater than or equal to 5, use the positional $[<identifier>] operator and arrayFilters:
db.students3.updateMany(
   { },
   { $inc: { "grades.$[elem].std" : -1 } },
   { arrayFilters: [ { "elem.grade": { $gte: 80 }, "elem.std": { $gte: 5 } } ] }
)

----------------------$addToSet 
The $addToSet operator adds a value to an array unless the value is already present, in which case $addToSet does nothing to that array.

db.alphabet.insertOne( { _id: 1, letters: ["a", "b"] } )

db.pigments.updateOne( { _id: 1 }, { $addToSet: { colors: "c" } } )
output: { _id: 1, letters: ["a", "b", "c"] }

db.alphabet.updateOne( { _id: 1 }, { $addToSet: { letters: [ "c", "d" ] } } )
output: { _id: 1, letters: ["a", "b", ["c","d"]] }

db.pigments.updateOne( { _id: 1 }, { $addToSet: { colors: "a" } } )
operation has no effect because "a" is already an element of the tags array:


db.inventory.updateOne( { _id: 2 }, { $addToSet: { tags: { $each: [ "c", "d", "e" ] } } } )
output: { _id: 1, letters: ["a", "b", "c","d", "e"] }


-------------------$pop
The $pop operator removes the first or last element of an array. 
Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.

db.students.insertOne( { _id: 1, scores: [ 8, 9, 10 ] } )

db.students.updateOne( { _id: 1 }, { $pop: { scores: -1 } } )
output: { _id: 1, scores: [ 9, 10 ] } // first element remove


db.students.updateOne( { _id: 1 }, { $pop: { scores: 1 } } )
output: { _id: 1, scores: [ 9 ] } // last element remove

----------------------------$pull / $pullAll
The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
$pullAll The $pullAll operator removes all instances of the specified values from an existing array. Unlike the $pull operator that removes elements by specifying a query,  $pullAll removes elements that match the listed values.
-----------------------
db.survey.insertOne( { _id: 1, scores: [ 0, 2, 5, 5, 1, 0 ] } )
 
db.survey.updateOne( { _id: 1 }, { $pullAll: { scores: [ 0, 5 ] } } )
 
output: { "_id" : 1, "scores" : [ 2, 1 ] }

--------------


db.stores.insertMany( [
   {
      _id: 1,
      fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
      vegetables: [ "carrots", "celery", "squash", "carrots" ]
   },
   {
      _id: 2,
      fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
      vegetables: [ "broccoli", "zucchini", "carrots", "onions" ]
   }
] )

db.stores.updateMany(
    { },
    { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
)

output: { _id: 1, fruits: [ 'pears', 'grapes', 'bananas' ], vegetables: [ 'celery', 'squash' ] },
{ _id: 2, fruits: [ 'plums', 'kiwis', 'bananas' ], vegetables: [ 'broccoli', 'zucchini', 'onions' ] }


db.profiles.insertOne( { _id: 1, votes: [ 3, 5, 6, 7, 7, 8 ] } )
db.profiles.updateOne( { _id: 1 }, { $pull: { votes: { $gte: 6 } } } )
// output : { _id: 1, votes: [  3,  5 ] }



   db.profilesBulkWrite.bulkWrite( [
      { insertOne: { "document": { _id: 1, votes: [ 3, 5, 6, 7, 7, 8 ] } } },
      { updateOne: { "filter": { _id: 1 }, "update": { $pull: { votes: { $gte: 6 } } } } },
      { updateOne: { "filter": {_id: 1}, "update": { $pull: { votes: { $lte: 3 } } } } }
   ] );

-----------------------
   { _id: 1, results: [ { item: 'A', score: 5 } ] },
{ _id: 2, results: [ { item: 'C', score: 8 }, { item: 'B', score: 4 } ] }


db.survey.updateMany( { }, { $pull: { results: { $elemMatch: { score: 8 , item: "B" } } } } )

--------------------
   [{ _id: 1, results: [
         { item: "A", score: 5, answers: [ { q: 1, a: 4 }, { q: 2, a: 6 } ] },
         { item: "B", score: 8, answers: [ { q: 1, a: 8 }, { q: 2, a: 9 } ] }
      ]
   }]


   db.survey.updateMany( { }, {
     $pull:
        {
           results:
              {
                 answers: { $elemMatch: { q: 2, a: { $gte: 8 } } }
              }
        }
  }
)
  ----------Use $push Operator with Multiple Modifiers
  
db.students.insertOne(
   {
      "_id" : 5,
      "quizzes" : [
         { "wk": 1, "score" : 10 },
         { "wk": 2, "score" : 8 },
         { "wk": 3, "score" : 5 },
         { "wk": 4, "score" : 6 }
      ]
   }
)


db.students.updateOne(
   { _id: 5 },
   {
     $push: {
       quizzes: {
          $each: [ { wk: 5, score: 8 }, { wk: 6, score: 7 }, { wk: 7, score: 6 } ],
          $sort: { score: -1 },
          $slice: 3
       }
     }
   }
)

{
  "_id" : 5,
  "quizzes" : [
     { "wk" : 1, "score" : 10 },
     { "wk" : 2, "score" : 8 },
     { "wk" : 5, "score" : 8 }
  ]
}

---------------------------- $position (start from 0)

The $position modifier specifies the location in the array at which the $push operator inserts elements. 
Without the  $position modifier, the $push operator inserts elements to the end of the array. See $push modifiers for more information.
 
 db.students.insertOne( { "_id" : 1, "scores" : [ 100 ] } )

 db.students.updateOne( { _id: 1 }, { $push: { scores: { $each: [ 50, 60, 70 ], $position: 0 } } } )

output:  { "_id" : 1, "scores" : [  50,  60,  70,  100 ] }



db.students.updateOne(  { _id: 3 }, { $push: { scores: { $each: [ 90, 80 ], $position: -2 } } } )
output: { "_id" : 3, "scores" : [ 50, 60, 20, 30, 90, 80, 70, 100 ] }

-------------$slice
{ "_id" : 1, "scores" : [ 40, 50, 60 ] }

Slice from the End of the Array:  (use -)
db.students.updateOne(
   { _id: 1 },
   {
     $push: {
       scores: {
         $each: [ 80, 78, 86 ],
         $slice: -5
       }
     }
   }
)

output: { "_id" : 1, "scores" : [  50,  60,  80,  78,  86 ] }

Slice from the Front of the Array:
{ "_id" : 2, "scores" : [ 89, 90 ] }

db.students.updateOne(
   { _id: 2 },
   {
     $push: {
       scores: {
         $each: [ 100, 20 ],
         $slice: 3
       }
     }
   }
)

output: { "_id" : 2, "scores" : [  89,  90,  100 ] }

Update Array Using Slice Only: 
{ "_id" : 3, "scores" : [  89,  70,  100,  20 ] }
db.students.updateOne(
  { _id: 3 },
  {
    $push: {
      scores: {
         $each: [ ],
         $slice: -3
      }
    }
  }
)

output: { "_id" : 3, "scores" : [  70,  100,  20 ] }


------------- $sort
db.students.insertOne( { "_id" : 2, "tests" : [  89,  70,  89,  50 ] } )

db.students.updateOne( { _id: 2 }, { $push: { tests: { $each: [ 40, 60 ], $sort: 1 } } } )

{ "_id" : 2, "tests" : [  40,  50,  60,  70,  89,  89 ] }


db.students.updateOne( { _id: 3 }, { $push: { tests: { $each: [ ], $sort: -1 } } } )





*/