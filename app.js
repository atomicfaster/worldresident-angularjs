
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
mongoose = require('mongoose');
var property = require('./backN/property');
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('databaseIP', '192.168.1.18');
app.set('databasePort', '27017');
app.set('databaseName', 'apartment');
// connect database
mongoose.connect('mongodb://' + app.get('databaseIP') + ':' + app.get('databasePort') + '/' + app.get('databaseName'));

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

app.post('/registed',chk.add);
app.get('/partials/:name', routes.partials);

app.get('/properties', property.getProperties);
// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('/', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
