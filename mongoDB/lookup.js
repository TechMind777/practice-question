/**
 * -----------$lookup
 * 
  Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing. The $lookup stage adds a new array field to each input document. The new array field contains the matching documents from the "joined" collection. The $lookup stage passes these reshaped documents to the next stage.

db.orders.aggregate( [
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   },
   { $project: { fromItems: 0 } }
] )


output: { _id: 1, item: 'almonds', description: 'almond clusters', instock: 120, price: 12, quantity: 2 },
{ _id: 2, item: 'pecans', description: 'candied pecans', instock: 60, price: 20, quantity: 1 }
 

---------------Perform Multiple Joins and a Correlated Subquery with $lookup
db.orders.insertMany( [
  { "_id" : 1, "item" : "almonds", "price" : 12, "ordered" : 2 },
  { "_id" : 2, "item" : "pecans", "price" : 20, "ordered" : 1 },
  { "_id" : 3, "item" : "cookies", "price" : 10, "ordered" : 60 }
] )
 
db.warehouses.insertMany( [
  { "_id" : 1, "stock_item" : "almonds", warehouse: "A", "instock" : 120 },
  { "_id" : 2, "stock_item" : "pecans", warehouse: "A", "instock" : 80 },
  { "_id" : 3, "stock_item" : "almonds", warehouse: "B", "instock" : 60 },
  { "_id" : 4, "stock_item" : "cookies", warehouse: "B", "instock" : 40 },
  { "_id" : 5, "stock_item" : "cookies", warehouse: "A", "instock" : 80 }
] )
 db.orders.aggregate( [
   {
      $lookup:
         {
           from: "warehouses",
           let: { order_item: "$item", order_qty: "$ordered" },
           pipeline: [
              { $match:
                 { $expr:
                    { $and:
                       [
                         { $eq: [ "$stock_item",  "$$order_item" ] },
                         { $gte: [ "$instock", "$$order_qty" ] }
                       ]
                    }
                 }
              },
              { $project: { stock_item: 0, _id: 0 } }
           ],
           as: "stockdata"
         }
    }
] )



db.orders.aggregate( [
   {
      $lookup: {
         from: "restaurants",
         localField: "restaurant_name",
         foreignField: "name",
         let: { orders_drink: "$drink" },
         pipeline: [ {
            $match: {
               $expr: { $in: [ "$$orders_drink", "$beverages" ] }
            }
         } ],
         as: "matches"
      }
   }
] )


db.orders.aggregate( [
   {
      $lookup: {
         from: "restaurants",
         let: { orders_restaurant_name: "$restaurant_name",
                orders_drink: "$drink" },
         pipeline: [ {
            $match: {
               $expr: {
                  $and: [
                     { $eq: [ "$$orders_restaurant_name", "$name" ] },
                     { $in: [ "$$orders_drink", "$beverages" ] }
                  ]
               }
            }
         } ],
         as: "matches"
      }
   }
] )




 */