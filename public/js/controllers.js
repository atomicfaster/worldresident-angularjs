'use strict';

/* Controllers */

angular.module('world.controllers', [])
  .controller('MainController', function($scope, $route, $routeParams, $location) {
    //$scope.$route = $route;
    //$scope.$location = $location;
    //$scope.$routeParams = $routeParams;
  })
  .controller('BookController', function($scope, $routeParams) {
    //$scope.params = $routeParams;
  })
  .controller('Usertemp', function($scope, $routeParams) {
    $scope.actionUrl = './public/'+localStorage.getItem('UUID');
  })
  .controller('firstStepCtrl', function ($scope) {
    $scope.isNotSearch = true;
  })
  .controller("listcontroller",function ($scope, $window, $http){
    this.list=[{"propertyId":"77755","title":"APARTMENT FOR RENT IN PLOENCHIT / RATCHADAMRI BTS","detail":"ACCOM ASIA PROPERTY CODE 1412329\r\nSize 166 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 75,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN PLOENCHIT / RATCHADAMRI BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nTastefully and Quality. A tidy living and dining area connect to an open kitchen and washing area. Parquet floor throughout.\r\n\r\nThis Apartment is set on the Great Location!! Near Lumpini Park\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1412329\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":75000,"_id":"5381a6e5a6957dcd056f13fd","__v":0,"date":"2014-05-25T08:16:37.143Z","updated":"2014-05-25T08:16:37.143Z","images":[]},{"propertyId":"77789","title":"BEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS BEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS","detail":"ACCOM ASIA PROPERTY CODE 1413075\r\nSize 200 Sqm 3 Bedrooms 3 Bathrooms \r\nRent 60,000 Baht/month\r\n\r\nBEAUTIFUL APARTMENT FOR RENT / PLOENCHIT BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nNewly totally redecorated, neat and clean, beautiful parquetry flooring, balcony, classic style furnitures, equipped kitchen, within walking distance to Skytrain.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413075\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":60000,"_id":"5381a6e7a6957dcd056f13fe","__v":0,"date":"2014-05-25T08:16:39.248Z","updated":"2014-05-25T08:16:39.248Z","images":[]},{"propertyId":"77806","title":"DELIGHTFUL STYLE APARTMENT FOR RENT IN PLOENCHIT / CHIDLOM BTS","detail":"ACCOM ASIA PROPERTY CODE 1413105\r\nSize 250 Sqm 3 Bedrooms 3 Bathrooms \r\nRent 70,000 Baht/month\r\n\r\nDELIGHTFUL STYLE APARTMENT FOR RENT IN PLOENCHIT / CHIDLOM BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nNice parquet floor, big living and dining area, bright, with open view, big kitchen. Peaceful zone.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413105\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":70000,"_id":"5381a6e7a6957dcd056f13ff","__v":0,"date":"2014-05-25T08:16:39.603Z","updated":"2014-05-25T08:16:39.603Z","images":[]},{"propertyId":"77858","title":"LOW RISE APARTMENT FOR RENT IN LANGSUAN - PLOENCHIT / CHITLOM BTS","detail":"ACCOM ASIA PROPERTY CODE 1413793\r\nSize 91.02 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 60,000 Baht/month\r\n\r\nLOW RISE APARTMENT FOR RENT IN LANGSUAN - PLOENCHIT / CHITLOM BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\nBoutique style with fully furnished, neat and clean, modern equipped kitchen, low-rised building, set on a central location , walking distance to Lumpini Park ( BTS. : Chitlom )\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1413793\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":60000,"_id":"5381a6e7a6957dcd056f1400","__v":0,"date":"2014-05-25T08:16:39.922Z","updated":"2014-05-25T08:16:39.922Z","images":[]},{"propertyId":"77971","title":"ขายอพาร์ทเมนท์ 4 ชั้น 112 ตารางวา ถนนนิมิตรใหม่ ซ.นิมิตรใหม่10","detail":"ขายอพาร์ทเมนท์ 4 ชั้น ถนน นิมิตรใหม่10 \r\nอพาร์ตเม้นท์ใหม่ มีผู้เช่าเต็ม ชั้นล่างมีสำนักงาน มีกล้อง วงจรปิด เข้า-ออกมีคีย์การ์ด ปลอดภัย \r\nร่มรื่น มีWifi เครื่องซักผ้า ตู้น้ำหยอดเหรียญ การเดินทางสะดวก มีรถประจำทางผ่าน เข้าซอยเพียง 80 เมตร \r\n\r\nรหัสทรัพย์สิน : 000404 \r\nราคา : 11,500,000 บาท \r\n\r\nประเภท : อพาร์ทเมนท์ 4 ชั้น \r\nถนน : นิมิตรใหม่ซ.10 \r\nแขวง : ทรายกองดิน \r\nเขต : เขตคลองสามวา \r\nจังหวัด : กรุงเทพมหานคร \r\n\r\nที่ดิน 112 ตารางวา \r\nห้องนอน : 31 ห้อง \r\nห้องน้ำ : 31 ห้อง \r\n\r\nราคาต่อรองได้ค่ะ สนใจนัดชมหรือดูรายละเอียดเพิ่มเติมได้ที่ \r\n\r\nhttp://www.lovethaihome.com/properties_details.php?id=4491","_id":"5381a6e8a6957dcd056f1401","__v":0,"date":"2014-05-25T08:16:40.550Z","updated":"2014-05-25T08:16:40.550Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare8","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare7","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F77971%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/77971/77971-8.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-7.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-6.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-5.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-4.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-3.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-2.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-1.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-8.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-7.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-6.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-5.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-4.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-3.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-2.jpg","http://www.thaihometown.com/photo/image_file4/77971/77971-1.jpg"]},{"propertyId":"78231","title":"อพาร์ทเม้นท์ ใหม่ ให้เช่า วิวดอย ( ห้องแอร์ )","detail":"Ref. code CR 358 , อพาร์ทเม้นท์ ใหม่ ให้เช่า , ใกล้เมือง,  วิวดอย ,                        พื้นที่ 40 ตารางเมตร ห้อง Studio room ,                                                  พร้อม เฟอร์นิเจอร์บางส่วน free - wifi, 1 แอร์ , 1 เครื่องทำน้ำอู่น ,                        สัญญาขั้นต่ำ 3 เดือน ขึ้นไป , ค่าลงสระน้ำ 60 บาท / ครั้ง\r\nติดต่อ  086-1973569 , 088-2590927 , 087-1892322 \r\n\r\n         Ref. code CR 358 , New  apartment   for rent .                                Area of room 40 sq.m , Studio room . Mountain view . partly furnished .     Free- wifi .  1 Air , 1 hot shower . Minimum contract of 3 months or more.   Play swimming pool for 60 baht / per session\r\n   The property Close to town. \r\n          for more information \r\n\r\n              http://www.chiangmaibesthomes.com/detail-condo-rent.php?id=193#Condominium\r\n\r\n\r\n     \r\n           WWW.ChiangmaiBestHomes.com","rent":4500,"_id":"5381a6e8a6957dcd056f1402","__v":0,"date":"2014-05-25T08:16:40.812Z","updated":"2014-05-25T08:16:40.812Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare7","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78231%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78231/78231-7.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-6.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-5.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-4.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-3.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-2.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-1.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-7.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-6.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-5.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-4.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-3.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-2.jpg","http://www.thaihometown.com/photo/image_file4/78231/78231-1.jpg"]},{"propertyId":"78343","title":"ขายและให้เช่าบ้านเอื้ออาทรโครงการวัดศรีวารีน้อย ใกล้สนาบินสุวรรณภูมิ พร้อมเฟอร์นิเจอร์ครบชุด พร้อมเข้าอยู่ ติดเหล็กดัดมุ้งลวดรอบห้อง ห้องอยู่ชั้น1 ห้องมุม. ติดลานจอดรถ สามารถนำรถจักรยานยนต์ไปจอดหน้าห้องได้ สนใจติดต่อ คุณบุ๋ม โทร. 086-971936","detail":"ขายและให้เช่าบ้านเอื้ออาทร พื้นที่ 33 ตร.ม. ใกล้กับสนามบินสุวรรณภูมิ พร้อมเฟอร์นิเจอร์ครบชุด ติดมุ้งลวดเหล็กดัดอย่างดีรอบตัวห้องทั้งบริเวณประตู หน้าต่าง ระเบียงหลังห้อง อยู่ชั้น1 ห้องมุม ติดลานจอดรถ สามารถนำรถจักรยานยนต์มาจอดที่หน้าห้องได้","rent":3000,"_id":"5381a6e9a6957dcd056f1403","__v":0,"date":"2014-05-25T08:16:41.077Z","updated":"2014-05-25T08:16:41.077Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78343%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78343/78343-5.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-4.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-3.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-2.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-1.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-5.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-4.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-3.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-2.jpg","http://www.thaihometown.com/photo/image_file4/78343/78343-1.jpg"]},{"propertyId":"78522","title":"APARTMENT FOR RENT IN SUKHUMVIT/ASOKE BTS - SUKHUMVIT MRT","detail":"ACCOM ASIA PROPERTY CODE 1002301\r\nSize 450 Sqm 4 Bedrooms 5 Bathrooms \r\nRent 150,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT/ASOKE BTS - SUKHUMVIT MRT\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\n\r\nBeautiful wooden floor, nice balcony, nice breeze on high floor, fully furnished, modern European kitchen, quality fitted, maid room, handy location.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1002301\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":150000,"_id":"5381a6f4a6957dcd056f1408","__v":0,"date":"2014-05-25T08:16:52.347Z","updated":"2014-05-25T08:16:52.347Z","images":[]},{"propertyId":"97352","title":"CHATRIUM SUITES APARTMENT FOR RENT IN CHAROENKRUNG.","detail":"ACCOM ASIA PROPERTY CODE 1512815\r\nSize 120 Sqm 2 Bedrooms 2 Bathrooms \r\nRent 65,000 Baht/month\r\n\r\nCHATRIUM SUITES APARTMENT FOR RENT IN CHAROENKRUNG. \r\n\r\nNice decorated. Breezy.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (hotline 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1512815\r\n\r\nAccom Asia Co.,Ltd \r\n02 258 0151 : kwan@accomasia.co.th","rent":65000,"_id":"5381c093a6957dcd056f19d2","__v":0,"date":"2014-05-25T10:06:11.771Z","updated":"2014-05-25T10:06:11.771Z","images":[]},{"propertyId":"78388","title":"ห้องเช่า ทองหล่อ ซอย7 สงบ ปลอดภัย ใจกลางเมือง","detail":"ลักษณะโดยรวม เป็นบ้านเดี่ยว3ชั้น มีดาดฟ้า แบ่งให้เช่าเป็นห้อง แต่ละห้องกว้างขวาง มีห้องน้ำ ระเบียง ให้ความรู้สึกเหมือนอยู่บ้าน สงบ ปลอดภัย เหมาะแก่การพักผ่อน เดินทางสะดวก ราคาถูก เลี้ยงสัตว์เล็กได้ สัญญาไม่ยุ่งยาก สังคมเล็ก เอาใจใส่ เจ้าของดูแลเองยินดีบริการ 24 ชั่วโมง :)\r\nห้องเปล่าเดือนละ 11000 บาท\r\nตกแต่งพร้อมเข้าอยู่ แอร์ น้ำอุ่น ตู้ เตียง โต๊ะ เก้าอี้ โซฟา เดือนละ 15000 บาท\r\nค่าน้ำ ห้องละ 300 ค่าไฟ หน่วยละ 7 บาท\r\n\r\nติดต่อ 090-798-0860 คุณอ้น\r\nLine ID: Aon.kjแนะนำข้อมูล สำหรับการเดินทาง :\r\n\t\t\tลงสถานีรถไฟฟ้าทองหล่อ เดินเข้าซอย มีรถเมล์เล็ก วินมอเตอร์ไซ รถกะป้อ จนถึงซอย7","rent":11000,"location":[100.580199,13.730553],"_id":"5381a6e9a6957dcd056f1404","__v":0,"date":"2014-05-25T08:16:41.869Z","updated":"2014-05-25T08:16:41.869Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare6","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare5","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78388%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78388/78388-6.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-5.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-4.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-3.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-2.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-1.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-6.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-5.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-4.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-3.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-2.jpg","http://www.thaihometown.com/photo/image_file4/78388/78388-1.jpg"]},{"propertyId":"78446","title":"ขายอาคารสร้างใหม่ตกแต่งพร้อม เฟอร์นิเจอร์ เหมาะสำหรับทำอพาร์ตเมนท์ ย่านพรานนก","detail":"อาคารสร้างใหม่ ทำเลดีย่านธุรกิจ เนื้อที่ดิน 68 ตารางวา เป็นอาคาร 3 ชั้น ตกแต่งพร้อมเปิดดำเนินการ เฟอร์นิเจอร์ครบ เครื่องปรับอากาศ กล้องวงจรปิด จานดาวเทียม  เหมาะสำหรับทำอพาร์ตเมนต์ หรือ บูทีคโฮเท็ล ใกล้ รพ.ธนบุรี รพ.ศิริราช ตลาดพรานนก การเดินทางสะดวกใกล้สถานีรถไฟฟ้าที่กำลังจะเปิดใหม่","location":[100.477567,13.752966],"_id":"5381a6eaa6957dcd056f1405","__v":0,"date":"2014-05-25T08:16:42.203Z","updated":"2014-05-25T08:16:42.203Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78446%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78446/78446-3.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-2.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-1.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-3.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-2.jpg","http://www.thaihometown.com/photo/image_file4/78446/78446-1.jpg"]},{"propertyId":"78450","title":"ขายอพาร์ทเม้นท์อมตะนคร,ห้องเช่าบ้านมินตราชลบุรี","detail":"http://siamtag.com/products/10679/\r\nขายห้องเช่า พร้อมที่ดิน 265 ตรว. อยู่ใกล้ อมตะนคร จ.ชลบุรี ใกล้ทางด่วนมอเตอร์เวย์ 500 เมตร\r\nบ้านมินตรา 108 ซอยบ้านเก่า 12 หมู่ 2 ตำบล บ้านเก่า อ.พานทอง จ.ชลบุรี\r\nดำเนินธุรกิจให้เช่าห้องมาแล้ว 2 ปี มีห้องทั้งหมด 24 ห้อง\r\nห้องแอร์ 3 ห้อง ให้เช่าห้องละ 2,800 บาท\r\nห้องพัดลม 20 ห้อง ให้เช่าห้องละ 2,300 บาท\r\nมีเคเบิ้ลทีวี ทุกห้อง เก็บห้องละ 100 บาท\r\nมีเสาอากาศทีวีทุกห้อง\r\nค่าน้ำค่าไฟเจ้าของเก็บเอง\r\nมีร้านขายของชำให้ 1 ห้อง\r\nมีบริการเครื่องซักผ้าหยอดเหรียญให้ 3 เครื่อง\r\nมีบริการเครื่องกรองน้ำดื่มให้ 1 ตู้\r\nมีกล้องวงจรปิดให้ 12 ตัว\r\nพื้นที่จอดรถยนต์ได้ประมาณ 13 คัน\r\nปัจจุบันมีลูกบ้านพักอาศัยเต็มทุกห้อง\r\nมีรายได้รวมจากการให้บริการทั้งหมด ประมาณ 8หมื่นบาท ต่อเดือน\r\nขายรวมให้ทุกอย่างแนะนำข้อมูล สำหรับการเดินทาง :\r\n\t\t\t-เข้าจากทางด่วนสาย บางนา-ชลบุรี เลยตลาดมณีย์ ชิดซ้ายเข้าซอยถนนบ้านเก่า\r\n-วิ่งตรงไปอีกประมาณ 4 กม. อยู่ซอย บ้านเก่า 12 ฝั่งซ้าย \r\n-เข้าซอย บ้านเก่า 12 ไปอีกประมาณ 650 เมตร ถีง 4 แยก เลี่ยวขวา ตรงหัวมุมเป็นบ้านผู้ใหญ่บ้านหมู่ 2\r\n-ตรงไปอีกประมาณ 800 เมตร ถึงอพาร์ทเม้นท์บ้านมินตรา\r\n-จากอพาร์ทเม้นท์ตรงไปสุดซอย ประมาณ 400 เมตร ถึงทางด่วนมอเตอร์เวย์ สายใหม่","_id":"5381a6eaa6957dcd056f1406","__v":0,"date":"2014-05-25T08:16:42.539Z","updated":"2014-05-25T08:16:42.539Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare4","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78450%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78450/78450-4.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-3.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-2.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-1.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-4.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-3.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-2.jpg","http://www.thaihometown.com/photo/image_file4/78450/78450-1.jpg"]},{"propertyId":"78486","title":"อพาร์ทน่าอยู่ ซอยเอกมัย สุขุมวิท 63 Low rise apartment on Soi Ekamai, Sukhumvit 63 Road","detail":"อพาร์ทน่าอยู่ ซอยเอกมัย สุขุมวิท  63\r\nเดินทางสะดวกมาก ใกล้ BTS เดินถึงซุปเปอร์มาเก็ต\r\nห้องสวย 250 ตารางเมตร 3 ห้องนอน มีห้องแม่บ้าน\r\nตกแต่งโมเดิร์น มีสระว่ายน้ำ ห้องออกกำลังกาย สนามเด็กเล่น\r\nให้เช่า 87,000/เดือน\r\n\r\nLow rise apartment on Soi Ekamai, Sukhumvit 63 Road\r\nNearby BTS and Supermarket\r\nModern decorated, area 250 square meter 3 bedroom+maid room\r\nSwimming pool, Gym room and children playground\r\nRent 87,000/month","rent":87000,"_id":"5381a6eaa6957dcd056f1407","__v":0,"date":"2014-05-25T08:16:42.884Z","updated":"2014-05-25T08:16:42.884Z","images":["http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare3","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare2","http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.thaihometown.com%2Fapartment%2F78486%2Fphotoshare1","http://www.thaihometown.com/photo/image_file4/78486/78486-3.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-2.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-1.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-3.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-2.jpg","http://www.thaihometown.com/photo/image_file4/78486/78486-1.jpg"]},{"propertyId":"78530","title":"APARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS","detail":"ACCOM ASIA PROPERTY CODE 1412000\r\nSize 258 Sqm 3+1 Bedrooms 4 Bathrooms \r\nRent 80,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS\r\n\r\nRENT/SALE/BUY BANGKOK PROPERTY \r\n\r\n\r\nSoftly Painted and Interior, modern style furnishing, love balcony, living - dining area towards to big European kitchen.\r\n\r\nA 7-story apartment building with 12 units in total, 6 units are tiled floor and the others are wooden floor.\r\n\r\nLocated on a tree lined street within walking distance to supermarket and skytrain.\r\n\r\nAll units are well designed and fully furnished, boasting quality fitted through-out, functional setting living - dining area, big fully equipped kitchen and maid\\'s room.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1412000\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":80000,"_id":"5381a712a6957dcd056f1409","__v":0,"date":"2014-05-25T08:17:22.829Z","updated":"2014-05-25T08:17:22.829Z","images":[]},{"propertyId":"78538","title":"APARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS.","detail":"ACCOM ASIA PROPERTY CODE 1415658\r\nSize 290 Sqm 4 Bedrooms 4 Bathrooms \r\nRent 103,000 Baht/month\r\n\r\nAPARTMENT FOR RENT IN SUKHUMVIT / EKKAMAI BTS. \r\n\r\nBUY / SALE / RENT BANGKOK PROPERTY. \r\n\r\n\r\nOffering good environment for families, the unit is well finished and furnished, open floor plan, big covered balcony, equipped kitchen.\r\n\r\nHandy location to supermarket and skytrain.\r\n\r\nMORE PHOTO &amp; VDO : www.accomasia.co.th. (HOTLINE 081 422 1412)\r\n\r\nhttp://www.accomasia.co.th/en/property-detail.php?code=1415658\r\n\r\nAccom Asia Co.,Ltd 02 258 0151, 081 4221412 : kwan@accomasia.co.th","rent":103000,"_id":"5381a715a6957dcd056f140a","__v":0,"date":"2014-05-25T08:17:25.254Z","updated":"2014-05-25T08:17:25.254Z","images":[]}];
      this.notification1=[{}];
     
        $scope.items1 = [];
        $scope.items2 = [];
        $scope.items3 = [];
        $scope.password = "";
       
      
    $scope.del_tel = function(txt){
      var index = $scope.items1.indexOf(txt);
      if (index > -1) {
        $scope.items1.splice(index, 1);
      }
    };
     
    $scope.del_mobile = function(txt){
      var index = $scope.items2.indexOf(txt);
      if (index > -1) {
        $scope.items2.splice(index, 1);
      }
    };
     
    $scope.del_fax = function(txt){
      var index = $scope.items3.indexOf(txt);

      if (index > -1) {
        $scope.items3.splice(index, 1);
      }
    };

    $scope.passupdate=function(txt) {
      console.log(this.password);
      $scope.password = this.password;
    };
    
    $scope.patternupdate = function() {
      var re = new RegExp("^"+$scope.password+"$", "");
      return re;
    };

    $scope.actionUrl = '/logosave?_id='+localStorage.getItem('UUID');



    $scope.fine = function(params){
      var data = "fine_date="+params.date_no+"&fine_cost="+params.fine_cost+"&_id="+localStorage.getItem("building_id");
      $http.post('/fineupdate?'+data).success(function (data, status, headers, config) {
        if (status==200) {
          alert("building updated"+localStorage.getItem("building_id"));
        }
        else {
          alert("please check your information");
        }
      });
    };

    $scope.docupdate = function(params,logo)
    { 
        console.log(params+":     "+ logo);
       var file= document.getElementsByTagName('input')[9].files[0].name;

        var data = "company_address="+params.comp_address+"&amphures="+params.comp_aumphures+"&district="+params.comp_district+"&province="+params.comp_province+"&postcode="+params.comp_postcode+"&tel_doc="+params.comp_tel+"&mobile_doc="+params.comp_mobile+"&fax_doc="+params.comp_fax+"&web_site="+params.comp_site+"&company_name="+params.comp_name+"&_id="+localStorage.getItem('building_id')+"&logo="+file;
        $http.post('/docupdate?'+data).success(function(data, status, headers, config){

            if(status==200)
            {
                
                alert("building updated"+localStorage.getItem("building_id"));
                           }
            else
                alert("please check your information");
                   });          

    };

    $scope.create = function(params)
    {


       var data =  "userid="+localStorage.getItem("UUID")+"&building="+params.building_name+"&address="+params.building_address+"&tel="+params.building_tel+"&fax="+params.building_fax+"&detail="+params.building_detail;
      $http.post('/createbuilding?'+data).success(function(data, status, headers, config){

            if(status==200)
            {
                localStorage.setItem("building_id",data._id);
                alert("building created"+localStorage.getItem("building_id"));
                           }
            else
                alert("please check your information");
                   });


    };

    $scope.update = function(params)
     {

    var tel="";
    var fax="";
    var mobile="";

    /*for (var prop in $scope.items1) {
                  if ( $scope.items1.hasOwnProperty(prop)) { 
        tel = tel+$scope.items1[prop]+",";
    }
    }
    for (var prop in $scope.items2) {
         if ( $scope.items2.hasOwnProperty(prop)) { 
          mobile = tel+$scope.items2[prop]+",";
      }
    }
    for (var prop in $scope.items3) {
         if ( $scope.items3.hasOwnProperty(prop)) { 
          fax = tel+$scope.items3[prop]+",";
      }
    }
    */

        var data = "username="+params.username+"&passwd="+MD5(this.password)+"&name="+params.fname+"&lastname="+params.lname+"&email="+params.email+"&address="+params.address+"&zipcode="+params.post_code+"&amphure="+params.amphures+"&district="+params.district+"&provinces="+params.provinces+"&tel="+tel+"&mobile="+mobile+"&fax="+fax;
           

         
            console.log(data);

           $http.post('/registed?'+data, data).success(function(data, status, headers, config){

            if(status==200)
            {
                alert("Your Account Activated");
                $window.location.pathname="/first_step";
            }
            else
                alert("please check your information");
                   });
         };

           $scope.login = function(user,pass)
          {
      
             $http.get('/checklogin?user='+user+'&&pass='+MD5(pass)).success(function(data, status, headers) {
                
         if(data != "")
         {
            localStorage.setItem('UUID',data._id);
            alert(localStorage.getItem('UUID'));
                $http.get('/getbuildinginfo?user='+user+'&&pass='+MD5(pass)).success(function(data, status, headers) {
                     if(data != "")
                        {
                            localStorage.setItem('UUID',data._id);
                        }        
                        else
                          console.log(data);
        });

          $window.location.pathname="/first_step";
        }
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
           $scope.date_val2 = new Date();
           $scope.date_val1 = new Date();

           $scope.total_sum = function(s1,s2,s3,s4,s5){

         if(s1===undefined){s1=0;}if(s2===undefined){s2=0;}if(s3===undefined){s3=0;}if(s4===undefined){s4=0;}if(s5===undefined){s5=0;}

         
            return ( parseInt(s1)+ parseInt(s2)+ parseInt(s3)+ parseInt(s4)+ parseInt(s5));
            
            };

            $scope.adds1 = function(txt){
                if(!$scope.items1.contains(txt)&&txt!="")
                $scope.items1.push(txt);
            this.tel="";
            }
            $scope.adds2 = function(txt){
               if(!$scope.items2.contains(txt)&&txt!="")
                $scope.items2.push(txt);
            this.mobile="";
            }
            $scope.adds3 = function(txt){
                if(!$scope.items3.contains(txt)&&txt!="")
                $scope.items3.push(txt);
            this.fax="";
            }
   });