var http = require('http');
var options = { port: '8080'};
function sendRequest(){
  http.request(options, function(response){
    var serverData = '';
    response.on('data', function (chunk) {
      serverData += chunk;
    });
    response.on('end', function () {
      console.log(serverData);
    });
  }).end();
}
for (var i=0; i<5; i++){
  console.log("Sending Request");
  sendRequest();
}