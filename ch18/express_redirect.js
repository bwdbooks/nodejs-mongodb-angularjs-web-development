var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/google', function (req, res) {
  res.redirect('http://google.com');
});
app.get('/first', function (req, res) {
  res.redirect('/second');
});
app.get('/second', function (req, res) {
  res.send("Response from Second");
});
app.get('/level/A', function (req, res) {
  res.redirect("../B");
});
app.get('/level/B', function (req, res) {
  res.send("Response from Level B");
});