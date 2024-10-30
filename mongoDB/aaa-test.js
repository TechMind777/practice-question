/*
https://www.mongodb.com/docs/manual/reference/operator/update/positional/


db.students.insertMany( [
   { "_id" : 1, "grades" : [ 85, 80, 80 ] },
   { "_id" : 2, "grades" : [ 88, 90, 92 ] },
   { "_id" : 3, "grades" : [ 85, 100, 90 ] }
] )


{
  _id: 4,
  grades: [
     { grade: 80, mean: 75, std: 8 },
     { grade: 85, mean: 90, std: 5 },
     { grade: 85, mean: 85, std: 8 }
  ]
}

1. Use the positional $ operator to update the std field of the first array element that matches the grade equal to 85 condition:

2. In the example below, the  $ operator updates the value of the std field in the first embedded document that has grade field with a value less than or equal to 90 and a mean field with a value greater than 80:

db.students_deans_list.insertMany( [
   {
      _id: 8,
      activity_ids: [ 1, 2 ],
      grades: [ 90, 95 ],
      deans_list: [ 2021, 2020 ]
   }
] )

3. In the following example, the user attempts to modify the deans_list field, filtering documents using the activity_ids, deans_list, and grades fields, and updating the 2021 value in the deans_list field to 2022:


4. db.students.insertMany( [
   { "_id" : 1, "grades" : [ 85, 82, 80 ] },
   { "_id" : 2, "grades" : [ 88, 90, 92 ] },
   { "_id" : 3, "grades" : [ 85, 100, 90 ] }
] )

4.1 - update grades all 10 by _id= 1 
output: { "_id" : 1, "grades" : [ 10, 10, 10 ] },


4.2 - update grades all incress 10 by _id= 1 
output: { "_id" : 1, "grades" : [ 95, 92, 90 ] },


4.2 - update grades _id= 1, grades=80 update to 100
output: { "_id" : 1, "grades" : [ 95, 92, 90 ] },



5. db.students2.insertMany( [
   {
      "_id" : 1,
      "grades" : [
         { "grade" : 80, "mean" : 75, "std" : 8 },
         { "grade" : 85, "mean" : 90, "std" : 6 },
         { "grade" : 85, "mean" : 85, "std" : 8 }
      ]
   },
   {
      "_id" : 2,
      "grades" : [
         { "grade" : 90, "mean" : 75, "std" : 8 },
         { "grade" : 87, "mean" : 90, "std" : 5 },
         { "grade" : 85, "mean" : 85, "std" : 6 }
      ]
   }
] )

5.1 To modify the value of the std field for all elements in the grades array, use the positional  $[] operator:
OUTPUT :{
   "_id" : 1,
   "grades" : [
      { "grade" : 80, "mean" : 75, "std" : 6 },
      { "grade" : 85, "mean" : 90, "std" : 4 },
      { "grade" : 85, "mean" : 85, "std" : 6 }
   ]
}

*/