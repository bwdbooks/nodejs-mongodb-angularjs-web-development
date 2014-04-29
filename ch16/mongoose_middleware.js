var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
Words.schema.pre('init', function (next) {
  console.log('a new word is about to be initialized from the db');
  next();
});
Words.schema.pre('validate', function (next) {
  console.log('%s is about to be validated', this.word);
  next();
});
Words.schema.pre('save', function (next) {
  console.log('%s is about to be saved', this.word);
  console.log('Setting size to %d', this.word.length);
  this.size = this.word.length;
  next();
});
Words.schema.pre('remove', function (next) {
  console.log('%s is about to be removed', this.word);
  next();
});
Words.schema.post('init', function (doc) {
  console.log('%s has been initialized from the db', doc.word);
});
Words.schema.post('validate', function (doc) {
  console.log('%s has been validated', doc.word);
});
Words.schema.post('save', function (doc) {
  console.log('%s has been saved', doc.word);
});
Words.schema.post('remove', function (doc) {
  console.log('%s has been removed', doc.word);
});
mongoose.connection.once('open', function(){
  var newWord = new Words({
    word:'newword',
    first:'t',
    last:'d',
    size:'newword'.length,
  });
  console.log("\nSaving: ");
  newWord.save(function (err){ 
    console.log("\nFinding: ");
    Words.findOne({word:'newword'}, function(err, doc){
      console.log("\nRemoving: ");
      newWord.remove(function(err){
        mongoose.disconnect();
      });
    });
  });
});