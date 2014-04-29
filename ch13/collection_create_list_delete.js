var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var newDB = db.db("newDB");
  newDB.collectionNames(function(err, collectionNames){
    console.log("Initial collections: ");
    console.log(collectionNames);
    newDB.createCollection("newCollection", function(err, collection){
      newDB.collectionNames(function(err, collectionNames){
        console.log("Collections after creation: ");
        console.log(collectionNames);
        newDB.dropCollection("newCollection", function(err, results){
          newDB.collectionNames(function(err, collectionNames){
            console.log("Collections after deletion: ");
            console.log(collectionNames);
            db.close();
          });
        });
      });
    });
  });
});
