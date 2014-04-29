var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
  Words.find({word:/grat.*/}, function(err, docs){
    console.log("Before delete: ");
    for (var i in docs){
      console.log(docs[i].word);
    }
    var query = Words.remove();
    query.where('word').regex(/grati.*/);
    query.exec(function(err, results){
      console.log("\n%d Documents Deleted.", results);
      Words.find({word:/grat.*/}, function(err, docs){
        console.log("\nAfter delete: ");
        for (var i in docs){
          console.log(docs[i].word);
        }
        mongoose.disconnect();
      });
    });
  });
});