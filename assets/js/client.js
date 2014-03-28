var config = new Object();
config.iprange="192.168.0.255";
config.port = 8282;
config.member=  ['all','servers']; 


/**
 * Module dependencies.
 */
var sys = require('util');
var net = require('net');
var colors = require('colors');
var dgram = require("dgram");
var os = require('os');
var sugar = require('sugar');
var cp = require("child_process");
var hostname = os.hostname(); 
config.member.add(hostname);

colors.setTheme({
  input: 'grey',
  output: 'white',
  success: 'green',
  help: 'cyan',
  warn: 'yellow',
  error: 'red'
});



 var server = dgram.createSocket("udp4");


 server.on("message", function (msg, rinfo) {
	var str = "" + msg;
	var command = str.words().first(1);
	var servers = str.words().from(1);
	var date = Date.create().long();
	var islog = false;
	
	var inputlog = msg + " [msg from " +  rinfo.address + " " +  date + "]";	// ":" + rinfo.port 
	if (command.some("log"))  { 
			inputlog = (inputlog).output		
		} else {
			inputlog = ( inputlog).input
			islog = true;
		};
	console.log(inputlog);	

	
	//var myRegexp = /(status)/g;   // /(kill server) (.+)/g;
	//var match = myRegexp.exec(msg);
	//console.log(match[1]); 
	


		
	if (servers.intersect(config.member).length==0 ) { 
				if(islog){console.log(("inf " + hostname +  " is not member of: " + JSON.stringify(servers)).warn)};
	} else {	
		//console.log((servers.intersect(config.member) + ", hey - thats me!").grey);
		
		if (command.some("kill-monitor"))  {	
			var	message = "log  taskkill bb monitor @" + hostname  + " " + date;		
		  cp.exec("taskkill.exe /IM monitor.exe /F /T"); // notice this without a callback..
			fn_send(message); 	
		}		
		
		if (command.some("kill-server"))  {	
			var	message = "log  taskkill bb server @" + hostname  + " " + date;		
		  cp.exec("taskkill.exe /IM server.exe /F /T"); // notice this without a callback..
			fn_send(message); 	
		}		
		
		if (command.some("start-server"))  {	
			var	message = "log  start bb server @" + hostname  + " " + date;		
			cp.exec("server"); // notice this without a callback..
			fn_send(message); 	
		}
		
		if (command.some("kill-vrayspawner2011"))  {	
			var	message = "log  taskkill bb vray spawner2011 @" + hostname  + " " + date;		
			cp.exec("taskkill.exe /IM vrayspawner2011.exe /F /T"); // notice this without a callback..
			fn_send(message); 	
		}		
		
				if (command.some("start-vrayspawner2011"))  {	
			var	message = "log  start vrayspawner2011 @" + hostname  + " " + date;		
			cp.exec('start "" "C:\\Program Files\\Autodesk\\3ds Max 2011\\vrayspawner2011.exe"'); // notice this without a callback..
			fn_send(message); 	
		}
				
		if (command.some("status"))  {	
			var	message =  "log " + hostname + " up since "  + Date.create(Math.round(os.uptime()) +" seconds ago ").relative()  + " " +  os.type() + " " + bytesToSize(os.freemem()) +"/" + bytesToSize(os.totalmem()) + " member of" + JSON.stringify(config.member) + " " + date;
			fn_send(message); 	
		} else {}
	
			
		
		
		
	
	} 
		
	
	/*
	switch (type) {
		  case "semantic":
			console.log(("inf " + hostname +  " does not understand command: " + command).warn);  //console.log(("inf " + hostname +  " is not member of: " + JSON.stringify(servers)).grey);
			break;	
		 case "nonemember":
			
			break;
	}
	
	*/
	
	
	
	
 });

 server.on("listening", function () {
   var address = server.address();
   console.log("server listening " + address.address + ":" + address.port);
 });

 server.bind(8282);
 

 function fn_send(message){
 
	var client = dgram.createSocket("udp4");
	client.bind();
	client.setBroadcast(true);
	
	message = new Buffer(message);
 
 	client.send(message, 0, message.length, config.port, config.iprange, function(err, bytes) {
			client.close();
		});
	
 
 }
 
 
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i]; 
    return (bytes / Math.pow(1024, i)).toFixed(1) + '' + sizes[i];
};
 