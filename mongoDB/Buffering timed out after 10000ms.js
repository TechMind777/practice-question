/**
 * How to Fix "Buffering timed out after 10000ms" Error in Mongoose
 * 
 * This error happens because you're trying to use a model whose connection hasn't connected to MongoDB. Remember that, in Mongoose, every model has exactly one connection to MongoDB. The buffering timeout is usually due to either registering models on a newly created connection but using mongoose.connect():
 * 
 */