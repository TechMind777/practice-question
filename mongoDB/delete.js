/**
 * 
 *You can make deleteOne() middleware fire with this as the document being deleted by setting the { document: true } option on pre() and post() as shown below. However, keep in mind that, if you set { document: true, query: false }, your middleware will only fire on Document.prototype.deleteOne(). It won't fire on Query.prototype.deleteOne().

const testSchema = new mongoose.Schema({
  name: String
});

testSchema.pre('deleteOne', { document: true, query: false }, async function() {
  console.log(this instanceof mongoose.Document); // true
});
const Test = mongoose.model('Test', testSchema);

const doc = await Test.create({});

await doc.deleteOne(); // Prints "true"

await Test.deleteOne(); // Doesn't print anythin


 * 
 * Mongoose will only fire middleware if the delete operation goes through Mongoose. For example, 
 * the previous section's middleware won't fire if someone deletes a document through the MongoDB shell, Studio 3T, 
 * or an app written in Java. You must use the change streams feature in order to detect changes from other apps as shown 
 * below:

const testSchema = new mongoose.Schema({
  name: String
});

const Test = mongoose.model('Test', testSchema);

Test.(watch).on('change', (data) => {
  // check if it is a delete operation
  if (data.operationType == 'delete') {
    // do stuff
  }
});
You must be connected to a MongoDB replica set or sharded cluster to use change streams.
 */