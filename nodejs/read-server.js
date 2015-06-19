var html,
    http = require('http'),
    fs = require('fs');

fs.readFile('./page.html', function(err, buffer){
    html = buffer.toString();
});

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();

}).listen(8080);

console.log('Server running on localhost at port 8080');