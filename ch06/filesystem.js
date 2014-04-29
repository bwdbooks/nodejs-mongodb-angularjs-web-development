var fs = require('fs');
fs.exists('filesystem.js', function (exists) {
  console.log(exists ? "Path Exists" : "Path Does Not Exist");
});

fs.writeFileSync("old.txt", "text");
fs.rename("old.txt", "new.txt", function(err){
  console.log(err ? "Rename Failed" :  "File Renamed");
});
fs.mkdirSync("test");
fs.rename("test", "renamed", function(err){
  console.log(err ? "Rename Failed" :  "Folder Renamed");
});

fs.truncate("new.txt", function(err){
  console.log(err ? "File Truncate Failed" :  "File Truncated");
});

fs.unlink("new.txt", function(err){
  console.log(err ? "File Delete Failed" :  "File Deleted");
});
