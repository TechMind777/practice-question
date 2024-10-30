/**

const testSchema = new mongoose.Schema({
  name: String,
  location: String
});

const Test = mongoose.model('Test', testSchema);

await Test.create({ name: 'Test Testerson' });
await Test.create({ name: 'Mastering JS' });
await Test.create({ name: 'MeanIT' });

// Set `location` property on all documents
await Test.updateMany({}, { location: 'Florida' });

// Set `location` property on documents whose 'name' starts with 'M'
await Test.updateMany({ name: /^M/ }, { $set: { location: 'Miami' } });
await Test.updateMany({ name:{$regex: '^M' }, { $set: { location: 'Miami' } });


----------------------- $inc
db.products.insertOne( { _id: 1, sku: "abc123", quantity: 10, metrics: { orders: 2, ratings: 3.5 } } )
db.products.updateOne(
   { sku: "abc123" },
   { $inc: { quantity: -2, "metrics.orders": 1 } }
)
output: {  _id: 1, sku: 'abc123', quantity: 8, metrics: { orders: 3, ratings: 3.5 } }

---------------------- $min/$max
db.scores.insertOne( { _id: 1, highScore: 800, lowScore: 200 } )

db.scores.updateOne( { _id: 1 }, { $min: { lowScore: 150 } } ) //--- compair lowScore 150 or 200 , lowScore update 200 to 150 
// output: { _id: 1, highScore: 800, lowScore: 150 }

db.scores.updateOne( { _id: 1 }, { $min: { lowScore: 300 } } ) //--- compair lowScore 300 or 200 , lowScore not update
// output: { _id: 1, highScore: 800, lowScore: 200 }

db.scores.updateOne( { _id: 1 }, { $max: { lowScore: 150 } } ) //--- compair lowScore 150 or 200 , lowScore not update 
// output: { _id: 1, highScore: 800, lowScore: 200 }
db.scores.updateOne( { _id: 1 }, { $max: { lowScore: 300 } } ) //--- compair lowScore 300 or 200 , lowScore update 
// output: { _id: 1, highScore: 800, lowScore: 300 }

-------------$mul
db.products.insertOne( { "_id" : 1, "item" : "Hats", "price" : Decimal128("10.99"), "quantity" : 25 } )
db.products.updateOne( { _id: 1 }, { $mul: { price: Decimal128( "1.25" ), quantity: 2 } } )
// output: { _id: 1, item: 'Hats', price: Decimal128("13.7375"), quantity: 50 }


----------------$rename ---update fiead name
db.students.updateOne( { _id: 1 }, { $rename: { 'nmae': 'name', 'cell': 'mobile' } })
db.students.updateOne( {}, { $rename: { 'nmae': 'name', 'cell': 'mobile' } })


--------------$set ------------- operator replaces the value of a field with the specified value.

db.products.insertOne( { _id: 100, quantity: 250, instock: true, reorder: false,
     details: { model: "14QQ", make: "Clothes Corp" },
     tags: [ "apparel", "clothing" ],
     ratings: [ { by: "Customer007", rating: 4 } ] } )



db.products.updateOne(
   { _id: 100 },
   { $set:
      {
        quantity: 500,
        details: { model: "2600", make: "Fashionaires" },
        tags: [ "coats", "outerwear", "clothing" ]
      }
   }
)

// output : {
  _id: 100, quantity: 500, instock: true, reorder: false,
  details: { model: '2600', make: 'Fashionaires' },
  tags: [ 'coats', 'outerwear', 'clothing' ],
  ratings: [ { by: 'Customer007', rating: 4 } ]
} 

db.products.updateOne( { _id: 100 }, { $set: { "details.make": "Kustom Kidz" } } )
//output: { _id: 100, quantity: 500, instock: true, reorder: false,
   details: { model: '2600', make: 'Kustom Kidz' },
   tags: [ 'coats', 'outerwear', 'clothing' ], ratings: [ { by: 'Customer007', rating: 4 } ] }


   db.products.updateOne( { _id: 100 }, { $set: { "tags.1": "rain gear", "ratings.0.rating": 2 } } )
//output  : { _id: 100, quantity: 500, instock: true, reorder: false,
  details: { model: '2600', make: 'Kustom Kidz' },
  tags: [ 'coats', 'rain gear', 'clothing' ], ratings: [ { by: 'Customer007', rating: 2 } ]
}

-----delete feild and delete 
db.collect.updateMany({}, {$unset:{'studentdattail': ''}})
 */