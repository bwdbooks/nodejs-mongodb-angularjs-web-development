var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.find(function(err, items){
      items.toArray(function(err, itemArr){
        console.log("Document Array: ");
        console.log(itemArr);
      });
    });
    nebulae.find(function(err, items){
      items.each(function(err, item){
        if(item){
          console.log("Singular Document: ");
          console.log(item);
        }
      });
    });
    nebulae.findOne({type:'planetary'}, function(err, item){
      console.log("Found One: ");
      console.log(item);
    });
  });
  setTimeout(function(){ db.close(); }, 3000);
});