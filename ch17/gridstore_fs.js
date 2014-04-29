var MongoClient = require('mongodb').MongoClient,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var gridStore = new GridStore(db, "word_file", 'w');
  gridStore.open(function(err, gridStore) {
    GridStore.exist(db,"word_file", function(err, results) {
      console.log("File created? " + results);
    });
    gridStore.writeFile('./words.txt', function(err, results) {
      console.log("\nFile Written.");
      GridStore.read(db, "word_file", function(err, fileData) {
        console.log("\nFull Read: ");
        console.log(fileData.toString());
        gridStore.seek(100, function(err, gridStore) {
          gridStore.read(50, function(err, data) {
            console.log("\nRead 50 bytest at position 100: ");
            console.log(data.toString());
            gridStore.close();
            GridStore.unlink(db, "word_file", function(err, results){
              console.log("\nFile Deleted: " + results._id);
              db.close();
            });
          });
        });
      });
    });
  });
}); 