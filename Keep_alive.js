var http require('http');

http.createServer (function (req, res) {

res.write("I'm alive");

I

res.end();

}).listen(8080);
