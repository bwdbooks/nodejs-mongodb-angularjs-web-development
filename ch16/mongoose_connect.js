var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/words');
mongoose.connection.on('open', function(){
  console.log(mongoose.connection.collection);
  mongoose.connection.db.collectionNames(function(err, names){
    console.log(names);
    mongoose.disconnect();
  });
});
