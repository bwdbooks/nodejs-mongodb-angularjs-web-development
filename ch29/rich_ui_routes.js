var express = require('express');
module.exports = function(app) {
  var weather = require('./controllers/weather_controller');
  var words = require('./controllers/words_controller');
  app.use('/static', express.static( './static')).
      use('/images', express.static( '../images')).
      use('/lib', express.static( '../lib')
  );
  app.get('/', function(req, res){
    res.render('rich_ui');
  });
  app.get('/weather', weather.getWeather);
  app.get('/words', words.getWords);
};