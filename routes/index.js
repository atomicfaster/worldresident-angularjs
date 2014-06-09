
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('./views/index.html');
};
exports.header = function(req, res){
  res.sendfile('./public/template/header.html');
};
exports.search_box = function(req, res){
  res.sendfile('./public/template/search_box.html');
};
exports.footer = function(req, res){
  res.sendfile('./public/template/footer.html');
};
exports.home = function(req, res){
  res.sendfile('./public/template/home.html');
};
exports.manage = function(req, res){
  res.sendfile('./views/manage_page.html');
};
exports.first_step = function(req, res){
  res.sendfile('./views/first_step.html');
};
exports.create_building = function(req, res){
  res.sendfile('./public/template/first_step/create_building.html');
};
exports.cost_of_utilities = function(req, res){
  res.sendfile('./public/template/first_step/cost_of_utilities.html');
};
exports.service = function(req, res){
  res.sendfile('./public/template/first_step/service.html');
};
exports.fine = function(req, res){
  res.sendfile('./public/template/first_step/fine.html');
};
exports.documents = function(req, res){
  res.sendfile('./public/template/first_step/documents.html');
};
exports.roomsmg = function(req, res){
  res.sendfile('./public/template/manage/rooms/roomsmg.html');
};
exports.rooms_head_include = function(req, res){
  res.sendfile('./public/template/manage/rooms/rooms_head_include.html');
};
exports.add_rooms = function(req, res){
  res.sendfile('./public/template/manage/rooms/add_rooms.html');
};
exports.customers = function(req, res){
  res.sendfile('./public/template/manage/customer/customers.html');
};
exports.customers_checkout = function(req, res){
  res.sendfile('./public/template/manage/customer/checkout.html');
};
exports.customers_vehicle = function(req, res){
  res.sendfile('./public/template/manage/customer/customers_vehicle.html');
};
exports.customers_vehicle_checkout = function(req, res){
  res.sendfile('./public/template/manage/customer/customers_vehicle_checkout.html');
};
exports.customers_keycard = function(req, res){
  res.sendfile('./public/template/manage/customer/customers_keycard.html');
};
exports.book_infomation = function(req, res){
  res.sendfile('./public/template/manage/booking/book_infomation.html');
};
exports.booking = function(req, res){
  res.sendfile('./public/template/manage/booking/booking.html');
};
exports.charter_information = function(req, res){
  res.sendfile('./public/template/manage/charter/charter_information.html');
};
exports.charter_booking = function(req, res){
  res.sendfile('./public/template/manage/charter/charter_booking.html');
};
exports.charter_new_booking = function(req, res){
  res.sendfile('./public/template/manage/charter/charter_new_booking.html');
};
exports.water_information = function(req, res){
  res.sendfile('./public/template/manage/water/water_information.html');
};
exports.water_record = function(req, res){
  res.sendfile('./public/template/manage/water/water_record.html');
};
exports.energy_information = function(req, res){
  res.sendfile('./public/template/manage/energy/energy_information.html');
};
exports.energy_record = function(req, res){
  res.sendfile('./public/template/manage/energy/energy_record.html');
};
exports.phone_information = function(req, res){
  res.sendfile('./public/template/manage/phone/phone_information.html');
};
exports.phone_record = function(req, res){
  res.sendfile('./public/template/manage/phone/phone_record.html');
};
exports.invoice_information = function(req, res){
  res.sendfile('./public/template/manage/invoice/invoice_information.html');
};
exports.invoice_export = function(req, res){
  res.sendfile('./public/template/manage/invoice/invoice_export.html');
};
exports.invoice_print = function(req, res){
  res.sendfile('./public/template/manage/invoice/invoice_print.html');
};
exports.receipt_information = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_information.html');
};
exports.receipt_invoice = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_invoice.html');
};
exports.receipt_information_by_detail = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_information_by_detail.html');
};
exports.receipt_print = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_print.html');
};
exports.receipt_cancle = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_cancle.html');
};
exports.receipt_export_barcode = function(req, res){
  res.sendfile('./public/template/manage/receipt/receipt_export_barcode.html');
};
exports.common_receipt_export = function(req, res){
  res.sendfile('./public/template/manage/common_receipt/common_receipt_export.html');
};
exports.common_receipt_export_day = function(req, res){
  res.sendfile('./public/template/manage/common_receipt/common_receipt_export_day.html');
};
exports.common_information = function(req, res){
  res.sendfile('./public/template/manage/common_receipt/common_information.html');
};
exports.common_information_other = function(req, res){
  res.sendfile('./public/template/manage/common_receipt/common_information_other.html');
};
exports.common_information_other = function(req, res){
  res.sendfile('./public/template/manage/common_receipt/common_information_other.html');
};
exports.check_out_report = function(req, res){
  res.sendfile('./public/template/manage/check_out/check_out_report.html');
};
exports.check_out_report_information = function(req, res){
  res.sendfile('./public/template/manage/check_out/check_out_report_information.html');
};
exports.check_out_report_other = function(req, res){
  res.sendfile('./public/template/manage/check_out/check_out_report_other.html');
};
exports.report_income = function(req, res){
  res.sendfile('./public/template/manage/report/report_income.html');
};
exports.report_book = function(req, res){
  res.sendfile('./public/template/manage/report/report_book.html');
};
exports.report_confiscate = function(req, res){
  res.sendfile('./public/template/manage/report/report_confiscate.html');
};
exports.report_charter = function(req, res){
  res.sendfile('./public/template/manage/report/report_charter.html');
};
exports.report_income_booking = function(req, res){
  res.sendfile('./public/template/manage/report/report_income_booking.html');
};
exports.report_other_receipt = function(req, res){
  res.sendfile('./public/template/manage/report/report_other_receipt.html');
};
exports.report_unpaid_booking = function(req, res){
  res.sendfile('./public/template/manage/report/report_unpaid_booking.html');
};
exports.report_charter_finish = function(req, res){
  res.sendfile('./public/template/manage/report/report_charter_finish.html');
};
exports.report_room_adjust = function(req, res){
  res.sendfile('./public/template/manage/report/report_room_adjust.html');
};
exports.sms_send = function(req, res){
  res.sendfile('./public/template/manage/sms/sms_send.html');
};
exports.sms_send_report = function(req, res){
  res.sendfile('./public/template/manage/sms/sms_send_report.html');
};
exports.sms_credit_history = function(req, res){
  res.sendfile('./public/template/manage/sms/sms_credit_history.html');
};
exports.calendar = function(req, res){
  res.sendfile('./public/template/manage/calendar/calendar.html');
};
exports.register = function(req, res){
  res.sendfile('./public/template/register.html');
};



exports.partials = function (req, res) {
  var name = req.params.name;
  res.sendfile('./views/partials/' + name+".html");
};