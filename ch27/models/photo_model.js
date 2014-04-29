var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var PhotoSchema = new Schema({
    title: String,
    filename: String,
    timestamp: { type: Date, default: Date.now },
    commentId: Schema.ObjectId
});
mongoose.model('Photo', PhotoSchema);