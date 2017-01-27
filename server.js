var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 7575;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(err,success){
  console.log("Listening on port: ", port);
});
