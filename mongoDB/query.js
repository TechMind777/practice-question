/**
 * 
https://masteringjs.io/tutorials/mongoose/unique

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true // `email` must be unique
  }
});
const User = mongoose.model('User', userSchema)


// Throws `MongoError: E11000 duplicate key error collection...`
await User.create([
  { email: 'test@google.com' },
  { email: 'test@google.com' }
]);

const doc = new User({ email: 'test@google.com' });
// Throws `MongoError: E11000 duplicate key error collection...`
await doc.save();

----------------------
When writing Mongoose tests, we normally recommend using deleteMany() to clear out data in between tests, rather than dropDatabase(). This ensures that you delete all documents, without clearing out database-level configuration, like indexes and collations. deleteMany() is also much faster than dropDatabase().

However, if you choose to drop the database between tests, you can use the Model.syncIndexes() function to rebuild all unique indexes.

await mongoose.connection.dropDatabase();

// Rebuild all indexes
await User.syncIndexes();

// Throws `MongoError: E11000 duplicate key error collection...`
await User.create([
  { email: 'sergey@google.com' },
  { email: 'sergey@google.com' }
]);
--------------------------------------
Handling null Values
Since null is a distinct value, you cannot save two users that have a null email. Similarly, you cannot save two users that don't have an email property.

// Throws because both documents have undefined `email`
await User.create([
  {},
  {}
]);

// Throws because both documents have null `email`
await User.create([
  { email: null },
  { email: null }
]);



One workaround is to make the email property required, which disallows null and undefined:

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // `email` must be unique
  }
});


If you need email to be unique unless it is not defined, you can instead define a sparse unique index on email as shown below.

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // `email` must be unique, unless it isn't defined
    index: { unique: true, sparse: true }
  }
});

mongoose connection
mongoose.connect( 'mongodb+srv://ajtest:J9Xv169XWFbkSoQT@cluster0.b2p29.mongodb.net/test?retryWrites=true' )
.then(result => {
  app.listen(8082);
})
.catch(err => console.log(err));



 { "_id" : "100", "animalArray" : [ "dog", "lizard", "lion" ] }	


    Add in  animalArray	
    db.animal.update(	
    { "_id": "100" },	
    {	
        $push: {
        animalArray: "cat"
        }
    }	
    );	


    Pushing Elements at the start of the Array	
        db.animal.update(	
        { "_id": "100" },	
        {	
            $push: {
            animalArray: {
            $each: ['cow'],
            $position: 0
            }
            }
        }	
        );	


        Pushing Elements at the end of the Array	
        db.animal.update(	
        { "_id": "100" },	
        {	
        $push: {	
        animalArray: {	
          $each: ['goat'],	
          $position: -1	
        }	
        }	
        });	


        Pushing Multiple Elements before 2nd last
        { "_id" : "100", "animalArray" : [ "dog", "lizard", "lion" ] }	

        db.animal.update(
        { "_id": "101" },
        {
        $push: {
        animalArray: {
        $each: ['dove', 'eagle', 'hawk'],
        $position: -2
        }
        }
        }
        );
        output: { "_id" : "100", "animalArray" : [ "dog", 'dove', 'eagle', 'hawk', "lizard", "lion" ] }	


        MongoDB $limit Example	
        db.articles.aggregate(
            { $limit : 5 }
        );


        MongoDB $sort Example (1 Ass, -1 des)
        db.student.aggregate( [
            { $sort : { age : -1} }
        ] )


 */