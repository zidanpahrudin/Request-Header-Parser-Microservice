// server.js
// where your node app starts

// init project
require("dotenv").config();
var requestIp = require("request-ip");
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.set("trust proxy", true);
// your first API endpoint...
app.get("/api/whoami", function (req, res) {
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.json({ ipaddress: ip });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
