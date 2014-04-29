var http = require('http');
http.createServer(function (req, res) {
  var jsonData = "";
  req.on('data', function (chunk) {
    jsonData += chunk;
  });
  req.on('end', function () {
    var reqObj = JSON.parse(jsonData);
    var resObj = {
      message: "Hello " + reqObj.name,
      question: "Are you a good " + reqObj.occupation + "?"
    };
    res.writeHead(200);
    res.end(JSON.stringify(resObj));
  });
}).listen(8080);


var http = require('http');
var options = {
  host: '127.0.0.1',
  path: '/',
  port: '8080',
  method: 'POST'
};
function readJSONResponse(response) {
  var responseData = '';
  response.on('data', function (chunk) {
    responseData += chunk;
  });  
  response.on('end', function () {
    var dataObj = JSON.parse(responseData);
    console.log("Raw Response: " +responseData);
    console.log("Message: " + dataObj.message);
    console.log("Question: " + dataObj.question);
  });
}
var req = http.request(options, readJSONResponse);
req.write('{"name":"Bilbo", "occupation":"Burglar"}');
req.end();