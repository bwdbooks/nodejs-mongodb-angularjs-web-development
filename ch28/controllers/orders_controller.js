var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'),
    Order = mongoose.model('Order'),
    Address = mongoose.model('Address'),
    Billing = mongoose.model('Billing');
exports.getOrder = function(req, res) {
  Order.findOne({ _id: req.query.orderId })
  .exec(function(err, order) {
    if (!order){
      res.json(404, {msg: 'Order Not Found.'});
    } else {
      res.json(order);
    }
  });
};
exports.getOrders = function(req, res) {
  Order.find({userid: 'customerA'})
  .exec(function(err, orders) {
    if (!orders){
      res.json(404, {msg: 'Orders Not Found.'});
    } else {
      res.json(orders);
    }
  });
};
exports.addOrder = function(req, res){
  var orderShipping = new Address(req.body.updatedShipping);
  var orderBilling = new Billing(req.body.updatedBilling);
  var orderItems = req.body.orderItems;
  var newOrder = new Order({userid: 'customerA',
                      items: orderItems, shipping: orderShipping, 
                      billing: orderBilling});
  newOrder.save(function(err, results){
    if(err){
      res.json(500, "Failed to save Order.");
    } else {
      Customer.update({ userid: 'customerA' }, 
          {$set:{cart:[]}})
      .exec(function(err, results){
        if (err || results < 1){
         res.json(404, {msg: 'Failed to update Cart.'});
        } else {
         res.json({msg: "Order Saved."});
        }
      });
    }
  });
};
