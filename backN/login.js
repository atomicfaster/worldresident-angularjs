
var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;
var User = require('../models/user.js');

exports.check = function(req,res)
{

  User.find({username : req.query.user}).exec(function(err,result){res.send(result);});
}

exports.login = function(req,res)
{
  
  console.log(req.query.pass);
  User.findOne({username:req.query.user}).exec
  (
        function(err,result)
          {
              console.log(result);
              try
              {
                  if(result.passwd==req.query.pass)
                  {
                    console.log(result);
                    res.send(result);
                  }
                  else
                  {
                    res.send("");
                  }
              }
              catch(ex)
              {
                  res.send("");
              }

          }
  )

};

exports.add = function(req,res)
{
 




      var user = {}
      var ObjectId = mongoose.Types.ObjectId; 
      var newId = new ObjectId();
      user._id = newId;
   	  user.username=req.query.username;
  user.passwd=req.query.passwd;
  if(user.type==undefined)
    user.type=0;
  else
  user.type= req.query.type;

  user.name= req.query.name;
  user.lastname=req.query.lastname;
  user.email= req.query.email;
  user.address= req.query.address;
  user.zipcode= req.query.zipcode;
  user.amphure=req.query.amphure;
  user.district=req.query.district;
  user.province=req.query.provinces;

  user.tel  = [];
  user.tel=req.query.tel.split(',');
  user.mobile  = [];
  user.mobile = req.query.mobile.split(',');
  user.fax = [];
  user.fax = req.query.fax.split(',');
  user.active=0;
  if(req.query.company!=undefined)
  user.company=req.query.company;
else
   user.company=0;

 if(req.query.regisnum!=undefined)
  user.regisnum=req.query.regisnum;
else
   user.regisnum=0;

 if(req.query.capital!=undefined)
  user.capital=req.query.capital;
else
   user.capital=0;

 if(req.query.companyname!=undefined)
  user.companyname=req.query.companyname;
else
 user.companyname=0;
   console.log(user);

var newUser = new User(user);
                    newUser.save(function (err) {
                      if (err) {
                        res.send(201, "error" + err);
                        return;
                      }
                      res.send(200, newUser);
                      return;
                    });

//console.log(data.test_server.zipcodes[0].zipcode[0]);
//



}




exports.logins = function(req, res){
 
 var user=[{"user":"test01","pass":"1234"},{"user":"test02","pass":"1234"},
 {"user":"test03","pass":"1234"},{"user":"test04","pass":"1234"},{"user":"test05","pass":"1234"}
 ,{"user":"test06","pass":"1234"},{"user":"test07","pass":"1234"},{"user":"test08","pass":"1234"}];

for(var i=0;i<user.length;i++)
{
if(req.query.user==user[i].user&&req.query.pass==user[i].pass){
res.send("1");
break;
}

}
res.send("0");

};
