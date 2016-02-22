var PORT_NUMBER = 8080;
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var morgan = require('morgan');

var logger = morgan();

var serve = serveStatic("./static");

console.log("Starting server at port: " + PORT_NUMBER);
var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  logger(req, res, function(err){
    if (err) return done(err);
    //console.log(req);
  });
  serve(req, res, done);
});

server.listen(PORT_NUMBER);
