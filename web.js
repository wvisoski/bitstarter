
var express = require('express');
var fs = require('fs');
var buff = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//    var buffa = (fs.readFileSync('index.html'));
    response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
