/*
If no document with _id equal to 1 exists in the products collection, the following operation inserts a document with the field dateAdded set to the current date:


db.products.updateOne(
    { _id: 1 },
    {
      $set: { item: "apple" },
      $setOnInsert: { dateAdded: new Date() }
    },
    { upsert: true }
 )


 CLUSTER_TIME is available only on replica sets and sharded clusters.

The NOW and CLUSTER_TIME values remain the same throughout the pipeline.


db.customers.updateOne(
  { _id: 1 },
  [
   { $set: { lastModified: "$$NOW", cancellation: {date: "$$CLUSTER_TIME", reason: "user request"}, status: "D" } }
  ]
)



db.cakeSales.find( { orderDate: { $lt: ISODate("2021-02-25T10:03:46.000Z") } } )







