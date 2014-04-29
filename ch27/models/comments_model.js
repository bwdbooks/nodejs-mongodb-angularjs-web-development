var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ReplySchema = new Schema({
  username: String,
  subject: String,
  timestamp: { type: Date, default: Date.now },
  body: String,
  replies:[ReplySchema]
}, { _id: true });
  var CommentThreadSchema = new Schema({
    title: String,
    replies:[ReplySchema]
});
mongoose.model('Reply', ReplySchema);
mongoose.model('CommentThread', CommentThreadSchema);