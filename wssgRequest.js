var http = require("http");

module.exports = function(path, callback ){
	var options = {
		hostname: 'api.macys.com',
		path: path,
		port: 80,
		headers: {
			'accept': 'application/json',
			'X-Macys-Webservice-Client-Id': 'kysv6mh9a3b3b4gwr8n4q56w'
		}
	};

	var result = "";

	var req = http.request(options, function(res){
		
		res.on('data', function(chunk){
			result += chunk;
		});

		res.on('end', function(){
			if(result.indexOf("<h1>") == -1){
				//result = JSON.parse(result);
				console.log("Successful request");
				callback(result);
			}
			else{
				console.log("Detected Developer Over Qps");
			}
		});
	});

	req.on('error', function(e){
		console.log("Error! " + e.message);
	});

	req.end();
}
