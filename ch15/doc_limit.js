var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", limitFind);
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
function limitFind(err, words){
  words.count({first:'p'}, function(err, count){
    console.log("Count of words starting with p : " + count);
  });
  words.find({first:'p'}, function(err, cursor){
    displayWords("Words starting with p : ", cursor);
  });
  words.find({first:'p'}, {limit:5}, function(err, cursor){
    displayWords("Limiting words starting with p : ", cursor);
  });
}