var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
  var query = Words.findOne().where('word', 'unhappy');
  query.exec(function(err, doc){
    console.log("Before Delete: ");
    console.log(doc);
    doc.remove(function(err, deletedDoc){
      Words.findOne({word:'unhappy'}, function(err, doc){
        console.log("\nAfter Delete: ");
        console.log(doc);
        mongoose.disconnect();
      });
    });
  });
});