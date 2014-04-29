var childProcess = require('child_process');
var options = {maxBuffer:100*1024, encoding:'utf8', timeout:5000};
var child = childProcess.exec('dir /B', options, 
                              function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error Code: '+error.code);
    console.log('Error Signal: '+error.signal);
  }
  console.log('Results: \n' + stdout);
  if (stderr.length){
    console.log('Errors: ' + stderr);
  }
});
child.on('exit', function (code) {
  console.log('Completed with code: '+code);
});