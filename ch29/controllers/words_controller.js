var mongoose = require('mongoose'),
    Word = mongoose.model('Word');
exports.getWords = function(req, res) {
  var sort = getSortObj(req);
  var query = Word.find();
  if(req.query.contains.length > 0){
    query.find({'word' : new RegExp(req.query.contains, 'i')});
  }
  query.sort(sort)
  .limit(req.query.limit)
  .skip(req.query.skip)
  .exec(function(err, word) {
    if (!word){
      res.json(404, {msg: 'Word Not Found.'});
    } else {
      res.json(word);
    }
  });
};
function getSortObj(req){
  var field = "word";
  if(req.query.sort == 'Vowels'){
    field = 'stats.vowels';
  } else if(req.query.sort == 'Consonants'){
    field = 'stats.consonants';
  } else if(req.query.sort == 'Length'){
    field = 'size';
  }else{
    field = req.query.sort.toLowerCase();
  }
  var sort = new Object();
  sort[field] = req.query.direction;
  return sort;
};