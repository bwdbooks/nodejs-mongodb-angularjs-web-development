var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var AddressSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String
}, { _id: false });
mongoose.model('Address', AddressSchema);
var BillingSchema = new Schema({
  cardtype: { type: String, enum: ['Visa', 'MasterCard', 'Amex'] },
  name: String,
  number: String,
  expiremonth: Number,
  expireyear: Number,
  address: [AddressSchema]
}, { _id: false });
mongoose.model('Billing', BillingSchema);
var ProductSchema = new Schema({
  name: String,
  imagefile: String,
  description: String,
  price: Number,
  instock: Number
});
mongoose.model('Product', ProductSchema);
var ProductQuantitySchema = new Schema({
  quantity: Number,
  product: [ProductSchema]
}, { _id: false });
mongoose.model('ProductQuantity', ProductQuantitySchema);
var OrderSchema = new Schema({
  userid: String,
  items: [ProductQuantitySchema],
  shipping: [AddressSchema],
  billing: [BillingSchema],
  status: {type: String, default: "Pending"},
  timestamp: { type: Date, default: Date.now }
});
mongoose.model('Order', OrderSchema);
var CustomerSchema = new Schema({
  userid: { type: String, unique: true, required: true },
  shipping: [AddressSchema],
  billing: [BillingSchema],
  cart: [ProductQuantitySchema]
});
mongoose.model('Customer', CustomerSchema);