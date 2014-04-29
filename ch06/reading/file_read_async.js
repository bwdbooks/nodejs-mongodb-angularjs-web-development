var fs = require('fs');
function readFruit(fd, fruits){
  var buf = new Buffer(5);
  buf.fill();
  fs.read(fd, buf, 0, 5, null, function(err, bytes, data){
      if ( bytes > 0) {
        console.log("read %dbytes", bytes);
        fruits += data;
        readFruit(fd, fruits);
      } else {
        fs.close(fd);
        console.log ("Fruits: %s", fruits);
      }
  });
}
fs.open('../data/fruit.txt', 'r', function(err, fd){
  readFruit(fd, "");
});
