
/**
 * Module dependencies
 */

var express = require('express'), 
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
var chk = require("./backN/login");
var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');


app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  //app.use(express.errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials

app.get("/checklogin",chk.login);
app.get('/', routes.index);
app.get('/header', routes.header);
app.get('/search_box', routes.search_box);
app.get('/footer', routes.footer);
app.get('/home', routes.home);
app.get('/manage', routes.manage);
app.get('/first_step', routes.first_step);
app.get('/create_building', routes.create_building);
app.get('/cost_of_utilities', routes.cost_of_utilities);
app.get('/service', routes.service);
app.get('/fine', routes.fine);
app.get('/documents', routes.documents);
app.get('/roomsmg', routes.roomsmg);
app.get('/rooms_head_include', routes.rooms_head_include);
app.get('/add_rooms', routes.add_rooms);
app.get('/customers', routes.customers);
app.get('/customers_checkout', routes.customers_checkout);
app.get('/customers_vehicle', routes.customers_vehicle);
app.get('/customers_vehicle_checkout', routes.customers_vehicle_checkout);
app.get('/customers_keycard', routes.customers_keycard);
app.get('/book_infomation', routes.book_infomation);
app.get('/booking', routes.booking);
app.get('/charter_information', routes.charter_information);
app.get('/charter_booking', routes.charter_booking);
app.get('/charter_new_booking', routes.charter_new_booking);
app.get('/water_information', routes.water_information);
app.get('/water_record', routes.water_record);
app.get('/energy_information', routes.energy_information);
app.get('/energy_record', routes.energy_record);
app.get('/phone_information', routes.phone_information);
app.get('/phone_record', routes.phone_record);
app.get('/invoice_information', routes.invoice_information);
app.get('/invoice_export', routes.invoice_export);
app.get('/invoice_print', routes.invoice_print);
app.get('/receipt_information', routes.receipt_information);
app.get('/receipt_invoice', routes.receipt_invoice);
app.get('/receipt_information_by_detail', routes.receipt_information_by_detail);
app.get('/receipt_print', routes.receipt_print);
app.get('/receipt_cancle', routes.receipt_cancle);
app.get('/receipt_export_barcode', routes.receipt_export_barcode);
app.get('/common_receipt_export', routes.common_receipt_export);
app.get('/common_receipt_export_day', routes.common_receipt_export_day);
app.get('/common_information', routes.common_information);
app.get('/common_information_other', routes.common_information_other);
app.get('/check_out_report', routes.check_out_report);
app.get('/check_out_report_information', routes.check_out_report_information);
app.get('/check_out_report_other', routes.check_out_report_other);
app.get('/report_income', routes.report_income);
app.get('/report_book', routes.report_book);
app.get('/report_confiscate', routes.report_confiscate);
app.get('/report_charter', routes.report_charter);
app.get('/report_income_booking', routes.report_income_booking);
app.get('/report_other_receipt', routes.report_other_receipt);
app.get('/report_unpaid_booking', routes.report_unpaid_booking);
app.get('/report_charter_finish', routes.report_charter_finish);
app.get('/report_room_adjust', routes.report_room_adjust);
app.get('/sms_send', routes.sms_send);
app.get('/sms_send_report', routes.sms_send_report);
app.get('/sms_credit_history', routes.sms_credit_history);
app.get('/calendar', routes.calendar);
app.get('/register', routes.register);

















app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
