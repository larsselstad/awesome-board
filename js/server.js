var http = require('http');
var ecstatic = require('ecstatic');

var port = 8090;
var folder = __dirname + '/../static';
 
http.createServer(
  ecstatic({
      root: folder
  })
).listen(port);
 
console.log('Listening on ' + port);
console.log('Servering from ' + folder);