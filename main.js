var express = require("express");
var app = express();
var fs = require("fs");

const PORT = process.env.PORT || 3030;

var goldPrice = 40000;
app.get("/getGoldPrice", function (req, res) {
  res.json({
    goldPrice: goldPrice,
  });
  goldPrice++;
});

var server = app.listen(PORT, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
