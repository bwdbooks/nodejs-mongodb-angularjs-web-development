var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", groupItems);
  setTimeout(function(){
    db.close();
  }, 3000);
});
function groupItems(err, words){
  words.group(['first','last'], 
              {first:'o',last:{$in:['a','e','i','o','u']}},
              {"count":0}, 
              function (obj, prev) { prev.count++; }, true,
              function(err, results){
        console.log("\n'O' words grouped by first and last" +
                    " letter that end with a vowel: ");
        console.log(results);
  });
  words.group(['first'],
              {size:{$gt:13}},
              {"count":0, "totalVowels":0},
              function (obj, prev) { 
                prev.count++; prev.totalVowels += obj.stats.vowels;
              }, {}, true, 
              function(err, results){
    console.log("\nWords grouped by first letter larger than 13: ");
    console.log(results);
  });
  words.group(['first'],{}, {"count":0, "vowels":0, "consonants":0}, 
              function (obj, prev) { 
                prev.count++;
                prev.vowels += obj.stats.vowels;
                prev.consonants += obj.stats.consonants;
              },function(obj){
                obj.total = obj.vowels + obj.consonants;
              }, true, 
              function(err, results){
        console.log("\nWords grouped by first letter with totals: ");
        console.log(results);
  });
}