function displayObjects(msg, cursor, pretty){
  cursor.toArray(function(err, itemArr){
    console.log("\n"+msg);
    if(err){
      console.log(err);
    } else {
      for(var i=0; i<itemArr.length; i++){
        console.log(JSON.stringify(itemArr[i], null, pretty));
      }
    }
  });
}
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
function displayWordFields(msg, cursor, fields, pretty){
  cursor.toArray(function(err, itemArr){
    console.log("\n"+msg);
    if(err){
      console.log(err);
    } else {
      for(var i=0; i<itemArr.length; i++){
        console.log("WORD: "+ itemArr[i].word);
        for(var j=0; j<fields.length; j++){
          console.log(fields[j]+" :"+
              JSON.stringify(itemArr[i][fields[j]], null, pretty));
        }
      }
    }
  });
}
module.exports.displayObjects = displayObjects;
module.exports.displayWords = displayWords;
module.exports.displayWordFields = displayWordFields;
