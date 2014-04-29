var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", sortItems);
  setTimeout(function(){
    db.close();
  }, 3000);
});
function displayWords(msg, cursor, pretty){
  cursor.toArray(function(err, itemArr){
    console.log("\n"+msg);
    var wordList = [];
    for(var i=0; i<itemArr.length; i++){
      wordList.push(itemArr[i].word);
    }
    console.log(JSON.stringify(wordList, null, pretty));
  });
}
function sortItems(err, words){
  words.find({last:'w'}, function(err, cursor){
    displayWords("Words ending in w: ", cursor);
  });
  words.find({last:'w'}, {sort:{word:1}}, function(err, cursor){
    displayWords("Words ending in w sorted ascending: ", cursor);
  });
  words.find({last:'w'}, {sort:{word:-1}}, function(err, cursor){
    displayWords("Words ending in w sorted, descending: ", cursor);
  });
  words.find({first:'b'}, {sort:[['size',-1],['last',1]]}, 
             function(err, cursor){
    displayWords("B words sorted by size then by last letter: ", cursor);
  });
  words.find({first:'b'}, {sort:[['last',1],['size',-1]]}, 
             function(err, cursor){
    displayWords("B words sorted by last letter then by size: ", cursor);
  });
}