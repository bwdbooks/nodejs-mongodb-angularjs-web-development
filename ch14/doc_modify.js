var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.find({type:"supernova"}, function(err, items){
      items.toArray(function(err, itemArr){
        console.log("Before Modify: ");
        console.log(itemArr);
        nebulae.findAndModify({type:"supernova"}, [['name', 1]], 
            {$set: {type:"Super Nova", "updated":true}},
            {w:1, new:true}, function(err, doc){
          console.log("After Modify: ");
          console.log(doc);
          db.close();
        });
      });
    });
  });
});