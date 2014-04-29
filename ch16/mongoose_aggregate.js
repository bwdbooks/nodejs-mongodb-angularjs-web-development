var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
setTimeout(function(){
  mongoose.disconnect();
}, 3000);
mongoose.connection.once('open', function(){
  Words.aggregate([{$match: {first:{$in:['a','e','i','o','u']}}},
                           {$group: {_id:"$first", 
                             largest:{$max:"$size"}, 
                             smallest:{$min:"$size"}, 
                             total:{$sum:1}}},
                   {$sort: {_id:1}}],
              function(err, results){
    console.log("\nLargest and smallest word sizes for " +
                "words beginning with a vowel: ");
    console.log(results);
  });
  var aggregate = Words.aggregate();
  aggregate.match({size:4});
  aggregate.limit(5);
  aggregate.append({$project: {_id:"$word", stats:1}});
  aggregate.exec(function(err, results){
    console.log("\nStats for 5 four letter words: ");
    console.log(results);
  });
  var aggregate = Words.aggregate();
  aggregate.group({_id:"$first", average:{$avg:"$size"}});
  aggregate.sort('-average');
  aggregate.limit(5);
  aggregate.exec( function(err, results){
    console.log("\nLetters with largest average word size: ");
    console.log(results);
 });
});