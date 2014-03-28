var sys = require('util');
var net = require('net');

var dgram = require('dgram');
var message = new Buffer(process.argv[2]);
var client = dgram.createSocket("udp4");
client.bind();
client.setBroadcast(true);
client.send(message, 0, message.length, 8282, "192.168.0.255", function(err, bytes) {
    client.close();
});