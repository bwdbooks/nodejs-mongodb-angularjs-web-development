var tls = require('tls'),
    fs = require('fs');
var options = {
    host: '127.0.0.1',
  key: fs.readFileSync('ssl/client.key'),
  cert: fs.readFileSync('ssl/client.crt'),
  ca: fs.readFileSync('ssl/server.crt')
};
var conn = tls.connect(8000, options, function() {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError);
  }
    console.log();
});
conn.on("data", function (data) {
  console.log(data.toString());
  conn.end();
});