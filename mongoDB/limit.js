/**
 * Mongoose's limit option allows you to limit the amount of results from the query. The easiest way to set the limit option is using the limit() method as follows.
 * 
 * await Test.find().limit(5); // returns a maximum of 5 documents, could be in any order
await Test.find().sort({ createdAt: -1 }).limit(5); // returns the first 5 documents created
 */