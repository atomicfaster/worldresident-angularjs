
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userinfo = new Schema({
  _id: Schema.Types.ObjectId,
  userid:String,
  building: String,
  address: String,
  tel: Number,
  fax: Number,
  detail: String,
  water_bill: String,
  water_vat: Number,
  water_vat_val: Number,
  min_water:String,
  min_water_val:String,
  water_pay:String,
  water_package:String,
  energy_bill: String,
  energy_vat: Number,
  energy_vat_val: Number,
  min_energy:String,
  min_energy_val:String,
  energy_pay:String,
  energy_package:String,
  tel_vat:Number,
  tel_vat_value:Number,
  company_Name:String,
  address:String,
  amphures :String,
	district :String,
	provice :String,
	postcode :String,
	tel_doc:String,
	mobile_doc:String,
	fax_doc:String,
	web_site:String,
	logo:String,
	fine_date:Number,
	fine_val:Number,
	service:[{
		service_name:String,
		fee:Number,
		tax:Number,
		detail:String
	}],
	head_banner :String,
apartment_Detail :String,
custom_link :String
}); 


module.exports = mongoose.model('userinfo', userinfo);