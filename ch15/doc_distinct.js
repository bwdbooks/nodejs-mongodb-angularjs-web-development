var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", distinctValues);
  setTimeout(function(){
    db.close();
  }, 3000);
});
function distinctValues(err, words){
  words.distinct('size', function(err, values){
    console.log("\nSizes of words: ");
    console.log(values);
  });
  words.distinct('first', {last:'u'}, function(err, values){
    console.log("\nFirst letters of words ending in u: ");
    console.log(values);
  });
  words.distinct('stats.vowels', function(err, values){
    console.log("\nNumbers of vowels in words: ");
    console.log(values);
  });
}