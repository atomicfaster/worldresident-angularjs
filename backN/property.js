var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;
var Property = require('../models/property.js');

exports.getProperties = function (req, res) {
  var location = req.param('location');
  
  var point = { type : "Point", coordinates : [parseFloat(location[0]), parseFloat(location[1])] };
  console.log(location);
  if (location && location.length == 2) {
    Property.geoNear( point, 
      { 
        maxDistance : 1,
        spherical : true 
      }, function (err, properties, stats) {
      console.log(stats)
      if (err) {
        console.log(err);
      };
      console.log(properties);
      res.send(200, properties);
    });
  } else {
    res.send(200, []);
  };
  
};

exports.getSomeList = function (req, res) {

 
Property.find().limit(35).exec(function(err,result){res.send(result)});
 };