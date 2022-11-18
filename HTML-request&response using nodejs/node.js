var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
//3.
if (req.url === "/create") {
fs.readFile("./index.html", function (error, pgResp) {
if (error) {
resp.writeHead(404);
resp.write('Contents you are looking are Not Found');
} else {
resp.writeHead(200, { 'Content-Type': 'text/html' });
resp.write(pgResp);
}
resp.end();
});
} else {
//4.
resp.writeHead(200, { 'Content-Type': 'text/html' });
resp.write('<h1>This is a initial page goto URL address below </h1><p>This page as recivied from Server to Client via "localhost:5050" port number. Enter below Address in the url bar</p><br /><br />URL Address => localhost:5050/create: ' + req.url);
resp.end();
}
});
//5.
server.listen(5050);
console.log('Server Started listening on 5050');
