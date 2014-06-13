var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;
var Building = require('../models/building.js');




exports.fines = function(req,res)
{ 
	var buildingdata={};
	buildingdata.fine_date = req.query.fine_date;
	buildingdata.fine_cost= req.query.fine_cost;
        
            Building.findOneAndUpdate({_id: ObjectId(req.query._id)}, buildingdata, function (err, property) {
              if (err) {
              	console.log(err);
               res.send("201",err)
              }
              
              
            });
    

//Building.find({_id:{$in:[1,ObjectId(req.query._id)]}})
console.log(buildingdata);
res.send(200,buildingdata);

}
exports.docupdate = function(req,res)
{
		var building={};
		 building.company_name=req.query.company_name;
    building.compaany_address=req.query.company_address;
    building.amphures =req.query.amphures;
  	building.district =req.query.district;
  	building.province =req.query.province;
  	building.postcode =req.query.postcode;
  	building.tel_doc=req.query.tel_doc;
  	building.mobile_doc=req.query.mobile_doc;
  	building.fax_doc=req.query.fax_doc;
  	building.web_site=req.query.web_site;
  	building.logo=req.query.logo;
        
            Building.findOneAndUpdate({_id: ObjectId(req.query._id)}, building, function (err, property) {
              if (err) {
              	console.log(err);
               res.send("201",err)
              }
              
              
            });
    

//Building.find({_id:{$in:[1,ObjectId(req.query._id)]}})
console.log(building);
res.send(200,building);

}

exports.create = function(req,res){
 var data;

     var building = {};
     var ObjectId = mongoose.Types.ObjectId; 
     var newId = new ObjectId();

    building._id= newId;
    building.userid=req.query.userid;
    building.building= req.query.building;
    building.address= req.query.address;
    building.tel= req.query.tel;
    building.fax= req.query.fax;
    building.detail= req.query.detail;
   	building.water_bill= "";
    building.water_vat= 0;
    building.water_vat_val= 0;
   	building.min_water="";
    building.min_water_val="";
    building.water_package="";
    building.energy_bill= "";
    building.energy_vat= 0;
    building.energy_vat_val= 0;
    building.min_energy="";
    building.min_energy_val="";
    building.energy_pay="";
    building.energy_package="";
    building.tel_vat=0;
    building.tel_vat_value=0;
    building.company_name="";
    building.compaany_address="";
    building.amphures ="";
  	building.district ="";
  	building.province ="";
  	building.postcode ="";
  	building.tel_doc="";
  	building.mobile_doc="";
  	building.fax_doc="";
  	building.web_site="";
  	building.logo="";
  	building.fine_date=0;
  	building.fine_cost=0;
 	building.head_banner ="";
	building.apartment_Detail ="";
	building.custom_link ="";


   var newBuilding = new Building(building);
                    newBuilding.save(function (err) {
                      if (err) {
                        res.send(200, err);
                        return;
                      };
                      res.send(200, newBuilding);
                      return;
  
                   });
}
//console.log(data.test_server.zipcodes[0].zipcode[0]);
//
 /*water_bill: req.query.,
    water_vat: req.query.,
    water_vat_val: req.query.,
    min_water:req.query.,
    min_water_val:req.query.,
    water_pay:req.query.,
    water_package:req.query.,
    energy_bill: req.query.,
    energy_vat: req.query.,
    energy_vat_val: req.query.,
    min_energy:req.query.,
    min_energy_val:req.query.,
    energy_pay:req.query.,
    energy_package:req.query.,
    tel_vat:req.query.,
    tel_vat_value:req.query.,
    company_Name:req.query.,
    address:req.query.,
    amphures :req.query.,
  	district :req.query.,
  	provice :req.query.,
  	postcode :req.query.,
  	tel_doc:req.query.,
  	mobile_doc:req.query.,
  	fax_doc:req.query.,
  	web_site:req.query.,
  	logo:req.query.,
  	fine_date:req.query.,
  	fine_val:req.query.,
  	service:[{
		service_name:req.query.,
		fee:req.query.,
		tax:req.query.,
		detail:req.query.
	}],
	head_banner :req.query.,
apartment_Detail :req.query.,
custom_link :req.query.
   console.log(user);*/


//}