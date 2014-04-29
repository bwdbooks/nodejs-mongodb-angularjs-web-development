var mongoose = require('mongoose'),
    Page = mongoose.model('Page');
exports.getPage = function(req, res) {
  Page.findOne({ name: req.query.pageName })
  .exec(function(err, page) {
    if (!page){
      res.json(404, {msg: 'Page Not Found.'});
    } else {
      res.json(page);
    }
  });
};