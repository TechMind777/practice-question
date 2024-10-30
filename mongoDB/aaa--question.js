/*
Auto delete inserted record in mongodb?

    To automatically delete a record in MongoDB after a certain time, you can use TTL (Time-to-Live) indexes. TTL indexes allow MongoDB to automatically delete documents after a specified amount of time.
    db.collection.insertOne({
        name: "Sample Record",
        createdAt: new Date()  // Date field for TTL
    });

    Create TTL Index:
    db.collection.createIndex(
        { "createdAt": 1 },  // Field to index on (date field)
        { expireAfterSeconds: 3600 }  // 3600 seconds = 1 hour
    );



when we delete Object(_id) -> mongobd will cress

https://database.guide/category/dbms/nosql/mongodb/page/2/

 
 * How to Fix 'Query was already executed' in Mongoose
 * 
        Mongoose throws a 'Query was already executed' error when a given query is executed twice. The most common explanation for this is you're mixing await and callbacks.

        Causes "MongooseError: Query was already executed" error. That's because Mongoose  executes a query when it receives a callback _or_ when you `await`. If you  `await` and pass a callback, this query executes twice.
            await Model.updateMany({}, { $inc: { count: 1 } }, function(err) {    });
        Or:

        // Causes "MongooseError: Query was already executed" error. This query executes twice. Once because of the callback, and once because of `then()`.
        Model.updateMany({}, { $inc: { count: 1 } }, function(err) {  }).then(() => { ... });
        // The solution is to skip passing a callback. You don't need callbacks in Mongoose, because Mongoose supports promises and async/await.

        await Model.updateMany({}, { $inc: { count: 1 } });
        // or
        Model.updateMany({}, { $inc: { count: 1 } }).then(() => { ... });


d/w mongo and mogoD
    mongo : 'mongo' id command-line shell that connect to specific  instance of mongod
    mongod : mongod  is the "mongo Daemon" it is basically the host process for the database


    sql ---------nosql

    database ------------ database
    tables -----------collection
    rows --------- document (BSON)/Binary JSON,
    column ----------- fields

    Comparison Query Operator
    -$eq
    -$gt
    -$gte
    -$in
    -$lt
    -$lte
    -$ne
    -$nin


    Array Query Operators
    -$all
    -$elemMatch
    -$size

    Element Query Operators
    -$exists // it taks true/false
    -$type // give type of value

    */















 