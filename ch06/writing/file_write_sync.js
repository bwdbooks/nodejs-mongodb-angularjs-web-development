var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];
fd = fs.openSync('../data/veggie.txt', 'w');
while (veggieTray.length){
  veggie = veggieTray.pop() + " ";
  var bytes = fs.writeSync(fd, veggie, null, null);
  console.log("Wrote %s %dbytes", veggie, bytes);
}
fs.closeSync(fd);