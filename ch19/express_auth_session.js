var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');
function hashPW(pwd){
  return crypto.createHash('sha256').update(pwd).
         digest('base64').toString();
}
var app = express();
app.use(bodyParser());
app.use(cookieParser('MAGICString'));
app.use(session());
app.get('/restricted', function(req, res){
  if (req.session.user) {
    res.send('<h2>'+ req.session.success + '</h2>' +
             '<p>You have entered the restricted section<p><br>' +
             ' <a href="/logout">logout</a>');
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
});
app.get('/logout', function(req, res){
  req.session.destroy(function(){
    res.redirect('/login');
  });
});
app.get('/login', function(req, res){
  var response = '<form method="POST">' +
    'Username: <input type="text" name="username"><br>' +
    'Password: <input type="password" name="password"><br>' +
    '<input type="submit" value="Submit"></form>';
  if(req.session.user){
    res.redirect('/restricted');
  }else if(req.session.error){
    response +='<h2>' + req.session.error + '<h2>'; 
  }
  res.type('html');
  res.send(response);
});
app.post('/login', function(req, res){
  //user should be a lookup of req.body.username in database
  var user = {name:req.body.username, password:hashPW("myPass")};
  if (user.password === hashPW(req.body.password.toString())) {
    req.session.regenerate(function(){
      req.session.user = user;
      req.session.success = 'Authenticated as ' + user.name;
      res.redirect('/restricted');
    });
  } else {
    req.session.regenerate(function(){
      req.session.error = 'Authentication failed.';
      res.redirect('/restricted');
    });
    res.redirect('/login');
  }
});
app.listen(80);