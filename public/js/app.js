

/////////////////////////////////////MD5//////////////////////////////////////

var MD5 = function (string) {
 
    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }
 
    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
     }
 
     function F(x,y,z) { return (x & y) | ((~x) & z); }
     function G(x,y,z) { return (x & z) | (y & (~z)); }
     function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }
 
    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };
 
    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };
 
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    };
 
    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;
 
    string = Utf8Encode(string);
 
    x = ConvertToWordArray(string);
 
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }
 
    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
    return temp.toLowerCase();
}

angular.module('ngRouteExample', 
  ['ngRoute', 'ngAnimate', 'xeditable', 'world.controllers', 'world.directives', 'world.services'])  

  .config(function($routeProvider, $locationProvider) 
  {
        $routeProvider

        .when('/1234', {
          templateUrl: '/template/first_step/create_building.html',
          controller: 'CreateBuildingCtrl'
          
         
        })





         .when('/homes', {
          templateUrl: '/template/home.html',
          controller: 'BookController'
          
         
        })


















          .when('/aboutme', {
          templateUrl: '/template/aboutme.html',
          controller: 'BookController'
          
         
        })
           .when('/contactme', {
          templateUrl: '/template/contactme.html',
          controller: 'BookController'
         
        })
            .when('/faq', {
          templateUrl: '/template/faq.html',
          controller: 'BookController'
          
         
        })
        .when('/login', {
          templateUrl: '/template/login.html',
          controller: 'ChapterController'
           
        })
        .when('/first_step_zero', {
          templateUrl: '/template/first_step/first_step_zero.html',
          controller: 'listcontroller'
           
        })
        .when('/first_step', {
          templateUrl: '/template/first_step/create_building.html',
          controller: 'ChapterController'
           
        })

        .when('/fine', {
          templateUrl: '/template/first_step/fine.html',
          controller: 'ChapterController'
           
        })
        .when('/create_building', {
          templateUrl: '/template/first_step/create_building.html',
          controller: 'ChapterController'
           
        })
        .when('/cost_of_utilities', {
          templateUrl: '/template/first_step/cost_of_utilities.html',
          controller: 'ChapterController'
           
        })
        .when('/service', {
          templateUrl: '/template/first_step/service.html',
          controller: 'ChapterController'
           
        })
        .when('/roomsmg', {
          templateUrl: '/template/manage/rooms/roomsmg.html',
          controller: 'ChapterController'
           
        })
        .when('/rooms_head_include', {
          templateUrl: '/template/manage/rooms/rooms_head_include.html',
          controller: 'ChapterController'
           
        })
        .when('/add_rooms', {
          templateUrl: '/template/manage/rooms/add_rooms.html',
          controller: 'ChapterController'
           
        })
        .when('/customers', {
          templateUrl: '/template/manage/customer/customers.html',
          controller: 'ChapterController'
           
        })
        .when('/customers_checkout', {
          templateUrl: '/template/manage/customer/checkout.html',
          controller: 'ChapterController'
           
        })
        .when('/documents', {
          templateUrl: '/template/first_step/documents.html',
          controller: 'ChapterController'
           
        })
        .when('/customers_vehicle_checkout', {
          templateUrl: '/template/manage/customer/customers_vehicle_checkout.html',
          controller: 'ChapterController'
           
        })
        .when('/customers_keycard', {
          templateUrl: '/template/manage/customer/customers_keycard.html',
          controller: 'ChapterController'
           
        })
        .when('/book_infomation', {
          templateUrl: '/template/manage/booking/book_infomation.html',
          controller: 'ChapterController'
           
        })
        .when('/booking', {
          templateUrl: '/template/manage/booking/booking.html',
          controller: 'ChapterController'
           
        })
        .when('/customers_vehicle', {
          templateUrl: '/template/manage/customer/customers_vehicle.html',
          controller: 'ChapterController'
        })
        .when('/charter_information', {
          templateUrl: '/template/manage/charter/charter_information.html',
          controller: 'ChapterController'
        })
        .when('/charter_booking', {
          templateUrl: '/template/manage/charter/charter_booking.html',
          controller: 'ChapterController'
        })
        .when('/charter_new_booking', {
          templateUrl: '/template/manage/charter/charter_new_booking.html',
          controller: 'ChapterController'
        })
        .when('/water_information', {
          templateUrl: '/template/manage/water/water_information.html',
          controller: 'ChapterController'
        })
        .when('/water_record', {
          templateUrl: '/template/manage/water/water_record.html',
          controller: 'ChapterController'
        })
        .when('/energy_information', {
          templateUrl: '/template/manage/energy/energy_information.html',
          controller: 'ChapterController'
        })
        .when('/energy_record', {
          templateUrl: '/template/manage/energy/energy_record.html',
          controller: 'ChapterController'
        })
        .when('/phone_information', {
          templateUrl: '/template/manage/phone/phone_information.html',
          controller: 'ChapterController'
        })

        .when('/phone_record', {
          templateUrl: '/template/manage/phone/phone_record.html',
          controller: 'ChapterController'
        })
        .when('/invoice_information', {
          templateUrl: '/template/manage/invoice/invoice_information.html',
          controller: 'ChapterController'
        })
        .when('/invoice_export', {
          templateUrl: '/template/manage/invoice/invoice_export.html',
          controller: 'ChapterController'
        })
        .when('/invoice_print', {
          templateUrl: '/template/manage/invoice/invoice_print.html',
          controller: 'ChapterController'
        })
        .when('/receipt_information', {
          templateUrl: '/template/manage/receipt/receipt_information.html',
          controller: 'ChapterController'
        })
        .when('/receipt_invoice', {
          templateUrl: '/template/manage/receipt/receipt_invoice.html',
          controller: 'ChapterController'
        })
        .when('/receipt_information_by_detail', {
          templateUrl: '/template/manage/receipt/receipt_information_by_detail.html',
          controller: 'ChapterController'
        })
        .when('/receipt_print', {
          templateUrl: '/template/manage/receipt/receipt_print.html',
          controller: 'ChapterController'
        })
        .when('/receipt_cancle', {
          templateUrl: '/template/manage/receipt/receipt_cancle.html',
          controller: 'ChapterController'
        })
        .when('/receipt_export_barcode', {
          templateUrl: '/template/manage/receipt/receipt_export_barcode.html',
          controller: 'ChapterController'
        })
        .when('/common_receipt_export', {
          templateUrl: '/template/manage/common_receipt/common_receipt_export.html',
          controller: 'ChapterController'
        })
        .when('/common_receipt_export_day', {
          templateUrl: '/template/manage/common_receipt/common_receipt_export_day.html',
          controller: 'ChapterController'
        })
        .when('/common_information', {
          templateUrl: '/template/manage/common_receipt/common_information.html',
          controller: 'ChapterController'
        })
        .when('/common_information_other', {
              templateUrl: '/template/manage/common_receipt/common_information_other.html',
              controller: 'ChapterController'
            })
        .when('/check_out_report', {
              templateUrl: '/template/manage/check_out/check_out_report.html',
              controller: 'ChapterController'
            })
        .when('/check_out_report_information', {
          templateUrl: '/template/manage/check_out/check_out_report_information.html',
          controller: 'ChapterController'
        })
        .when('/check_out_report_other', {
          templateUrl: '/template/manage/check_out/check_out_report_other.html',
          controller: 'ChapterController'
        })
         .when('/report_income', {
          templateUrl: '/template/manage/report/report_income.html',
          controller: 'ChapterController'
        })
         .when('/report_book', {
          templateUrl: '/template/manage/report/report_book.html',
          controller: 'ChapterController'
        })
         .when('/report_confiscate', {
          templateUrl: '/template/manage/report/report_confiscate.html',
          controller: 'ChapterController'
        })
         .when('/report_charter', {
          templateUrl: '/template/manage/report/report_charter.html',
          controller: 'ChapterController'
        })
         .when('/report_income_booking', {
          templateUrl: '/template/manage/report/report_income_booking.html',
          controller: 'ChapterController'
        })
         .when('/report_other_receipt', {
          templateUrl: '/template/manage/report/report_other_receipt.html',
          controller: 'ChapterController'
        })
         .when('/report_unpaid_booking', {
          templateUrl: '/template/manage/report/report_unpaid_booking.html',
          controller: 'ChapterController'
        })
         .when('/report_charter_finish', {
          templateUrl: '/template/manage/report/report_charter_finish.html',
          controller: 'ChapterController'
        })
         .when('/report_room_adjust', {
          templateUrl: '/template/manage/report/report_room_adjust.html',
          controller: 'ChapterController'
        })
         .when('/sms_send', {
          templateUrl: '/template/manage/sms/sms_send.html',
          controller: 'ChapterController'
        })
         .when('/sms_send_report', {
          templateUrl: '/template/manage/sms/sms_send_report.html',
          controller: 'ChapterController'
        })
         .when('/sms_credit_history', {
          templateUrl: '/template/manage/sms/sms_credit_history.html',
          controller: 'ChapterController'
        })
         .when('/calendar', {
          templateUrl: '/template/manage/calendar/calendar.html',
          controller: 'ChapterController'
        })
         .when('/register', {
          templateUrl: '/template/register.html',
          controller: 'ChapterController'
        })
         .when('/template_standard', {
          templateUrl: '/template/template_user/template_standard.html',
          controller: 'ChapterController'
        })
         .when('/manage_profile', {
          templateUrl: '/template/manage/profile/manage_profile.html',
          controller: 'ChapterController'
        })
         .when('/public_information', {
          templateUrl: '/template/manage/public_information/public_information.html',
          controller: 'ChapterController'
        })
         .when('/public_informations', {
          templateUrl: '/template/first_step/public_information.html',
          controller: 'ChapterController'
        })
         .when('/building', {
          templateUrl: '/template/manage/building/building.html',
          controller: 'ChapterController'
        })
         .when('/cost_of_uti', {
          templateUrl: '/template/manage/cost_of_uti/cost_of_uti.html',
          controller: 'ChapterController'
        })
         .when('/information_service', {
          templateUrl: '/template/manage/service/information_service.html',
          controller: 'ChapterController'
        })
         .when('/add_service', {
          templateUrl: '/template/manage/service/add_service.html',
          controller: 'ChapterController'
        })
         .when('/edit_fine', {
          templateUrl: '/template/manage/fine/edit_fine.html',
          controller: 'ChapterController'
        }).
          otherwise({
            redirectTo: '/1234'
          });


        
        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
        $locationProvider.html5Mode(false).hashPrefix('!');
    }).run(function(editableOptions) {
      editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });;



    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
};