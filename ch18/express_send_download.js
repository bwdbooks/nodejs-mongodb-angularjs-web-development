var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/download', function (req, res) {
  res.sendfile('./views/word.docx', 'new.docx');
});