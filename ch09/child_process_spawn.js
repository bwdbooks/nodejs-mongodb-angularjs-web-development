var spawn = require('child_process').spawn;
var options = {
    env: {user:'brad'},
    detached:false,
    stdio: ['pipe','pipe','pipe']
};
var child = spawn('netstat', ['-e']);
child.stdout.on('data', function(data) {
  console.log(data.toString());
});
child.stderr.on('data', function(data) {
  console.log(data.toString());
});
child.on('exit', function(code) {
  console.log('Child exited with code', code);
});