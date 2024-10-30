/**
 
Using an Instance Method
You could also make deleteById() a Mongoose static on your schema, which will make deleteById() a function on your model as shown below.

const testSchema = new mongoose.Schema({
  name: String
});

testSchema.statics.deleteById = function(_id) {
  return this.deleteOne({ _id: _id })
};

const Test = mongoose.model('Test', testSchema);

async function run() {
  const entry = await Test.create({ name: 'Masteringjs' });
  console.log(await Test.countDocuments({ _id: entry._id })); // 1

  await Test.deleteById(entry._id);

  console.log(await Test.countDocuments({ _id: entry._id })); // 0  
}



 */