var MongoClient = require('mongodb').MongoClient,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var grid = new Grid(db, 'fs');
  var data = new Buffer('Hello world');
  console.log("\nOriginal Data: ");
  console.log(data.toString());
  grid.put(data, {_id: "test.file"}, function(err, results) {
    console.log("\nPut Results: ");
    console.log(results);
    grid.get("test.file", function(err, data) {
      console.log("\nBefore Delete Get: ");
      console.log(data.toString());
      grid.delete("test.file", function(err, results) {
        console.log("\nDelete Results: ");
        console.log(results);
        db.close();
      });
    });
  });
});