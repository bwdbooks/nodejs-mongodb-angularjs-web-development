var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var PageSchema = new Schema({
    name: {type: String, unique: true},
    commentId: Schema.ObjectId
});
mongoose.model('Page', PageSchema);