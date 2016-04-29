var http = require('http');
var request = require('./wssgRequest');

var PORT = process.env.PORT || 3000;

var server = http.createServer(onRequest);

function onRequest(req, res){
   var url = req.url;
   //var url = "/v4/catalog/search?searchphrase=black+dress";

   console.log("url is: " + url);

   if(req.url != "/favicon.ico")
   { 
      console.log("requesting...");
      request(url, function(result){
	console.log("result is:" + result);
	
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'X-Macys-Webservice-Client-Id, Content-Type');
	res.end(result);
      });
   }
   //res.end("");
};

server.listen(PORT, '0.0.0.0', function(){
   console.log("Server listening on http://localhost:%s", PORT);
});
