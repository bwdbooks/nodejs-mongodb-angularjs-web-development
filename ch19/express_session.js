var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var app = express();
app.use(cookieParser());
app.use(cookieSession({secret: 'MAGICALEXPRESSKEY'}));
app.get('/library', function(req, res) {
  console.log(req.cookies);
  if(req.session.restricted) {
    res.send('You have been in the restricted section ' + 
             req.session.restrictedCount + ' times.');
  }else {
    res.send('Welcome to the library.');
  }
});
app.get('/restricted', function(req, res) {
  req.session.restricted = true;
  if(!req.session.restrictedCount){
    req.session.restrictedCount = 1;
  } else {
    req.session.restrictedCount += 1;
  }
  res.redirect('/library');
});
app.listen(80);