/**

enum Status {
  Valid,
  Invalid
};

const testSchema = new mongoose.Schema({
  rating: {
    type: Number,
    enum: Rating or     enum: ['valid', 'invalid']

  }
});

const Test = mongoose.model('Test', testSchema);

await Test.create({ name: 'invalid' }); // throws validation error
await Test.create({ name: 'Valid' }); // works


 */