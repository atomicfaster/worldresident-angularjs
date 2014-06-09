

exports.login = function(req, res){
 
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