var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var add_booking = new Schema({
  _id: Schema.Types.ObjectId,
  building_name:String,
  booking_room_no:String,
  booking_customer_name:String,
  booking_customer_id:String,
  booking_customer_address:String,
  booking_customer_provice:String,
  booking_customer_post_code:String,
  booking_customer_country:String,
  booking_customer_mobile:String,
  booking_customer_email:String,
  booking_customer_pic:String,
  booking_payment_type:String,
  booking_payment_cash_amount:Number,
  booking_payment_remark:String,
  booking_payment_date_payment:String,
  booking_payment_date_transection:String,

  updated: {type: Date, default: Date.now},
  date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('user', user);