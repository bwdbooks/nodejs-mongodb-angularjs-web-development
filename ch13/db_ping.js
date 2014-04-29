var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var adminDB = db.admin();
  adminDB.ping(function(err, status){
    console.log(status);
    db.close();
  });
});