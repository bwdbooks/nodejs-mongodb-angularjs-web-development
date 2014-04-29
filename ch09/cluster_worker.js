var cluster = require('cluster');
var http = require('http');
if (cluster.isWorker) {
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("Process " + process.pid + " says hello");
    process.send("Process " + process.pid + " handled request");
  }).listen(8080, function(){
    console.log("Child Server Running on Process: " + process.pid);    
  });
}