var zlib = require("zlib");
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('zlib_file.js');
var outFile = fs.createWriteStream('zlib_file.gz');
inFile.pipe(gzip).pipe(outFile);
setTimeout(function(){
  var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
  var inFile = fs.createReadStream('zlib_file.gz');
  var outFile = fs.createWriteStream('zlib_file.unzipped');
  inFile.pipe(gunzip).pipe(outFile);
}, 3000);