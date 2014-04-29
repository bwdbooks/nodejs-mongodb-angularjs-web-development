var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WordSchema = new Schema({
  word: {type: String, index: 1, required:true, unique: true},
  first: {type: String, index: 1},
  last: String,
  size: Number,
  letters: [String],
  stats: {
    vowels:Number, consonants:Number},
  charsets: [{ type: String, chars: [String]}]
});
mongoose.model('Word', WordSchema);