var http = require("http");
setInterval(function() {
  http.get("www.asmuch.xyz");
}, 300000); // every 5 minutes (300000)
