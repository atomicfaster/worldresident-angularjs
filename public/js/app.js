

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






 angular.module('ngRouteExample', ['ngRoute', 'ngAnimate'])

   .controller('MainController', function($scope, $route, $routeParams, $location) {
       $scope.$route = $route;
       $scope.$location = $location;
       $scope.$routeParams = $routeParams;
   })

   .controller('BookController', function($scope, $routeParams) {
       


       $scope.params = $routeParams;
   })

   .controller('ChapterController', function($scope, $routeParams) {

       $scope.params = $routeParams;
   })
   .controller("listcontroller",function($scope,$window,$http){
      this.list=[{"propertyId":"77755","title":"APARTMENT FOR RENT IN PLOENCHIT / RATCHADAMRI BTS","detail":"ACCOM ASIA PROPERTY CODE 1412329\r\nSize 166 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 75,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN PLOENCHIT / RATCHADAMRI BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nTastefully and Quality. A tidy living and dining area connect to an open kitchen and washing area. Parquet floor throughout.\r\n\r\nThis Apartment is set on the Great Location!! Near Lumpini Park\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1412329\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":75000,"_id":"5381a6e5a6957dcd056f13fd","__v":0,"date":"2014-05-25T08:16:37.143Z","updated":"2014-05-25T08:16:37.143Z","images":[]},{"propertyId":"77789","title":"BEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS BEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS","detail":"ACCOM ASIA PROPERTY CODE 1413075\r\nSize 200 Sqm 3 Bedrooms 3 Bathrooms \r\nRent 60,000 Baht/month\r\n\r\nBEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nNewly totally redecorated, neat and clean, beautiful parquetry flooring, balcony, classic style furnitures, equipped kitchen, within walking distance to Skytrain.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413075\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":60000,"_id":"5381a6e7a6957dcd056f13fe","__v":0,"date":"2014-05-25T08:16:39.248Z","updated":"2014-05-25T08:16:39.248Z","images":[]},{"propertyId":"77806","title":"DELIGHTFUL STYLE APARTMENT FOR RENT IN PLOENCHIT / CHIDLOM BTS","detail":"ACCOM ASIA PROPERTY CODE 1413105\r\nSize 250 Sqm 3 Bedrooms 3 Bathrooms \r\nRent 70,000 Baht/month\r\n\r\nDELIGHTFUL STYLE APARTMENT FOR RENT IN PLOENCHIT / CHIDLOM BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nNice parquet floor, big living and dining area, bright, with open view, big kitchen. Peaceful zone.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413105\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":70000,"_id":"5381a6e7a6957dcd056f13ff","__v":0,"date":"2014-05-25T08:16:39.603Z","updated":"2014-05-25T08:16:39.603Z","images":[]},{"propertyId":"77858","title":"LOW RISE APARTMENT FOR RENT IN LANGSUAN - PLOENCHIT / CHITLOM BTS","detail":"ACCOM ASIA PROPERTY CODE 1413793\r\nSize 91.02 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 60,000 Baht/month\r\n\r\nLOW RISE APARTMENT FOR RENT IN LANGSUAN - PLOENCHIT / CHITLOM BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nBoutique style with fully furnished, neat and clean, modern equipped kitchen, low-rised building, set on a central location , walking distance to Lumpini Park ( BTS. : Chitlom )\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413793\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":60000,"_id":"5381a6e7a6957dcd056f1400","__v":0,"date":"2014-05-25T08:16:39.922Z","updated":"2014-05-25T08:16:39.922Z","images":[]},{"propertyId":"77971","title":"ขายอพาร์ทเมนท์ 4 ชั้น 112 ตารางวา ถนนนิมิตรใหม่ ซ.นิมิตรใหม่10","detail":"ขายอพาร์ทเมนท์ 4 ชั้น ถนน นิมิตรใหม่10 \r\nอพาร์ตเม้นท์ใหม่ มีผู้เช่าเต็ม ชั้นล่างมีสำนักงาน มีกล้อง วงจรปิด เข้า-ออกมีคีย์การ์ด ปลอดภัย \r\nร่มรื่น มีWifi เครื่องซักผ้า ตู้น้ำหยอดเหรียญ การเดินทางสะดวก มีรถประจำทางผ่าน เข้าซอยเพียง 80 เมตร \r\n\r\nรหัสทรัพย์สิน : 000404 \r\nราคา : 11,500,000 บาท \r\n\r\nประเภท : อพาร์ทเมนท์ 4 ชั้น \r\nถนน : นิมิตรใหม่ซ.10 \r\nแขวง : ทรายกองดิน \r\nเขต : เขตคลองสามวา \r\nจังหวัด : กรุงเทพมหานคร \r\n\r\nที่ดิน 112 ตารางวา \r\nห้องนอน : 31 ห้อง \r\nห้องน้ำ : 31 ห้อง \r\n\r\nราคาต่อรองได้ค่ะ สนใจนัดชมหรือดูรายละเอียดเพิ่มเติมได้ที่ \r\n\r\nhttp://www.lovethaihome.com/properties_details.php?id=4491","_id":"5381a6e8a6957dcd056f1401","__v":0,"date":"2014-05-25T08:16:40.550Z","updated":"2014-05-25T08:16:40.550Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare8","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare7","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/77971/77971-8.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-7.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-6.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-5.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-4.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-3.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-2.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-1.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-8.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-7.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-6.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-5.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-4.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-3.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-2.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-1.jpg"]},{"propertyId":"78231","title":"อพาร์ทเม้นท์ ใหม่ ให้เช่า วิวดอย ( ห้องแอร์ )","detail":"Ref. code CR 358 , อพาร์ทเม้นท์ ใหม่ ให้เช่า , ใกล้เมือง,  วิวดอย ,                        พื้นที่ 40 ตารางเมตร ห้อง Studio room ,                                                  พร้อม เฟอร์นิเจอร์บางส่วน free - wifi, 1 แอร์ , 1 เครื่องทำน้ำอู่น ,                        สัญญาขั้นต่ำ 3 เดือน ขึ้นไป , ค่าลงสระน้ำ 60 บาท / ครั้ง\r\nติดต่อ  086-1973569 , 088-2590927 , 087-1892322 \r\n\r\n         Ref. code CR 358 , New  apartment   for rent .                                Area of room 40 sq.m , Studio room . Mountain view . partly furnished .     Free- wifi .  1 Air , 1 hot shower . Minimum contract of 3 months or more.   Play swimming pool for 60 baht / per session\r\n   The property Close to town. \r\n          for more information \r\n\r\n              http://www.chiangmaibesthomes.com/detail-condo-rent.php?id=193#Condominium\r\n\r\n\r\n     \r\n           WWW.ChiangmaiBestHomes.com","rent":4500,"_id":"5381a6e8a6957dcd056f1402","__v":0,"date":"2014-05-25T08:16:40.812Z","updated":"2014-05-25T08:16:40.812Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare7","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78231/78231-7.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-6.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-5.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-4.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-3.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-2.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-1.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-7.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-6.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-5.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-4.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-3.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-2.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-1.jpg"]},{"propertyId":"78343","title":"ขายและให้เช่าบ้านเอื้ออาทรโครงการวัดศรีวารีน้อย ใกล้สนาบินสุวรรณภูมิ พร้อมเฟอร์นิเจอร์ครบชุด พร้อมเข้าอยู่ ติดเหล็กดัดมุ้งลวดรอบห้อง ห้องอยู่ชั้น1 ห้องมุม. ติดลานจอดรถ สามารถนำรถจักรยานยนต์ไปจอดหน้าห้องได้ สนใจติดต่อ คุณบุ๋ม โทร. 086-971936","detail":"ขายและให้เช่าบ้านเอื้ออาทร พื้นที่ 33 ตร.ม. ใกล้กับสนามบินสุวรรณภูมิ พร้อมเฟอร์นิเจอร์ครบชุด ติดมุ้งลวดเหล็กดัดอย่างดีรอบตัวห้องทั้งบริเวณประตู หน้าต่าง ระเบียงหลังห้อง อยู่ชั้น1 ห้องมุม ติดลานจอดรถ สามารถนำรถจักรยานยนต์มาจอดที่หน้าห้องได้","rent":3000,"_id":"5381a6e9a6957dcd056f1403","__v":0,"date":"2014-05-25T08:16:41.077Z","updated":"2014-05-25T08:16:41.077Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78343/78343-5.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-4.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-3.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-2.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-1.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-5.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-4.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-3.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-2.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-1.jpg"]},{"propertyId":"78522","title":"APARTMENT FOR RENT IN SUKHUMVIT/ASOKE BTS - SUKHUMVIT MRT","detail":"ACCOM ASIA PROPERTY CODE 1002301\r\nSize 450 Sqm 4 Bedrooms 5 Bathrooms \r\nRent 150,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT/ASOKE BTS - SUKHUMVIT MRT\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\n\r\nBeautiful wooden floor, nice balcony, nice breeze on high floor, fully furnished, modern European kitchen, quality fitted, maid room, handy location.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1002301\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":150000,"_id":"5381a6f4a6957dcd056f1408","__v":0,"date":"2014-05-25T08:16:52.347Z","updated":"2014-05-25T08:16:52.347Z","images":[]},{"propertyId":"97352","title":"CHATRIUM SUITES APARTMENT FOR RENT IN CHAROENKRUNG.","detail":"ACCOM ASIA PROPERTY CODE 1512815\r\nSize 120 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 65,000 Baht/month\r\n\r\nCHATRIUM SUITES APARTMENT FOR RENT IN CHAROENKRUNG. \r\n\r\nNice decorated. Breezy.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (hotline 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1512815\r\n\r\nAccom Asia Co.,Ltd \r\n02 258 0151 : kwan@accomasia.co.th","rent":65000,"_id":"5381c093a6957dcd056f19d2","__v":0,"date":"2014-05-25T10:06:11.771Z","updated":"2014-05-25T10:06:11.771Z","images":[]},{"propertyId":"78388","title":"ห้องเช่า ทองหล่อ ซอย7 สงบ ปลอดภัย ใจกลางเมือง","detail":"ลักษณะโดยรวม เป็นบ้านเดี่ยว3ชั้น มีดาดฟ้า แบ่งให้เช่าเป็นห้อง แต่ละห้องกว้างขวาง มีห้องน้ำ ระเบียง ให้ความรู้สึกเหมือนอยู่บ้าน สงบ ปลอดภัย เหมาะแก่การพักผ่อน เดินทางสะดวก ราคาถูก เลี้ยงสัตว์เล็กได้ สัญญาไม่ยุ่งยาก สังคมเล็ก เอาใจใส่ เจ้าของดูแลเองยินดีบริการ 24 ชั่วโมง :)\r\nห้องเปล่าเดือนละ 11000 บาท\r\nตกแต่งพร้อมเข้าอยู่ แอร์ น้ำอุ่น ตู้ เตียง โต๊ะ เก้าอี้ โซฟา เดือนละ 15000 บาท\r\nค่าน้ำ ห้องละ 300 ค่าไฟ หน่วยละ 7 บาท\r\n\r\nติดต่อ 090-798-0860 คุณอ้น\r\nLine ID: Aon.kjแนะนำข้อมูล สำหรับการเดินทาง :\r\n\t\t\tลงสถานีรถไฟฟ้าทองหล่อ เดินเข้าซอย มีรถเมล์เล็ก วินมอเตอร์ไซ รถกะป้อ จนถึงซอย7","rent":11000,"location":[100.580199,13.730553],"_id":"5381a6e9a6957dcd056f1404","__v":0,"date":"2014-05-25T08:16:41.869Z","updated":"2014-05-25T08:16:41.869Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78388/78388-6.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-5.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-4.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-3.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-2.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-1.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-6.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-5.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-4.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-3.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-2.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-1.jpg"]},{"propertyId":"78446","title":"ขายอาคารสร้างใหม่ตกแต่งพร้อม เฟอร์นิเจอร์ เหมาะสำหรับทำอพาร์ตเมนท์ ย่านพรานนก","detail":"อาคารสร้างใหม่ ทำเลดีย่านธุรกิจ เนื้อที่ดิน 68 ตารางวา เป็นอาคาร 3 ชั้น ตกแต่งพร้อมเปิดดำเนินการ เฟอร์นิเจอร์ครบ เครื่องปรับอากาศ กล้องวงจรปิด จานดาวเทียม  เหมาะสำหรับทำอพาร์ตเมนต์ หรือ บูทีคโฮเท็ล ใกล้ รพ.ธนบุรี รพ.ศิริราช ตลาดพรานนก การเดินทางสะดวกใกล้สถานีรถไฟฟ้าที่กำลังจะเปิดใหม่","location":[100.477567,13.752966],"_id":"5381a6eaa6957dcd056f1405","__v":0,"date":"2014-05-25T08:16:42.203Z","updated":"2014-05-25T08:16:42.203Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78446/78446-3.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-2.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-1.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-3.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-2.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-1.jpg"]},{"propertyId":"78450","title":"ขายอพาร์ทเม้นท์อมตะนคร,ห้องเช่าบ้านมินตราชลบุรี","detail":"http://siamtag.com/products/10679/\r\nขายห้องเช่า พร้อมที่ดิน 265 ตรว. อยู่ใกล้ อมตะนคร จ.ชลบุรี ใกล้ทางด่วนมอเตอร์เวย์ 500 เมตร\r\nบ้านมินตรา 108 ซอยบ้านเก่า 12 หมู่ 2 ตำบล บ้านเก่า อ.พานทอง จ.ชลบุรี\r\nดำเนินธุรกิจให้เช่าห้องมาแล้ว 2 ปี มีห้องทั้งหมด 24 ห้อง\r\nห้องแอร์ 3 ห้อง ให้เช่าห้องละ 2,800 บาท\r\nห้องพัดลม 20 ห้อง ให้เช่าห้องละ 2,300 บาท\r\nมีเคเบิ้ลทีวี ทุกห้อง เก็บห้องละ 100 บาท\r\nมีเสาอากาศทีวีทุกห้อง\r\nค่าน้ำค่าไฟเจ้าของเก็บเอง\r\nมีร้านขายของชำให้ 1 ห้อง\r\nมีบริการเครื่องซักผ้าหยอดเหรียญให้ 3 เครื่อง\r\nมีบริการเครื่องกรองน้ำดื่มให้ 1 ตู้\r\nมีกล้องวงจรปิดให้ 12 ตัว\r\nพื้นที่จอดรถยนต์ได้ประมาณ 13 คัน\r\nปัจจุบันมีลูกบ้านพักอาศัยเต็มทุกห้อง\r\nมีรายได้รวมจากการให้บริการทั้งหมด ประมาณ 8หมื่นบาท ต่อเดือน\r\nขายรวมให้ทุกอย่างแนะนำข้อมูล สำหรับการเดินทาง :\r\n\t\t\t-เข้าจากทางด่วนสาย บางนา-ชลบุรี เลยตลาดมณีย์ ชิดซ้ายเข้าซอยถนนบ้านเก่า\r\n-วิ่งตรงไปอีกประมาณ 4 กม. อยู่ซอย บ้านเก่า 12 ฝั่งซ้าย \r\n-เข้าซอย บ้านเก่า 12 ไปอีกประมาณ 650 เมตร ถีง 4 แยก เลี่ยวขวา ตรงหัวมุมเป็นบ้านผู้ใหญ่บ้านหมู่ 2\r\n-ตรงไปอีกประมาณ 800 เมตร ถึงอพาร์ทเม้นท์บ้านมินตรา\r\n-จากอพาร์ทเม้นท์ตรงไปสุดซอย ประมาณ 400 เมตร ถึงทางด่วนมอเตอร์เวย์ สายใหม่","_id":"5381a6eaa6957dcd056f1406","__v":0,"date":"2014-05-25T08:16:42.539Z","updated":"2014-05-25T08:16:42.539Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78450/78450-4.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-3.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-2.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-1.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-4.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-3.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-2.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-1.jpg"]},{"propertyId":"78486","title":"อพาร์ทน่าอยู่ ซอยเอกมัย สุขุมวิท 63 Low rise apartment on Soi Ekamai, Sukhumvit 63 Road","detail":"อพาร์ทน่าอยู่ ซอยเอกมัย สุขุมวิท  63\r\nเดินทางสะดวกมาก ใกล้ BTS เดินถึงซุปเปอร์มาเก็ต\r\nห้องสวย 250 ตารางเมตร 3 ห้องนอน มีห้องแม่บ้าน\r\nตกแต่งโมเดิร์น มีสระว่ายน้ำ ห้องออกกำลังกาย สนามเด็กเล่น\r\nให้เช่า 87,000/เดือน\r\n\r\nLow rise apartment on Soi Ekamai, Sukhumvit 63 Road\r\nNearby BTS and Supermarket\r\nModern decorated, area 250 square meter 3 bedroom+maid room\r\nSwimming pool, Gym room and children playground\r\nRent 87,000/month","rent":87000,"_id":"5381a6eaa6957dcd056f1407","__v":0,"date":"2014-05-25T08:16:42.884Z","updated":"2014-05-25T08:16:42.884Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78486/78486-3.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-2.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-1.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-3.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-2.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-1.jpg"]},{"propertyId":"78530","title":"APARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS","detail":"ACCOM ASIA PROPERTY CODE 1412000\r\nSize 258 Sqm 3+1 Bedrooms 4 Bathrooms \r\nRent 80,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\n\r\nSoftly Painted and Interior, modern style furnishing, love balcony, living - dining area towards to big European kitchen.\r\n\r\nA 7-story apartment building with 12 units in total, 6 units are tiled floor and the others are wooden floor.\r\n\r\nLocated on a tree lined street within walking distance to supermarket and skytrain.\r\n\r\nAll units are well designed and fully furnished, boasting quality fitted through-out, functional setting living - dining area, big fully equipped kitchen and maid\\'s room.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1412000\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":80000,"_id":"5381a712a6957dcd056f1409","__v":0,"date":"2014-05-25T08:17:22.829Z","updated":"2014-05-25T08:17:22.829Z","images":[]},{"propertyId":"78538","title":"APARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS.","detail":"ACCOM ASIA PROPERTY CODE 1415658\r\nSize 290 Sqm 4 Bedrooms 4 Bathrooms \r\nRent 103,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS. \r\n\r\nBUY / SALE / RENT BANGKOK PROPERTY. \r\n\r\n\r\nOffering good environment for families, the unit is well finished and furnished, open floor plan, big covered balcony, equipped kitchen.\r\n\r\nHandy location to supermarket and skytrain.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1415658\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":103000,"_id":"5381a715a6957dcd056f140a","__v":0,"date":"2014-05-25T08:17:25.254Z","updated":"2014-05-25T08:17:25.254Z","images":[]}];
      this.notification1=[{}];
     
        $scope.items1 = [{num:"Tel-Number"}];
        $scope.items2 = [{num:"Mobile-Number"}];
        $scope.items3 = [{num:"Fax-Number"}];

        $scope.add1 = function () {
          $scope.items1.push({ 
             num:"Tel-Number"
           
          });
        };
         $scope.add2 = function () {
          $scope.items2.push({ 
             num:"Mobile-Number"
           
          });
        };
         $scope.add3 = function () {
          $scope.items3.push({ 
             num:"Fax-Number"
           
          });
        };

     $scope.update = function(params)
     {

        console.log(params);
     };

       $scope.login = function(user,pass)
      {
	
         $http.get('/checklogin?user='+user+'&&pass='+MD5(pass)).success(function(data, status, headers) {
     if(data != "")
      $window.location.pathname="/first_step";
    else
      console.log(data);
    });

         
      };
      this.room=[{"roomno" : "1","stat": "yes"},{"roomno" : "2","stat": "no"},
      {"roomno" : "3","stat": "yes"},{"roomno" : "4","stat": "no"},
      {"roomno" : "5","stat": "yes"},{"roomno" : "6","stat": "yes"},
      {"roomno" : "7","stat": "no"},{"roomno" : "8","stat": "no"},
      {"roomno" : "9","stat": "yes"},{"roomno" : "10","stat": "yes"}
      ,{"roomno" : "11","stat": "no"},{"roomno" : "12","stat": "no"}];
      
      this.myDropDown  = 'zero';
   })

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
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
    });


    
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });



