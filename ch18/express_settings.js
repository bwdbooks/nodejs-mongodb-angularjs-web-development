var express = require('express');
var app = express();
app.listen(80);

console.log(app.get('env'));
console.log(app.get('trust proxy'));
console.log(app.get('jsonp callback name'));
console.log(app.get('json replacer'));
console.log(app.get('json spaces'));
console.log(app.get('case sensitive routing'));
console.log(app.get('strict routing'));
console.log(app.get('view cache'));
console.log(app.get('view engine'));
console.log(app.get('views'));
